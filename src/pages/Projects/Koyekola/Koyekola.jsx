import "./Koyekola.scss";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import koyekolaImg from "@/assets/images/koyekola.png";

export default function Koyekola() {
  return (
    <>
      <Header />
      <main className="project-page">
        <section className="project__container">
          <header className="project__header">
            <h1>Koyekola – Educational Language App</h1>

            <p className="project__summary">
              <strong>Challenge:</strong> Koyekola is my personal project,
              created to make learning Lingala fun and accessible for children
              through games and interactive tools. The challenge was to
              establish a strong brand identity and begin developing a digital
              product from scratch, starting with a functional landing page to
              introduce the app.
            </p>

            <p className="project__meta">
              <strong>Deliverables:</strong> Branding & visual identity, landing
              page design in Figma, landing page coded in React + Sass. (In
              progress) Game screens & full app design.
              <br />
              <strong>Role:</strong> End-to-End Product Designer & Front-End
              Developer
            </p>
          </header>

          {/* HERO */}
          <div className="project-hero">
            <img
              className="project-hero__media project-hero__media--laptop"
              src={koyekolaImg}
              alt="Koyekola landing page mockup"
              loading="lazy"
            />
          </div>

          {/* GOALS */}
          <section className="project-section">
            <h2>Goals</h2>
            <ul>
              <li>
                Build a strong, playful brand that connects with children and
                parents.
              </li>
              <li>
                Design and develop a landing page that explains the app’s
                purpose and invites users to explore.
              </li>
              <li>
                Set the foundation for future mini-games and learning modules.
              </li>
              <li>
                Practice a full design-to-code pipeline on a personal project.
              </li>
            </ul>
          </section>

          {/* PROCESS */}
          <section className="project-section">
            <h2>Process</h2>

            <h3>Branding</h3>
            <ul>
              <li>
                Created logo, mascot, and color palette representing joy,
                inclusivity, and cultural authenticity.
              </li>
              <li>
                Defined typography and a friendly yet professional visual style.
              </li>
            </ul>

            <h3>Landing Page</h3>
            <ul>
              <li>
                Designed a basic landing page in Figma to test brand
                application.
              </li>
              <li>
                Coded the landing page in React + Sass with responsive behavior
                and interactivity.
              </li>
              <li>
                Sections: hero (mascot + call to action), features, progress
                tracking, and navigation.
              </li>
            </ul>

            <h3>Ongoing Development</h3>
            <ul>
              <li>
                Currently designing the mini-games (Memory, Word Search, etc.).
              </li>
              <li>
                Planning to develop and code the full app step by step after
                finalizing designs.
              </li>
            </ul>
          </section>

          {/* AFTER THOUGHTS */}
          <section className="project-section">
            <h2>After Thoughts</h2>
            <p>
              With Koyekola, I took ownership from concept and branding to a
              coded landing page. It demonstrates both design and front-end
              skills, while showing my ability to structure and manage a
              long-term personal product.
            </p>
          </section>

          {/* FUTURE */}
          <section className="project-section">
            <h2>Future Improvements & Suggestions</h2>
            <ul>
              <li>Finalize and polish the interactive mini-games.</li>
              <li>
                Expand into a learning hub with categories (fruits, animals,
                numbers, etc.).
              </li>
              <li>
                Add progress tracking for learners and parent/teacher
                dashboards.
              </li>
              <li>
                Explore publishing educational materials alongside the app.
              </li>
            </ul>
          </section>
        </section>
      </main>
      <Footer linkedin="https://www.linkedin.com/in/katarina-bajnokova/" />
    </>
  );
}
