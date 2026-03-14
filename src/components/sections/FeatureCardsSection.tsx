import type { Feature } from "../../content/home";
import SectionHeading from "../ui/SectionHeading";
import styles from "./FeatureCardsSection.module.css";

type FeatureCardsSectionProps = {
  eyebrow: string;
  title: string;
  items: readonly Feature[];
  id?: string;
};

function FeatureCardsSection({ eyebrow, title, items, id }: FeatureCardsSectionProps) {
  return (
    <section className={styles.section} id={id}>
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className={styles.grid}>
        {items.map((item) => (
          <article key={item.title} className={styles.card}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeatureCardsSection;
