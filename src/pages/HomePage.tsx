import ContactSection from "../components/sections/ContactSection";
import FeatureCardsSection from "../components/sections/FeatureCardsSection";
import HeroSection from "../components/sections/HeroSection";
import HomeHeader from "../components/sections/HomeHeader";
import MetricsSection from "../components/sections/MetricsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import TracksSection from "../components/sections/TracksSection";
import Reveal from "../components/ui/Reveal";
import { homeContent } from "../content/home";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.page} id="top">
      <div className={styles.ambient} aria-hidden="true">
        <span className={`${styles.badge} ${styles.badgeAi}`}>AI</span>
        <span className={`${styles.badge} ${styles.badgeMl}`}>ML</span>
        <span className={`${styles.badge} ${styles.badgeData}`}>DATA</span>
        <span className={`${styles.badge} ${styles.badgeCode}`}>{"</>"}</span>
        <span className={`${styles.star} ${styles.starOne}`} />
        <span className={`${styles.star} ${styles.starTwo}`} />
        <span className={`${styles.star} ${styles.starThree}`} />
        <span className={`${styles.star} ${styles.starFour}`} />
      </div>

      <div className={styles.shell}>
        <HomeHeader
          nav={homeContent.nav}
          ctaHref={homeContent.hero.primaryAction.href}
          ctaLabel={homeContent.hero.primaryAction.label}
        />

        <main className={styles.main}>
          <Reveal>
            <HeroSection {...homeContent.hero} />
          </Reveal>
          <Reveal delay={60}>
            <MetricsSection items={homeContent.metrics} />
          </Reveal>

          <div className={styles.stack}>
            <Reveal>
              <FeatureCardsSection
                id="overview"
                eyebrow="课程内容"
                title="家长最需要知道的三件事"
                items={homeContent.overview}
              />
            </Reveal>

            <Reveal>
              <TracksSection
                eyebrow="适合谁学"
                title="按年级和基础分层，让学生在合适的节奏里学习"
                items={homeContent.tracks}
              />
            </Reveal>

            <Reveal>
              <ProjectsSection
                eyebrow="项目案例"
                title="我们会通过这些真实场景带学生理解 AI 能做什么"
                items={homeContent.projects}
              />
            </Reveal>

            <Reveal>
              <ContactSection {...homeContent.contact} />
            </Reveal>
          </div>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
