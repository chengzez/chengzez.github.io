import { FormEvent, useMemo, useState } from "react";
import type { ContactMethod } from "../../content/home";
import SectionHeading from "../ui/SectionHeading";
import styles from "./ContactSection.module.css";

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
    submitLabel: string;
    successMessage: string;
    errorMessage: string;
    configMessage: string;
  };
};

type SubmitState = "idle" | "submitting" | "success" | "error";

function ContactSection({
  eyebrow,
  title,
  description,
  methods,
  form,
}: ContactSectionProps) {
  const apiKey = import.meta.env.VITE_STATICFORMS_API_KEY?.trim() ?? "";
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  const isConfigured = Boolean(apiKey);

  const helperText = useMemo(() => {
    if (!isConfigured) {
      return form.configMessage;
    }

    if (submitState === "success") {
      return form.successMessage;
    }

    if (submitState === "error") {
      return form.errorMessage;
    }

    return "提交后信息会自动发送到你的咨询邮箱。";
  }, [form.configMessage, form.errorMessage, form.successMessage, isConfigured, submitState]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isConfigured || submitState === "submitting") {
      return;
    }

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    formData.append("apiKey", apiKey);
    formData.append("subject", "星跃 AI 编程营新咨询");
    formData.append("replyTo", String(formData.get("email") ?? ""));
    formData.append("honeypot", "");

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
      setSubmitState("success");
    } catch {
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
        <div className={styles.grid}>
          <label className={styles.field}>
            <span>{form.nameLabel}</span>
            <input name="name" type="text" placeholder="例如：李同学妈妈" required />
          </label>

          <label className={styles.field}>
            <span>{form.emailLabel}</span>
            <input
              name="email"
              type="email"
              placeholder="例如：hello@example.com"
              required
            />
          </label>
        </div>

        <label className={styles.field}>
          <span>{form.levelLabel}</span>
          <select name="grade" defaultValue="高中一年级">
            <option>初中一年级</option>
            <option>初中二年级</option>
            <option>初中三年级</option>
            <option>高中一年级</option>
            <option>高中二年级</option>
            <option>高中三年级</option>
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

        <input className={styles.honeypot} type="text" name="honeypot" tabIndex={-1} autoComplete="off" />

        <div className={styles.formFooter}>
          <p
            className={`${styles.feedback} ${
              submitState === "success"
                ? styles.success
                : submitState === "error"
                  ? styles.error
                  : ""
            }`}
          >
            {submitState === "submitting" ? "正在发送中..." : helperText}
          </p>

          <button type="submit" disabled={!isConfigured || submitState === "submitting"}>
            {submitState === "submitting" ? "发送中..." : form.submitLabel}
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactSection;
