import { useState } from "react";
import "./BaMbuma.scss";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import bookVideo from "@/assets/videos/book.mp4";

export default function BaMbuma() {
  const [activeTab, setActiveTab] = useState("About");
  const tabs = ["About", "Next Steps"];

  return (
    <>
      <Header />
      <main className="project-page bambuma-page">
        <section className="project__container">
          {/* HEADER */}
          <header className="project__header">
            <h1>Ba Mbuma – Lingala Fruits Colouring Book</h1>

            {/* SUMMARY BOX */}
            <div className="project__summarybox">
              <h2 className="summary-title">Project Overview</h2>
              <div className="summary-grid">
                <div>
                  <h3>Challenge</h3>
                  <p>
                    Create a <strong>playful cultural resource</strong> that
                    helps children learn Lingala vocabulary while keeping the
                    content simple, fun, and visually authentic.
                  </p>
                </div>
                <div>
                  <h3>Solution</h3>
                  <p>
                    A{" "}
                    <strong>
                      colouring book with custom fruit illustrations
                    </strong>
                    , pairing Lingala names with engaging visuals to make
                    language learning both
                    <em> educational and enjoyable</em>.
                  </p>
                </div>
                <div>
                  <h3>Role</h3>
                  <p>
                    Author & Designer — illustrations, layouts, and book
                    structure
                  </p>
                </div>
              </div>
            </div>
          </header>

          {/* HERO MEDIA */}
          <div className="project-hero">
            <video
              className="project-hero__media"
              src={bookVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>

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
            {activeTab === "About" && (
              <section className="project-section">
                <h2>About</h2>
                <p>
                  <strong>Ba Mbuma</strong> is part of the{" "}
                  <strong>Mayele educational projects</strong>, dedicated to
                  making Lingala accessible for children through creative
                  learning tools. This first volume introduces fruits in Lingala
                  with simple illustrations and clear layouts.
                </p>
                <p>
                  The long-term vision is to evolve from <em>basic drawings</em>{" "}
                  to <strong>storytelling illustrations</strong> that connect
                  language with cultural heritage, ensuring each page celebrates
                  both <em>learning</em> and <em>identity</em>.
                </p>
              </section>
            )}

            {activeTab === "Next Steps" && (
              <section className="project-section outcome-snapshot">
                <h2>Next Steps</h2>
                <ul>
                  <li>
                    Refine and polish fruit illustrations with cultural context.
                  </li>
                  <li>
                    Validate vocabulary with <strong>native speakers</strong>.
                  </li>
                  <li>
                    Finalize and <strong>publish the first edition</strong>.
                  </li>
                  <li>
                    Expand into additional themes: animals, numbers, and
                    cultural stories.
                  </li>
                  <li>
                    Explore <strong>interactive digital versions</strong> with
                    audio and printables.
                  </li>
                  <li>
                    Integrate into the <strong>Mayele educational app</strong>.
                  </li>
                </ul>
              </section>
            )}
          </div>
        </section>
      </main>
      <Footer linkedin="https://www.linkedin.com/in/katarina-bajnokova/" />
    </>
  );
}
