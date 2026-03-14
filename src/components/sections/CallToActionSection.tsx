import styles from "./CallToActionSection.module.css";

type CallToActionSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: { label: string; href: string };
  secondaryAction: { label: string; href: string };
};

function CallToActionSection({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
}: CallToActionSectionProps) {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.copy}>
        <p>{eyebrow}</p>
        <h2>{title}</h2>
        <span>{description}</span>
      </div>

      <div className={styles.actions}>
        <a className={styles.primary} href={primaryAction.href}>
          {primaryAction.label}
        </a>
        <a className={styles.secondary} href={secondaryAction.href}>
          {secondaryAction.label}
        </a>
      </div>
    </section>
  );
}

export default CallToActionSection;
