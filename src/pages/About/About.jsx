import { useState } from "react";
import "./About.scss";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import portrait from "@/assets/images/about.png";
import MoreMeModal from "@/pages/About/MoreMeModal";

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
                    🛠️ Figma, React, Sass, PHP, SQLite, GitHub, UX Research, AI
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

              {/* More Me Button */}
              <button
                className="moreme-btn"
                onClick={() => setIsModalOpen(true)}
              >
                More Me
              </button>
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
              <div className="education__card">
                <h3>Vrije Universiteit Brussel</h3>
                <p>Bachelor’s Degree in Social Sciences</p>
                <span className="date">Sep 2021 – Aug 2023</span>
              </div>
            </div>
          </section>

          {/* Work Experience Timeline */}
          <section className="timeline">
            <h2>Work Experience</h2>
            <div className="timeline__items">
              <div className="timeline__item">
                <div className="timeline__date">Jun 2025 – Present</div>
                <div className="timeline__content">
                  <h3>European Heat Pump Association</h3>
                  <p className="role">Office Assistant</p>
                  <ul>
                    <li>Supported daily operations and admin tasks</li>
                    <li>Improved efficiency of reporting processes</li>
                  </ul>
                </div>
              </div>

              <div className="timeline__item">
                <div className="timeline__date">Oct 2024 – May 2025</div>
                <div className="timeline__content">
                  <h3>WHSmith</h3>
                  <p className="role">Sales Assistant</p>
                  <ul>
                    <li>
                      Delivered customer service in a fast-paced environment
                    </li>
                    <li>Handled POS and stock management</li>
                  </ul>
                </div>
              </div>

              <div className="timeline__item">
                <div className="timeline__date">Apr 2023 – Aug 2024</div>
                <div className="timeline__content">
                  <h3>Keyence</h3>
                  <p className="role">Telemarketer</p>
                  <ul>
                    <li>
                      Generated 100+ qualified leads/month across 3 markets
                    </li>
                    <li>Managed CRM workflows (Salesforce, HubSpot)</li>
                  </ul>
                </div>
              </div>

              <div className="timeline__item">
                <div className="timeline__date">Apr 2022 – Aug 2024</div>
                <div className="timeline__content">
                  <h3>Atelier 29</h3>
                  <p className="role">Server & Bartender</p>
                  <ul>
                    <li>Provided service at corporate & social events</li>
                    <li>Worked in multilingual teams in Brussels</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CERTIFICATIONS */}
          <section className="certifications">
            <h2>Certifications</h2>
            <div className="badges">
              <span>Google — Start the UX Design Process (Sep 2025)</span>
              <span>Cosden Solutions — React Project (Jul 2025)</span>
              <span>92learns — Adobe Illustrator Mega Course (Sep 2024)</span>
              <span>92learns — Adobe Photoshop Mega Course (Jun 2024)</span>
              <span>
                Google — Bits & Bytes of Computer Networking (Mar 2024)
              </span>
              <span>Google — Technical Support Fundamentals (Feb 2024)</span>
              <span>Google — Foundations of UX Design (Dec 2023)</span>
              <span>
                University of London — Refugees in the 21st Century (Jun 2020)
              </span>
              <span>
                Microsoft — Office Specialist: Excel Associate (Jun 2020)
              </span>
            </div>
          </section>

          {/* AWARDS */}
          <section className="awards">
            <h2>Awards</h2>
            <ul>
              <li>
                <strong>JCI Slovakia (Junior Chamber International)</strong> —
                Top 5 Finalist, Student Entrepreneur Award (2020)
              </li>
            </ul>
          </section>

          {/* SKILLS */}
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
        </section>
      </main>
      <Footer linkedin="https://www.linkedin.com/in/katarina-bajnokova/" />

      {/* Modal Mount */}
      {isModalOpen && <MoreMeModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
