import CallToActionSection from "../components/sections/CallToActionSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import FeatureCardsSection from "../components/sections/FeatureCardsSection";
import HeroSection from "../components/sections/HeroSection";
import HomeHeader from "../components/sections/HomeHeader";
import MetricsSection from "../components/sections/MetricsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import TracksSection from "../components/sections/TracksSection";
import { homeContent } from "../content/home";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.page} id="top">
      <div className={styles.shell}>
        <HomeHeader
          nav={homeContent.nav}
          ctaHref={homeContent.hero.primaryAction.href}
          ctaLabel={homeContent.hero.primaryAction.label}
        />

        <main className={styles.main}>
          <HeroSection {...homeContent.hero} />
          <MetricsSection items={homeContent.metrics} />

          <div className={styles.stack}>
            <FeatureCardsSection
              eyebrow="为什么现在适合学 AI"
              title="不只是学会写代码，而是学会和 AI 一起解决问题"
              items={homeContent.reasons}
            />

            <TracksSection
              eyebrow="课程路径"
              title="从零基础到项目进阶，把成长路线拆得更清楚"
              items={homeContent.tracks}
            />

            <ProjectsSection
              eyebrow="学生项目"
              title="学生不会只停留在“学过”，而是能真正做出作品"
              items={homeContent.projects}
            />

            <ExperienceSection
              eyebrow="教学体验"
              title="让学生真正跟上、做出来、讲得清，而不是只听懂一半"
              timeline={homeContent.experience.timeline}
              panelTitle={homeContent.experience.panelTitle}
              panelBullets={homeContent.experience.panelBullets}
              panelAction={homeContent.experience.panelAction}
            />

            <CallToActionSection {...homeContent.cta} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
