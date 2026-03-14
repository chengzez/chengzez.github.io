import type { Feature } from "../../content/home";
import styles from "./HeroSection.module.css";

type HeroSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  chips: readonly string[];
  primaryAction: { label: string; href: string };
  secondaryAction: { label: string; href: string };
  signal: { label: string; title: string; description: string };
  spotlight: readonly Feature[];
};

function HeroSection({
  eyebrow,
  title,
  description,
  chips,
  primaryAction,
  secondaryAction,
  signal,
  spotlight,
}: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.title}>
          {title.split("\n").map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </h1>
        <p className={styles.description}>{description}</p>

        <div className={styles.actions}>
          <a className={styles.primaryAction} href={primaryAction.href}>
            {primaryAction.label}
          </a>
          <a className={styles.secondaryAction} href={secondaryAction.href}>
            {secondaryAction.label}
          </a>
        </div>

        <div className={styles.chips}>
          {chips.map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </div>
      </div>

      <div className={styles.lab}>
        <div className={styles.signalCard}>
          <span>{signal.label}</span>
          <strong>{signal.title}</strong>
          <p>{signal.description}</p>
        </div>

        <div className={styles.visualPanel}>
          <div className={styles.orbit} />
          <div className={styles.graphCard}>
            <p>学习雷达</p>
            <div className={styles.graph}>
              <span />
              <span />
              <span />
            </div>
            <div className={styles.graphMeta}>
              <b>编程</b>
              <b>数据</b>
              <b>表达</b>
            </div>
          </div>

          <div className={styles.spotlightGrid}>
            {spotlight.map((item) => (
              <article key={item.title} className={styles.spotlightCard}>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
