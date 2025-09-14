import { useState } from "react";
import "./Koyekola.scss";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import KoyekolaAbout from "./KoyekolaAbout";
import KoyekolaDefine from "./KoyekolaDefine";
import KoyekolaBranding from "./KoyekolaBranding";

export default function Koyekola() {
  const [activeTab, setActiveTab] = useState("About");

  const tabs = ["About", "Foundations", "Branding"];

  return (
    <>
      <Header />
      <main className="project-page koyekola-page">
        <section className="project__container">
          <header className="project__header">
            <h1>Koyekola – Educational Language App</h1>

            <div className="project__summarybox">
              <h2 className="summary-title">Project Overview</h2>

              <div className="summary-grid">
                <div>
                  <h3>Challenge</h3>
                  <p>
                    The Congolese diaspora is experiencing{" "}
                    <strong>rapid language loss</strong>. Lingala, a language
                    deeply tied to identity and heritage, is at risk of fading
                    within one to two generations abroad. Existing learning
                    resources are often outdated, overly academic, or
                    inaccessible, leaving both parents and youth without the
                    tools they need to preserve their language and culture.
                    <br />
                    <br />
                    The challenge for Koyekola is to create a{" "}
                    <strong>
                      modern, engaging, and scalable solution
                    </strong>{" "}
                    that makes Lingala learning not only possible, but{" "}
                    <em>fun, social, and rooted in cultural pride</em>.
                  </p>
                </div>

                <div>
                  <h3>Solution</h3>
                  <p>
                    Koyekola provides a{" "}
                    <strong>playful, technology-driven ecosystem</strong> where
                    culture and language blend seamlessly. The solution began
                    with a <strong>clear brand identity</strong> and a{" "}
                    <strong>
                      functional landing page built in React + Sass
                    </strong>
                    .
                    <br />
                    <br />
                    From there, the project is expanding into{" "}
                    <strong>
                      educational mini-games, community features, and digital
                      tools
                    </strong>{" "}
                    that respond directly to the pain points uncovered during
                    research. Koyekola is designed to feel approachable to
                    children, empowering for parents, and relevant for youth.
                  </p>
                </div>

                <div>
                  <h3>Role</h3>
                  <p>
                    End-to-End Product Designer & Developer —{" "}
                    <em>
                      branding, research, empathy mapping, persona creation,
                      Figma design, coding in React/Sass
                    </em>
                  </p>
                </div>
              </div>

              <div className="summary-meta">
                <div>
                  <h3>Deliverables</h3>
                  <p>
                    A <strong>complete ecosystem of Lingala</strong> where{" "}
                    <strong>culture and language blend together</strong> and are
                    made accessible for everyone. Deliverables include the brand
                    system, visual identity, landing page design in Figma, React
                    + Sass coded landing page, and a{" "}
                    <strong>growing suite of educational mini-games</strong>.
                    <br />
                    <br />
                    Every deliverable contributes to building a{" "}
                    <em>sustainable and scalable digital platform</em> that
                    unites communities through language and heritage.
                  </p>
                </div>
                <div>
                  <h3>Impact</h3>
                  <p>
                    Koyekola is more than an app — it is a{" "}
                    <strong>cultural preservation initiative</strong>. By making
                    Lingala learning accessible and enjoyable, it helps families
                    pass on their heritage, strengthens identity among diaspora
                    youth, and ensures that{" "}
                    <em>the language remains alive for future generations</em>.
                    <br />
                    <br />
                    The project demonstrates not only my ability to{" "}
                    <strong>
                      design and develop a product from concept to code
                    </strong>
                    , but also my commitment to using design as a tool for{" "}
                    <strong>social and cultural impact</strong>.
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
            {activeTab === "About" && <KoyekolaAbout />}
            {activeTab === "Foundations" && <KoyekolaDefine />}
            {activeTab === "Branding" && <KoyekolaBranding />}
          </div>
        </section>
      </main>
      <Footer linkedin="https://www.linkedin.com/in/katarina-bajnokova/" />
    </>
  );
}
