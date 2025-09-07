import { useState } from "react";
import "./GuessJeans.scss";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

// NEW: Separated phases
import Empathize from "./Empathize";
import Define from "./Define";
import Ideate from "./Ideate";
import Prototype from "./Prototype";
import Test from "./Test"; // ✅ import new Test component

import { AfterThoughts, FutureImprovements } from "./SectionsText";

export default function GuessJeans() {
  const [activeTab, setActiveTab] = useState("Empathize");

  const tabs = ["Empathize", "Define", "Ideate", "Prototype", "Test"];

  return (
    <>
      <Header />
      <main className="project-page">
        <section className="project__container">
          {/* HEADER */}
          <header className="project__header">
            <h1>Guess Jeans – Digital Shopping Experience Redesign</h1>

            <div className="project__summarybox">
              <h2 className="summary-title">Project Overview</h2>

              <div className="summary-grid">
                <div>
                  <h3>Context</h3>
                  <p>
                    Guess is a strong denim brand, but its online shopping
                    journey lacked inclusivity and fit confidence.
                  </p>
                </div>
                <div>
                  <h3>Problem</h3>
                  <p>
                    Sizes were inconsistent, fit details unclear, and imagery
                    excluded real body types. Customers felt uncertain—leading
                    to abandoned carts and high returns.
                  </p>
                </div>
                <div>
                  <h3>Solution</h3>
                  <p>
                    A redesigned digital journey with{" "}
                    <strong>fit guidance</strong>,{" "}
                    <strong>inclusive imagery</strong>, and{" "}
                    <strong>interactive tools</strong> (Fit Profile, Lookbook,
                    Fit Guide).
                  </p>
                </div>
              </div>

              <div className="summary-meta">
                <div>
                  <h3>Tools</h3>
                  <p>Figma, AI, Design Thinking & Research</p>
                </div>
                <div>
                  <h3>Impact</h3>
                  <p>
                    Improves confidence, reduces return rates, builds
                    inclusivity.
                  </p>
                </div>
                <div>
                  <h3>Role</h3>
                  <p>
                    End-to-End UX Designer — research, personas, journey
                    mapping, wireframes, prototypes, testing.
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
            {/* EMPATHIZE */}
            {activeTab === "Empathize" && <Empathize />}

            {/* DEFINE */}
            {activeTab === "Define" && <Define />}

            {/* IDEATE */}
            {activeTab === "Ideate" && <Ideate />}

            {/* PROTOTYPE */}
            {activeTab === "Prototype" && <Prototype />}

            {/* TEST */}
            {activeTab === "Test" && (
              <>
                <Test />
                <AfterThoughts />
                <FutureImprovements />
              </>
            )}
          </div>
        </section>
      </main>
      <Footer linkedin="https://www.linkedin.com/in/katarina-bajnokova/" />
    </>
  );
}
