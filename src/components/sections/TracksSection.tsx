import type { LearningTrack } from "../../content/home";
import SectionHeading from "../ui/SectionHeading";
import styles from "./TracksSection.module.css";

type TracksSectionProps = {
  eyebrow: string;
  title: string;
  items: readonly LearningTrack[];
};

function TracksSection({ eyebrow, title, items }: TracksSectionProps) {
  return (
    <section className={styles.section} id="tracks">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className={styles.grid}>
        {items.map((item, index) => (
          <article
            key={item.title}
            className={`${styles.card} ${index === 1 ? styles.featured : ""}`}
          >
            <span className={styles.label}>{item.label}</span>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TracksSection;
