import { useState } from "react";
import "./Koyekola.scss";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import KoyekolaAbout from "./KoyekolaAbout"; // 👈 About tab component

export default function Koyekola() {
  const [activeTab, setActiveTab] = useState("About");

  const tabs = ["About", "Process", "After Thoughts", "Future"];

  return (
    <>
      <Header />
      <main className="project-page koyekola-page">
        <section className="project__container">
          {/* HEADER */}
          <header className="project__header">
            <h1>Koyekola – Educational Language App</h1>

            <div className="project__summarybox">
              <h2 className="summary-title">Project Overview</h2>

              <div className="summary-grid">
                <div>
                  <h3>Challenge</h3>
                  <p>
                    Koyekola is my personal project, created to make learning{" "}
                    <strong>Lingala fun and accessible for children</strong>{" "}
                    through games and interactive tools. The challenge was to
                    establish a strong brand identity and begin developing a
                    digital product from scratch, starting with a functional
                    landing page.
                  </p>
                </div>
                <div>
                  <h3>Solution</h3>
                  <p>
                    A <strong>playful brand system</strong> combined with a{" "}
                    <strong>React + Sass landing page</strong>. The landing page
                    introduces the app, explains the value, and sets the
                    foundation for future development of{" "}
                    <strong>educational mini-games</strong>.
                  </p>
                </div>
                <div>
                  <h3>Role</h3>
                  <p>
                    End-to-End Product Designer & Front-End Developer —{" "}
                    <em>branding, Figma design, coding in React/Sass</em>
                  </p>
                </div>
              </div>

              <div className="summary-meta">
                <div>
                  <h3>Deliverables</h3>
                  <p>
                    Branding & visual identity, landing page design in Figma,
                    React + Sass coded landing page, (in progress) app designs &
                    mini-games.
                  </p>
                </div>
                <div>
                  <h3>Impact</h3>
                  <p>
                    Demonstrates ability to{" "}
                    <strong>create a product from concept to code</strong> while
                    maintaining brand consistency and technical scalability.
                  </p>
                </div>
              </div>
            </div>
          </header>

          {/* TABS */}
          <nav className="design-cycle-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "active" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* TAB CONTENT */}
          <div className="tab-content">
            {activeTab === "About" && <KoyekolaAbout />} {/* 👈 now external */}
            {activeTab === "Process" && (
              <>
                <div className="process-block">
                  <h3>Branding</h3>
                  <ul>
                    <li>
                      Created logo, mascot, and color palette representing joy,
                      inclusivity, and cultural authenticity.
                    </li>
                    <li>
                      Defined typography and a friendly yet professional style.
                    </li>
                  </ul>
                </div>

                <div className="process-block">
                  <h3>Landing Page</h3>
                  <ul>
                    <li>
                      Designed a responsive landing page in Figma to test brand
                      application.
                    </li>
                    <li>
                      Developed the page in React + Sass with interactivity.
                    </li>
                    <li>
                      Sections: hero (mascot + call to action), features,
                      progress tracking, and navigation.
                    </li>
                  </ul>
                </div>

                <div className="process-block">
                  <h3>Ongoing Development</h3>
                  <ul>
                    <li>
                      Currently designing mini-games (Memory, Word Search,
                      etc.).
                    </li>
                    <li>
                      Planning step-by-step full app build after finalizing
                      designs.
                    </li>
                  </ul>
                </div>
              </>
            )}
            {activeTab === "After Thoughts" && (
              <div className="reflection-box">
                <p>
                  With Koyekola, I took ownership from{" "}
                  <strong>concept and branding to a coded landing page</strong>.
                  It demonstrates both design and front-end skills, while
                  showing my ability to structure and manage a{" "}
                  <strong>long-term personal product</strong>.
                </p>
              </div>
            )}
            {activeTab === "Future" && (
              <div className="outcome-snapshot">
                <h4>Next Steps</h4>
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
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer linkedin="https://www.linkedin.com/in/katarina-bajnokova/" />
    </>
  );
}
