import { useState } from "react";
import "./About.scss";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import portrait from "@/assets/images/about.png";
import jciAward from "@/assets/images/About/jci.JPG"; // ✅ import award image
import MoreMeModal from "@/pages/About/MoreMeModal";

// ✅ Import the new components
import Timeline from "@/pages/About/Timeline";
import Certifications from "@/pages/About/Certifications";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                alt="Katarina smiling"
                loading="lazy"
                className="about__media"
              />
            </figure>

            <div className="about__intro">
              <h1 className="about__name">Katarína</h1>
              <p className="about__tagline">
                UX Design & Development Student — passionate about creating
                seamless, human-centered digital experiences.
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
                    🛠️ User Research & Insights, UX/UI Design & Prototyping,
                    Product & Service Design Thinking, Interaction & Visual
                    Design, Design Systems & Collaboration
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

          {/* Education Section */}
          <section className="education">
            <h2>Education</h2>
            <div className="education__grid">
              <div className="education__card">
                <h3>Thomas More University of Applied Sciences</h3>
                <p>
                  Bachelor’s Degree — Information Management & Multimedia
                  (Digital Experience Design)
                </p>
                <span className="date">Sep 2023 – Jun 2026</span>
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <Certifications />

          {/* Awards Section */}
          <section className="awards">
            <h2>Awards</h2>
            <div className="awards__item">
              <img
                src={jciAward}
                alt="JCI Slovakia Student Entrepreneur Award 2020"
                className="awards__image"
              />
              <div className="awards__content">
                <h3>JCI Slovakia — Student Entrepreneur Award (2020)</h3>
                <p>
                  As co-founder of <strong>Praptiu Donáška</strong>, an
                  innovative startup born during the COVID-19 pandemic, I was
                  honored to be named a <strong>Top 5 Finalist</strong> in the
                  <em> Slovak National Student Entrepreneur Award</em>.
                </p>
                <p>
                  The startup focused on an{" "}
                  <strong>innovative home drug delivery service</strong> with
                  24/7 availability and a{" "}
                  <strong>one-hour delivery guarantee</strong>, including
                  prescription drugs. Ordering was designed to be{" "}
                  <strong>user-friendly</strong> through a digital portal, with
                  phone orders as an option. The service included{" "}
                  <strong>incentive discounts for premium customers</strong>,
                  support for{" "}
                  <strong>all payment types (including cash)</strong>, and even{" "}
                  <strong>
                    on-demand online consultations with doctors and
                    psychologists
                  </strong>
                  .
                </p>
                <p>
                  This recognition took us beyond the award itself — we were{" "}
                  <strong>featured on national TV, newspapers</strong>, and even
                  received our own{" "}
                  <strong>office and seat in the Slovak Startup Centrum</strong>
                  . The experience of being among the{" "}
                  <strong>Top 5 national finalists</strong> was an incredible
                  milestone in my journey, combining innovation, social impact,
                  and entrepreneurship.
                </p>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="skills">
            <h2>Skills</h2>
            <div className="badges">
              <span>Figma</span>
              <span>Illustrator</span>
              <span>React</span>
              <span>Sass</span>
              <span>HTML5</span>
              <span>PHP</span>
              <span>SQLite</span>
              <span>GitHub</span>
              <span>Office 365</span>
              <span>Notion</span>
              <span>UX Research</span>
              <span>Prototyping</span>
              <span>Wireframing</span>
              <span>Branding</span>
              <span>UI/UX Design</span>
              <span>Design Thinking</span>
              <span>Accessibility</span>
              <span>Storytelling</span>
            </div>
          </section>

          {/* Work Experience Timeline */}
          <Timeline />
        </section>
      </main>
      <Footer linkedin="https://www.linkedin.com/in/katarina-bajnokova/" />

      {/* Modal Mount */}
      {isModalOpen && <MoreMeModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
