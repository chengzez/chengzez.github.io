import type { ProjectCard } from "../../content/home";
import SectionHeading from "../ui/SectionHeading";
import styles from "./ProjectsSection.module.css";

type ProjectsSectionProps = {
  eyebrow: string;
  title: string;
  items: readonly ProjectCard[];
};

function ProjectsSection({ eyebrow, title, items }: ProjectsSectionProps) {
  return (
    <section className={styles.section} id="projects">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className={styles.grid}>
        {items.map((item) => (
          <article key={item.title} className={styles.card}>
            <span>{item.label}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
