import { useState } from "react";
import "./Rouge.scss";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import rougeVideo from "@/assets/videos/rouge.mp4";

import RougeProjectManagement from "./RougeProjectManagement";
import RougeGoals from "./RougeGoals";
import RougeProcess from "./RougeProcess";
import RougeChallenges from "./RougeChallenges";
import RougeAfterThoughts from "./RougeAfterThoughts";

export default function Rouge() {
  const [activeTab, setActiveTab] = useState("Goals");

  const tabs = [
    "Goals",
    "Project Management",
    "Process",
    "Challenges & Learnings",
    "After Thoughts",
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
                    design and development to create a functional e-commerce
                    experience.
                  </p>
                </div>
                <div>
                  <h3>Problem</h3>
                  <p>
                    The design was static and lacked functionality:{" "}
                    <strong>no product data, basket, or accounts</strong>. I
                    needed to create a complete system with a seamless user
                    journey and working backend.
                  </p>
                </div>
                <div>
                  <h3>Solution</h3>
                  <p>
                    I built a <strong>React + Sass frontend</strong> connected
                    to a <strong>PHP + MySQL backend</strong> with{" "}
                    <strong>REST APIs</strong>, implementing{" "}
                    <strong>basket management, checkout flow</strong>, and{" "}
                    <strong>user accounts</strong>. The result was a{" "}
                    <em>production-like application</em>.
                  </p>
                </div>
              </div>
              <div className="summary-meta">
                <div>
                  <h3>Tools</h3>
                  <p>React, Sass, Mantine, PHP, MySQL, Firebase</p>
                </div>
                <div>
                  <h3>Impact</h3>
                  <p>
                    Showcased <strong>end-to-end development</strong>, teamwork,
                    and the ability to deliver a{" "}
                    <strong>fully functional product</strong> from static
                    designs.
                  </p>
                </div>
                <div>
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
          <div className="tab-content rouge-content">
            {activeTab === "Goals" && <RougeGoals />}
            {activeTab === "Project Management" && <RougeProjectManagement />}
            {activeTab === "Process" && <RougeProcess />}
            {activeTab === "Challenges & Learnings" && <RougeChallenges />}
            {activeTab === "After Thoughts" && <RougeAfterThoughts />}
          </div>
        </section>
      </main>
      <Footer linkedin="https://www.linkedin.com/in/katarina-bajnokova/" />
    </>
  );
}
