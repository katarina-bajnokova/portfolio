import "./About.scss";
import Header from "@/components/layout/Header/Header";
import portrait from "@/assets/images/about.png"; // update path if needed

export default function About() {
  return (
    <>
      <Header />
      <main className="about-page">
        <section className="about__container">
          {/* Top row: Photo + Intro */}
          <div className="about__grid">
            <figure className="about__photo">
              <img src={portrait} alt="Katarina smiling" loading="lazy" />
            </figure>

            <header className="about__intro">
              <h1 className="about__name">Katarina</h1>
              <p>
                I’m a UX/UI and digital product designer who enjoys combining
                creativity with code. I like taking projects from the very first
                idea all the way to something real — from research and branding
                to wireframes, prototypes, and working products.
              </p>
              <p>
                Outside of design, I love reading fantasy and educational books,
                swimming, and visiting wellness places or museums — especially
                interactive ones. I’m also a big fan of Pixar, Disney, anime,
                and games like League of Legends and Life is Strange. In my free
                time, I teach children English and enjoy continuous learning
                through online certified courses. I draw a lot of energy from
                group activities and social experiences, whether it’s working
                together or just having fun.
              </p>
              <p>— Based in Brussels, Belgium</p>
            </header>

            {/* LEFT COLUMN (below photo) */}
            <section className="about__section">
              <h2 className="about__heading">Education</h2>
              <ul className="about__list about__kv">
                <li>
                  <strong>Thomas More University of Applied Sciences</strong>
                  <span>
                    Bachelor’s Degree Information Management and Multimedia
                  </span>
                  <span>Specialization in Digital Experience Design</span>
                  <em>Sep 2023 – June 2026</em>
                </li>
                <li>
                  <strong>Vrije Universiteit Brussel</strong>
                  <span>Bachelor’s degree in social sciences</span>
                  <em>Sep 2021 – Aug 2023</em>
                </li>
              </ul>
            </section>

            {/* RIGHT COLUMN (below intro) */}
            <section className="about__section">
              <h2 className="about__heading">Experience</h2>
              <ul className="about__list about__kv">
                <li>
                  <strong>European Heat Pump Association</strong>
                  <span className="role">Office Assistant</span>
                  <em>June 2025 – Present 2025</em>
                </li>
                <li>
                  <strong>WHSmith</strong>
                  <span className="role">Sales Assistant</span>
                  <em>Oct 2024 – May 2025</em>
                </li>
                <li>
                  <strong>Keyence</strong>
                  <span className="role">Telemarketer</span>
                  <em>Apr 2023 – Aug 2024</em>
                </li>
                <li>
                  <strong>Atelier 29</strong>
                  <span className="role">Server and Bartender</span>
                  <em>Apr 2022 – Aug 2024</em>
                </li>
              </ul>
            </section>

            {/* LEFT: Design Skills */}
            <section className="about__section">
              <h2 className="about__heading">Design Skills</h2>
              <ul className="about__list two">
                <li>UX Research & Testing</li>
                <li>Branding & Visual Identity</li>
                <li>Information Architecture</li>
                <li>Wireframing & Prototyping</li>
                <li>UI/UX Design</li>
                <li>Interaction Design</li>
                <li>Design Thinking</li>
                <li>Creative Strategy</li>
                <li>Typography & Layout</li>
                <li>Illustration & Design</li>
                <li>Storytelling</li>
                <li>Design for Inclusivity & Accessibility</li>
              </ul>
            </section>

            {/* RIGHT: Technical Skills */}
            <section className="about__section">
              <h2 className="about__heading">Technical Skills</h2>
              <ul className="about__list two">
                <li>Figma (Design & Prototyping)</li>
                <li>Illustrator</li>
                <li>Photoshop</li>
                <li>Canva</li>
                <li>React</li>
                <li>Sass / SCSS</li>
                <li>HTML5</li>
                <li>PHP</li>
                <li>SQLite & MySQL</li>
                <li>Git & GitHub</li>
                <li>Microsoft 365</li>
                <li>Notion</li>
              </ul>
            </section>

            {/* LEFT: Certifications */}
            <section className="about__section">
              <h2 className="about__heading">Certifications</h2>
              <ul className="about__list about__kv">
                <li>
                  <strong>Google</strong>
                  <span>
                    Start the UX Design Process: Empathize, Define, and Ideate
                  </span>
                  <em>September 2025</em>
                </li>
                <li>
                  <strong>Cosden Solutions</strong>
                  <span>React Project</span>
                  <em>July 2025</em>
                </li>
                <li>
                  <strong>92learns</strong>
                  <span>Adobe Illustrator Mega Course</span>
                  <em>September 2024</em>
                </li>
                <li>
                  <strong>92learns</strong>
                  <span>Adobe Photoshop Mega Course</span>
                  <em>June 2024</em>
                </li>
                <li>
                  <strong>Google</strong>
                  <span>The Bits and Bytes of Computer Networking</span>
                  <em>March 2024</em>
                </li>
              </ul>
            </section>

            {/* RIGHT: Certifications continuation */}
            <section className="about__section about__section--nohead">
              <ul className="about__list about__kv">
                <li>
                  <strong>Google</strong>
                  <span>Technical Support fundamentals</span>
                  <em>February 2024</em>
                </li>
                <li>
                  <strong>Google</strong>
                  <span>Foundations of User Experience (UX Design)</span>
                  <em>December 2023</em>
                </li>
                <li>
                  <strong>University of London</strong>
                  <span>Refugees in the 21st Century</span>
                  <em>June 2020</em>
                </li>
                <li>
                  <strong>Microsoft</strong>
                  <span>Office Specialist — Excel Associate</span>
                  <em>June 2020</em>
                </li>
              </ul>
            </section>

            {/* LEFT: Awards (JCI) */}
            <section className="about__section">
              <h2 className="about__heading">Awards</h2>
              <ul className="about__list about__kv">
                <li>
                  <strong>Junior Chamber International Slovakia (JCI)</strong>
                  <span>
                    Finalist (Top 5) — Student Entrepreneur Award 2020
                  </span>
                  <span>
                    For co-founding Prapti Donáška, a student-led delivery
                    service.
                  </span>
                </li>
              </ul>
            </section>

            {/* RIGHT: Languages */}
            <section className="about__section">
              <h2 className="about__heading">Languages</h2>
              <ul className="about__list">
                <li>English — C1</li>
                <li>French — B2</li>
                <li>Czech — B2</li>
                <li>Hungarian — Native</li>
                <li>Slovak — Native</li>
              </ul>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
