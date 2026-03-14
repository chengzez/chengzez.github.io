import HomeHeader from "../components/sections/HomeHeader";
import SectionHeading from "../components/ui/SectionHeading";
import { facultyContent, facultyNav } from "../content/faculty";
import styles from "./Subpage.module.css";

function FacultyPage() {
  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <HomeHeader
          nav={facultyNav}
          ctaHref="index.html#contact"
          ctaLabel="预约咨询"
          brandHref="index.html"
        />

        <main className={styles.main}>
          <section className={styles.hero}>
            <SectionHeading eyebrow={facultyContent.hero.eyebrow} title={facultyContent.hero.title} />
            <p className={styles.heroText}>{facultyContent.hero.description}</p>
          </section>

          <section className={styles.sectionCard}>
            <div className={styles.sectionIntro}>
              <h2>主讲教师</h2>
              <p>课程由两位老师共同带领，整体更强调清晰讲解、项目完成和面向家长也能看懂的学习成果。</p>
            </div>

            <div className={styles.facultyGrid}>
              {facultyContent.teachers.map((teacher) => (
                <article key={teacher.name} className={styles.facultyCard}>
                  <div className={styles.facultyTop}>
                    <h3>{teacher.name}</h3>
                    <strong className={styles.roleTag}>{teacher.role}</strong>
                  </div>
                  <p>{teacher.description}</p>
                  <ul className={styles.facultyHighlights}>
                    {teacher.highlights.map((item) => (
                      <li key={`${teacher.name}-${item.label}`}>
                        <strong>{item.label}</strong>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default FacultyPage;
