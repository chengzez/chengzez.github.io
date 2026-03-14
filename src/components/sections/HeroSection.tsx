import styles from "./HeroSection.module.css";

type HeroSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  chips: readonly string[];
  details: readonly { title: string; description: string }[];
  primaryAction: { label: string; href: string };
  secondaryAction: { label: string; href: string };
  signal: { label: string; title: string; description: string };
  curriculum: readonly string[];
  useCases: readonly string[];
};

function HeroSection({
  eyebrow,
  title,
  description,
  chips,
  details,
  primaryAction,
  secondaryAction,
  signal,
  curriculum,
  useCases,
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

        <div className={styles.detailGrid}>
          {details.map((item) => (
            <article key={item.title} className={styles.detailCard}>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </article>
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
            <p>课程骨架</p>
            <div className={styles.curriculumGrid}>
              {curriculum.map((item) => (
                <span key={item} className={styles.curriculumChip}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.spotlightGrid}>
            {useCases.map((item, index) => (
              <article key={item} className={styles.spotlightCard}>
                <strong className={styles.useCaseTitle}>{`${index + 1}. ${item}`}</strong>
                <p>从现实 use case 进入课堂，再回到学生自己的作品设计。</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
