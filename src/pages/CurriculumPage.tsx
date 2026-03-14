import HomeHeader from "../components/sections/HomeHeader";
import SectionHeading from "../components/ui/SectionHeading";
import { curriculumContent, curriculumNav } from "../content/curriculum";
import styles from "./Subpage.module.css";

function CurriculumPage() {
  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <HomeHeader
          nav={curriculumNav}
          ctaHref="index.html#contact"
          ctaLabel="预约咨询"
          brandHref="index.html"
        />

        <main className={styles.main}>
          <section className={styles.hero}>
            <SectionHeading eyebrow={curriculumContent.hero.eyebrow} title={curriculumContent.hero.title} />
            <p className={styles.heroText}>{curriculumContent.hero.description}</p>
            <div className={styles.quickFacts}>
              {curriculumContent.quickFacts.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>

          <div className={styles.stack}>
            {curriculumContent.sections.map((section) => (
              <section key={section.title} className={styles.sectionCard}>
                <div className={styles.sectionIntro}>
                  <h2>{section.title}</h2>
                  <p>{section.description}</p>
                </div>

                <div className={styles.cardGrid}>
                  {section.courses.map((course) => (
                    <article key={course.name} className={styles.courseCard}>
                      <h3>{course.name}</h3>
                      <p>{course.summary}</p>
                      {"bullets" in course && course.bullets ? (
                        <ul>
                          {course.bullets.map((bullet: string) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      ) : null}
                      {"note" in course && course.note ? <small>{course.note}</small> : null}
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default CurriculumPage;
