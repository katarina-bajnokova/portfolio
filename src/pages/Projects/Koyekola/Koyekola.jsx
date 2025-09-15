import { useState } from "react";
import "./Mayele.scss";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import MayeleAbout from "./MayeleAbout";
import MayeleDefine from "./MayeleDefine";
import MayeleBranding from "./MayeleBranding";

export default function Mayele() {
  const [activeTab, setActiveTab] = useState("About");

  const tabs = ["About", "Foundations", "Branding"];

  return (
    <>
      <Header />
      <main className="project-page mayele-page">
        <section className="project__container">
          <header className="project__header">
            <h1>Mayele – Educational Language App</h1>

            <div className="project__summarybox">
              <h2 className="summary-title">Project Overview</h2>

              <div className="summary-grid">
                <div>
                  <h3>Challenge</h3>
                  <p>
                    The Congolese diaspora is experiencing{" "}
                    <strong>rapid language loss</strong>. Lingala, deeply tied
                    to identity and heritage, is at risk of fading within one to
                    two generations abroad. Existing learning resources are
                    outdated, overly academic, or inaccessible, leaving families
                    without tools to preserve their language and culture.
                  </p>
                  <p>
                    The challenge for Mayele is to create a{" "}
                    <strong>modern, engaging, and scalable solution</strong>{" "}
                    that makes Lingala learning{" "}
                    <em>fun, social, and rooted in cultural pride</em>.
                  </p>
                </div>

                <div>
                  <h3>Solution</h3>
                  <p>
                    Mayele provides a{" "}
                    <strong>playful, technology-driven ecosystem</strong> where
                    culture and language blend seamlessly. It began with a{" "}
                    <strong>brand identity</strong> and{" "}
                    <strong>React + Sass landing page</strong>, and is expanding
                    into{" "}
                    <strong>
                      educational mini-games, community features, and digital
                      tools
                    </strong>{" "}
                    that directly address research pain points. It is designed
                    to feel approachable to children, empowering for parents,
                    and relevant for youth.
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
                    A <strong>complete Lingala ecosystem</strong> blending
                    language and culture. Deliverables include the brand system,
                    visual identity, Figma landing page, coded React + Sass
                    landing page, and a{" "}
                    <strong>growing suite of educational mini-games</strong>.
                  </p>
                </div>
                <div>
                  <h3>Impact</h3>
                  <p>
                    Mayele is a{" "}
                    <strong>cultural preservation initiative</strong>. By making
                    Lingala learning accessible and enjoyable, it helps families
                    pass on heritage, strengthens identity among diaspora youth,
                    and ensures the language{" "}
                    <em>remains alive for future generations</em>.
                  </p>
                  <p>
                    The project showcases my ability to{" "}
                    <strong>design and develop a product end-to-end</strong>,
                    while using design as a tool for{" "}
                    <strong>social and cultural impact</strong>.
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

          <div className="tab-content">
            {activeTab === "About" && <MayeleAbout />}
            {activeTab === "Foundations" && <MayeleDefine />}
            {activeTab === "Branding" && <MayeleBranding />}
          </div>
        </section>
      </main>
      <Footer linkedin="https://www.linkedin.com/in/katarina-bajnokova/" />
    </>
  );
}
