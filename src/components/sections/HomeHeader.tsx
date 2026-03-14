import type { NavItem } from "../../content/home";
import styles from "./HomeHeader.module.css";

type HomeHeaderProps = {
  nav: readonly NavItem[];
  ctaHref: string;
  ctaLabel: string;
};

function HomeHeader({ nav, ctaHref, ctaLabel }: HomeHeaderProps) {
  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#top">
        <span className={styles.pulse} />
        <span>星跃 AI 编程营</span>
      </a>

      <nav className={styles.nav}>
        {nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className={styles.cta} href={ctaHref}>
        {ctaLabel}
      </a>
    </header>
  );
}

export default HomeHeader;
