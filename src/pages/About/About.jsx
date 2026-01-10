import "./About.scss";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import portrait from "@/assets/images/about.png";
import jciAward from "@/assets/images/About/jci.JPG";

import Timeline from "@/pages/About/Timeline";
import Certifications from "@/pages/About/Certifications";

export default function About() {
  return (
    <>
      <Header />
      <main className="about-page">
        <section className="about__container">
          {/* Top row: Photo + Intro */}
          <div className="about__top">
            <figure className="about__photo">
              <img
                src={portrait}
                alt="Katarína Bajnokova portrait"
                loading="lazy"
                className="about__media"
              />
            </figure>

            <div className="about__intro">
              <h1 className="about__name">Katarína</h1>
              <p className="about__tagline">
                UX/UI Designer & Frontend Developer focused on component-driven,
                production-aware interfaces and scalable design systems.
              </p>
              <p className="about__tagline">
                Open to part-time and freelance opportunities. Available for
                full-time roles from July 2026.
              </p>

              {/* Summary Info Card */}
              <div className="about__info">
                <ul>
                  <li>📍 Brussels, Belgium</li>
                  <li>
                    🗣️ English (C1), French (B2), Czech (B2), Hungarian
                    (Native), Slovak (Native)
                  </li>
                  <li>
                    🧩 Components, design tokens, and design systems to ensure
                    consistency, scalability, and faster delivery across design
                    and development
                  </li>
                  <li>
                    ✉️{" "}
                    <a href="mailto:katarinabajnokovaofficial@gmail.com">
                      katarinabajnokovaofficial@gmail.com
                    </a>
                  </li>
                  <li>
                    📞 <a href="tel:+32472215014">+32 472 21 50 14</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Profile Summary */}
          <section className="about-summary">
            <h2>Profile</h2>
            <p>
              I design digital products that are meant to be built, not just
              admired. I work across the full design cycle from ideation and
              problem definition to interface design, testing, and frontend
              implementation. My approach prioritizes clarity, usability, and
              system thinking, with a strong focus on reusable components and
              tokenized foundations that hold up under real product constraints.
            </p>
          </section>

          {/* Education Section 
          <section className="education">
            <h2>Education</h2>
            <div className="education__grid">
              <div className="education__card">
                <h3>Thomas More University of Applied Sciences</h3>
                <p>
                  Bachelor’s Degree, Information Management & Multimedia
                  (Digital Experience Design)
                </p>
                <p>
                  Focus: UX/UI design, interaction design, prototyping, and
                  frontend fundamentals with component-based workflows.
                </p>
                <span className="date">Sep 2023 – Jun 2026</span>
              </div>
            </div>
          </section>*/}

          {/* Certifications Section 
          <Certifications />*/}

          {/* Awards Section 
          <section className="awards">
            <h2>Awards</h2>
            <div className="awards__item">
              <img
                src={jciAward}
                alt="JCI Slovakia Student Entrepreneur Award 2020"
                className="awards__image"
                loading="lazy"
              />
              <div className="awards__content">
                <h3>JCI Slovakia, Student Entrepreneur Award (2020)</h3>
                <p>
                  Top 5 finalist as co-founder of{" "}
                  <strong>Praptiu Donáška</strong>, a startup launched during
                  the COVID-19 period to improve access and convenience for home
                  delivery services.
                </p>
                <p>
                  The project strengthened my ability to operate in ambiguous,
                  fast-moving environments, communicate value clearly, and make
                  product decisions that balance user needs, feasibility, and
                  trust.
                </p>
              </div>
            </div>
          </section>*/}

          {/* Skills Section */}
          <section className="skills">
            <h2>Skills</h2>
            <div className="badges">
              {/* Core positioning */}
              <span>UX/UI Design</span>
              <span>Frontend Development</span>
              <span>Design Systems</span>
              <span>Component-Based Design</span>
              <span>Design Tokens</span>
              <span>Accessibility (WCAG)</span>

              {/* UX process */}
              <span>User Flows</span>
              <span>Information Architecture</span>
              <span>Wireframing</span>
              <span>Prototyping</span>
              <span>Usability Testing</span>
              <span>UX Research</span>

              {/* Tools */}
              <span>Figma</span>
              <span>Adobe Illustrator</span>

              {/* Frontend */}
              <span>React</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>Sass</span>
              <span>UI Component Libraries</span>
              <span>Storybook</span>
              <span>GitHub</span>

              {/* Collaboration */}
              <span>Notion</span>
            </div>
          </section>

          {/* Work Experience Timeline 
         {/* <Timeline />*/}
        </section>
      </main>
      <Footer linkedin="https://www.linkedin.com/in/katarina-bajnokova/" />
    </>
  );
}
