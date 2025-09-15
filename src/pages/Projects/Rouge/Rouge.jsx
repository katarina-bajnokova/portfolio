import { useState } from "react";
import "./Rouge.scss";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

import RougeProjectManagement from "./RougeProjectManagement";
import RougeGoals from "./RougeGoals";
import RougeProcess from "./RougeProcess";
import RougeChallenges from "./RougeChallenges";
import RougeAfterThoughts from "./RougeAfterThoughts";

export default function Rouge() {
  const [activeTab, setActiveTab] = useState("Goals");

  const sections = [
    { label: "Goals", component: <RougeGoals /> },
    { label: "Project Management", component: <RougeProjectManagement /> },
    { label: "Process", component: <RougeProcess /> },
    { label: "Challenges & Learnings", component: <RougeChallenges /> },
    { label: "After Thoughts", component: <RougeAfterThoughts /> },
  ];

  return (
    <>
      <Header />
      <main className="project-page rouge-content">
        <section className="project__container">
          <header className="project__header">
            <h1>Rouge – Fashion E-Commerce App</h1>
            <div className="project__summarybox">
              <h2 className="summary-title">Project Overview</h2>
              <div className="summary-grid">
                <div>
                  <h3>Context</h3>
                  <p>
                    Rouge began as a UX/UI concept by Andrea. In our second
                    semester, I transformed it into a{" "}
                    <strong>real, full-stack application</strong> — bridging
                    design and development into a functional e-commerce
                    experience.
                  </p>
                </div>
                <div>
                  <h3>Problem</h3>
                  <p>
                    The design was static and lacked functionality:{" "}
                    <strong>no product data, basket, or accounts</strong>. I had
                    to create a complete system with a seamless user journey and
                    working backend.
                  </p>
                </div>
                <div>
                  <h3>Solution</h3>
                  <p>
                    Built a <strong>React + Sass frontend</strong> connected to
                    a <strong>PHP + MySQL backend</strong> via{" "}
                    <strong>REST APIs</strong>, with{" "}
                    <strong>basket management, checkout flow</strong>, and{" "}
                    <strong>user accounts</strong>. The result: a{" "}
                    <em>production-like application</em>.
                  </p>
                </div>
              </div>
              <div className="summary-meta">
                <div className="meta-item">
                  <h3>Tools</h3>
                  <p>React, Sass, Mantine, PHP, MySQL, Firebase</p>
                </div>
                <div className="meta-item">
                  <h3>Impact</h3>
                  <p>
                    Demonstrated{" "}
                    <strong>end-to-end development and teamwork</strong>, and
                    delivered a <strong>fully functional product</strong> from
                    static designs.
                  </p>
                </div>
                <div className="meta-item">
                  <h3>Role</h3>
                  <p>
                    Full-Stack Developer —{" "}
                    <em>
                      frontend (React, Sass, Mantine), backend (PHP, MySQL, REST
                      APIs), database, API integration
                    </em>
                  </p>
                </div>
              </div>
            </div>
          </header>

          <nav className="design-cycle-tabs">
            {sections.map(({ label }) => (
              <button
                key={label}
                className={activeTab === label ? "active" : ""}
                onClick={() => setActiveTab(label)}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="tab-content">
            {sections.find((s) => s.label === activeTab)?.component}
          </div>
        </section>
      </main>
      <Footer linkedin="https://www.linkedin.com/in/katarina-bajnokova/" />
    </>
  );
}
