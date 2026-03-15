import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import type { ContactMethod } from "../../content/home";
import SectionHeading from "../ui/SectionHeading";
import styles from "./ContactSection.module.css";

declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void;
      render: (
        container: HTMLElement | string,
        parameters: {
          sitekey: string;
          theme?: "light" | "dark";
          callback: (token: string) => void;
          "expired-callback": () => void;
          "error-callback": () => void;
        },
      ) => number;
      reset: (widgetId?: number) => void;
    };
  }
}

type ContactSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  methods: readonly ContactMethod[];
  form: {
    nameLabel: string;
    emailLabel: string;
    levelLabel: string;
    messageLabel: string;
    captchaLabel: string;
    submitLabel: string;
    successMessage: string;
    errorMessage: string;
    configMessage: string;
  };
};

type SubmitState = "idle" | "submitting" | "success" | "error";
type CaptchaState = "idle" | "loading" | "ready" | "error";

function ContactSection({
  eyebrow,
  title,
  description,
  methods,
  form,
}: ContactSectionProps) {
  const apiKey = import.meta.env.VITE_STATICFORMS_API_KEY?.trim() ?? "";
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY?.trim() ?? "";
  const captchaContainerRef = useRef<HTMLDivElement | null>(null);
  const captchaWidgetIdRef = useRef<number | null>(null);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [captchaState, setCaptchaState] = useState<CaptchaState>(siteKey ? "loading" : "idle");
  const [captchaToken, setCaptchaToken] = useState("");
  const [message, setMessage] = useState("");

  const isConfigured = Boolean(apiKey && siteKey);
  const isCaptchaReady = captchaState === "ready";

  useEffect(() => {
    if (!siteKey) {
      setCaptchaState("idle");
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>('script[data-recaptcha-script="true"]');
    const handleLoad = () => setCaptchaState("ready");
    const handleError = () => setCaptchaState("error");

    if (window.grecaptcha?.render) {
      handleLoad();
      return;
    }

    setCaptchaState("loading");

    if (existingScript) {
      existingScript.addEventListener("load", handleLoad);
      existingScript.addEventListener("error", handleError);

      return () => {
        existingScript.removeEventListener("load", handleLoad);
        existingScript.removeEventListener("error", handleError);
      };
    }

    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit&hl=zh-CN";
    script.async = true;
    script.defer = true;
    script.dataset.recaptchaScript = "true";
    script.addEventListener("load", handleLoad);
    script.addEventListener("error", handleError);
    document.head.appendChild(script);

    return () => {
      script.removeEventListener("load", handleLoad);
      script.removeEventListener("error", handleError);
    };
  }, [siteKey]);

  useEffect(() => {
    if (!siteKey || !isCaptchaReady || !captchaContainerRef.current || captchaWidgetIdRef.current !== null) {
      return;
    }

    window.grecaptcha?.ready(() => {
      if (!captchaContainerRef.current || captchaWidgetIdRef.current !== null) {
        return;
      }

      captchaWidgetIdRef.current = window.grecaptcha?.render(captchaContainerRef.current, {
        sitekey: siteKey,
        theme: "light",
        callback: (token: string) => {
          setCaptchaToken(token);
          setSubmitState("idle");
        },
        "expired-callback": () => {
          setCaptchaToken("");
        },
        "error-callback": () => {
          setCaptchaToken("");
          setCaptchaState("error");
        },
      }) ?? null;
    });
  }, [isCaptchaReady, siteKey]);

  function resetCaptcha() {
    setCaptchaToken("");

    if (captchaWidgetIdRef.current !== null) {
      window.grecaptcha?.reset(captchaWidgetIdRef.current);
    }
  }

  const helperText = useMemo(() => {
    if (!isConfigured) {
      return form.configMessage;
    }

    if (captchaState === "loading") {
      return "正在加载验证码，请稍等片刻。";
    }

    if (captchaState === "error") {
      return "验证码加载失败，请刷新页面后重试，或直接通过邮箱联系。";
    }

    if (submitState === "success") {
      return form.successMessage;
    }

    if (submitState === "error") {
      return form.errorMessage;
    }

    if (!captchaToken) {
      return "请先完成验证码，再提交咨询。";
    }

    return "提交后信息会自动发送到你的咨询邮箱。";
  }, [
    captchaState,
    captchaToken,
    form.configMessage,
    form.errorMessage,
    form.successMessage,
    isConfigured,
    submitState,
  ]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isConfigured || submitState === "submitting" || !captchaToken) {
      setSubmitState("error");
      return;
    }

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    formData.append("apiKey", apiKey);
    formData.append("subject", "星跃 AI 编程营新咨询");
    formData.append("replyTo", String(formData.get("email") ?? ""));
    formData.append("honeypot", "");
    formData.append("g-recaptcha-response", captchaToken);

    try {
      setSubmitState("submitting");
      const response = await fetch("https://api.staticforms.dev/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const result = (await response.json().catch(() => null)) as
        | { success?: boolean; message?: string }
        | null;

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || "submit_failed");
      }

      formElement.reset();
      setMessage("");
      resetCaptcha();
      setSubmitState("success");
    } catch {
      resetCaptcha();
      setSubmitState("error");
    }
  }

  return (
    <section className={styles.section} id="contact">
      <div className={styles.intro}>
        <SectionHeading eyebrow={eyebrow} title={title} />
        <p className={styles.description}>{description}</p>

        <div className={styles.methods}>
          {methods.map((item) => {
            const content = (
              <>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.note}</p>
              </>
            );

            if (item.href) {
              return (
                <a key={item.label} className={styles.methodCard} href={item.href}>
                  {content}
                </a>
              );
            }

            return (
              <div key={item.label} className={styles.methodCard}>
                {content}
              </div>
            );
          })}
        </div>
      </div>

      <form className={styles.formCard} onSubmit={handleSubmit}>
        <label className={styles.field}>
          <span>{form.emailLabel}</span>
          <input
            name="email"
            type="email"
            placeholder="例如：hello@example.com"
            required
          />
        </label>

        <label className={styles.field}>
          <span>{form.levelLabel}</span>
          <select name="grade" defaultValue="9年级">
            <option>6年级</option>
            <option>7年级</option>
            <option>8年级</option>
            <option>9年级</option>
            <option>10年级</option>
            <option>11年级</option>
            <option>12年级</option>
          </select>
        </label>

        <label className={styles.field}>
          <span>{form.messageLabel}</span>
          <textarea
            name="message"
            placeholder="可以写下学生基础、想学方向、想了解的营期或试听安排。"
            rows={6}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
        </label>

        <div className={styles.field}>
          <span>{form.captchaLabel}</span>
          <div className={styles.captchaWrap}>
            {siteKey ? <div ref={captchaContainerRef} className={styles.captchaMount} /> : null}
          </div>
        </div>

        <input className={styles.honeypot} type="text" name="honeypot" tabIndex={-1} autoComplete="off" />

        <div className={styles.formFooter}>
          <p
            className={`${styles.feedback} ${
              submitState === "success"
                ? styles.success
                : submitState === "error" || captchaState === "error"
                  ? styles.error
                  : ""
            }`}
          >
            {submitState === "submitting" ? "正在发送中..." : helperText}
          </p>

          <button
            type="submit"
            disabled={!isConfigured || submitState === "submitting" || !isCaptchaReady || !captchaToken}
          >
            {submitState === "submitting" ? "发送中..." : form.submitLabel}
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactSection;
