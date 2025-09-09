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

          {/* Dark Details Block */}
          <div className="about__details">
            {/* Column 1 */}
            <div className="about__col">
              <h2>Education</h2>
              <ul>
                <li>
                  <strong>Thomas More University of Applied Sciences</strong>
                  <span>
                    Bachelor’s Degree — Information Management & Multimedia
                    (Digital Experience Design)
                  </span>
                  <em>Sep 2023 – Jun 2026</em>
                </li>
                <li>
                  <strong>Vrije Universiteit Brussel</strong>
                  <span>Bachelor’s degree in Social Sciences</span>
                  <em>Sep 2021 – Aug 2023</em>
                </li>
              </ul>

              <h2>Certifications</h2>
              <ul className="about__kv">
                <li>
                  <strong>Google</strong> — Start the UX Design Process
                  <em>Sep 2025</em>
                </li>
                <li>
                  <strong>Cosden Solutions</strong> — React Project
                  <em>Jul 2025</em>
                </li>
                <li>
                  <strong>92learns</strong> — Adobe Illustrator Mega Course
                  <em>Sep 2024</em>
                </li>
                <li>
                  <strong>92learns</strong> — Adobe Photoshop Mega Course
                  <em>Jun 2024</em>
                </li>
                <li>
                  <strong>Google</strong> — Bits & Bytes of Computer Networking
                  <em>Mar 2024</em>
                </li>
                <li>
                  <strong>Google</strong> — Technical Support Fundamentals
                  <em>Feb 2024</em>
                </li>
                <li>
                  <strong>Google</strong> — Foundations of UX Design
                  <em>Dec 2023</em>
                </li>
                <li>
                  <strong>University of London</strong> — Refugees in the 21st
                  Century
                  <em>Jun 2020</em>
                </li>
                <li>
                  <strong>Microsoft</strong> — Office Specialist: Excel
                  Associate
                  <em>Jun 2020</em>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="about__col">
              <h2>Experience</h2>
              <ul>
                <li>
                  <strong>European Heat Pump Association</strong> — Office
                  Assistant
                  <em>Jun 2025 – Present</em>
                  <ul className="about__bullets">
                    <li>Supported daily operations and admin tasks</li>
                    <li>Improved efficiency of reporting processes</li>
                  </ul>
                </li>
                <li>
                  <strong>WHSmith</strong> — Sales Assistant
                  <em>Oct 2024 – May 2025</em>
                  <ul className="about__bullets">
                    <li>
                      Delivered customer service in a fast-paced environment
                    </li>
                    <li>Handled POS and stock management</li>
                  </ul>
                </li>
                <li>
                  <strong>Keyence</strong> — Telemarketer
                  <em>Apr 2023 – Aug 2024</em>
                  <ul className="about__bullets">
                    <li>
                      Generated 100+ qualified leads/month across 3 markets
                    </li>
                    <li>Managed CRM workflows (Salesforce, HubSpot)</li>
                  </ul>
                </li>
                <li>
                  <strong>Atelier 29</strong> — Server & Bartender
                  <em>Apr 2022 – Aug 2024</em>
                  <ul className="about__bullets">
                    <li>Provided service at corporate & social events</li>
                    <li>Worked in multilingual teams in Brussels</li>
                  </ul>
                </li>
              </ul>

              <h2>Awards</h2>
              <ul>
                <li>
                  <strong>JCI Slovakia (Junior Chamber International)</strong>
                  <em>2020</em>
                  <ul className="about__bullets">
                    <li>Top 5 Finalist — Student Entrepreneur Award</li>
                    <li>
                      Co-founded Prapti Donáška (student-led delivery service)
                    </li>
                  </ul>
                </li>
              </ul>

              <h2>Technical Skills</h2>
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
              </div>

              <h2>Design Skills</h2>
              <div className="badges">
                <span>UX Research</span>
                <span>Prototyping</span>
                <span>Wireframing</span>
                <span>Branding</span>
                <span>UI/UX Design</span>
                <span>Design Thinking</span>
                <span>Accessibility</span>
                <span>Storytelling</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer linkedin="https://www.linkedin.com/in/katarina-bajnokova/" />

      {/* Modal Mount */}
      {isModalOpen && <MoreMeModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
