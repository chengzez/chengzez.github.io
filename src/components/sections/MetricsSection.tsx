import type { Metric } from "../../content/home";
import styles from "./MetricsSection.module.css";

type MetricsSectionProps = {
  items: readonly Metric[];
};

function MetricsSection({ items }: MetricsSectionProps) {
  return (
    <section className={styles.grid}>
      {items.map((item) => (
        <article key={item.label} className={styles.card}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </article>
      ))}
    </section>
  );
}

export default MetricsSection;
