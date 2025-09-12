import { useState } from "react";
import "./Koyekola.scss";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import KoyekolaAbout from "./KoyekolaAbout"; // 👈 About tab component

export default function Koyekola() {
  const [activeTab, setActiveTab] = useState("About");

  const tabs = ["About"];

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
          </div>
        </section>
      </main>
      <Footer linkedin="https://www.linkedin.com/in/katarina-bajnokova/" />
    </>
  );
}
