import type { TimelineStep } from "../../content/home";
import SectionHeading from "../ui/SectionHeading";
import styles from "./ExperienceSection.module.css";

type ExperienceSectionProps = {
  eyebrow: string;
  title: string;
  timeline: readonly TimelineStep[];
  panelTitle: string;
  panelBullets: readonly string[];
  panelAction: { label: string; href: string };
};

function ExperienceSection({
  eyebrow,
  title,
  timeline,
  panelTitle,
  panelBullets,
  panelAction,
}: ExperienceSectionProps) {
  return (
    <section className={styles.section} id="experience">
      <SectionHeading eyebrow={eyebrow} title={title} />

      <div className={styles.layout}>
        <div className={styles.timeline}>
          {timeline.map((item) => (
            <article key={item.step} className={styles.timelineCard}>
              <strong>{item.step}</strong>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <aside className={styles.panel}>
          <span>课程亮点</span>
          <h3>{panelTitle}</h3>
          <ul>
            {panelBullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <a href={panelAction.href}>{panelAction.label}</a>
        </aside>
      </div>
    </section>
  );
}

export default ExperienceSection;
