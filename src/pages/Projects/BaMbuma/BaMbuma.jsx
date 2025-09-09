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
                    I wanted to create an{" "}
                    <strong>educational and cultural resource</strong> that
                    introduces Lingala vocabulary to children in a fun and
                    engaging way. The challenge was to design a book that is{" "}
                    <strong>simple enough for kids to enjoy</strong> while also
                    reflecting <strong>cultural authenticity</strong> and visual
                    appeal.
                  </p>
                </div>
                <div>
                  <h3>Solution</h3>
                  <p>
                    A <strong>colouring book with custom illustrations</strong>{" "}
                    of fruits, designed with clarity and playfulness in mind.
                    Each page pairs a Lingala fruit name with an engaging
                    illustration, making it both educational and fun.
                  </p>
                </div>
                <div>
                  <h3>Role</h3>
                  <p>
                    Author, Illustrator & Designer —{" "}
                    <em>illustrations, page layouts, book structure</em>
                  </p>
                </div>
              </div>

              <div className="summary-meta">
                <div>
                  <h3>Deliverables</h3>
                  <p>
                    Branding & visual direction, custom fruit illustrations,
                    page layouts, ready-to-print file.
                  </p>
                </div>
                <div>
                  <h3>Impact</h3>
                  <p>
                    Demonstrates ability to{" "}
                    <strong>extend design beyond screens</strong>, combining
                    education, culture, and publishing with{" "}
                    <strong>UX principles of clarity and engagement</strong>.
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
                  <strong>Ba Mbuma</strong> is part of my larger{" "}
                  <strong>Koyekola educational project</strong>, which focuses
                  on making Lingala accessible for children through playful and
                  cultural learning tools. This book represents my{" "}
                  <em>first draft</em> of a{" "}
                  <strong>colouring book dedicated to Lingala fruits</strong>.
                </p>
                <p>
                  I have already established the{" "}
                  <strong>layout and content</strong> of the book, and I am
                  currently working on{" "}
                  <strong>refining the illustrations</strong>. While the first
                  version features simple fruit drawings, my goal is to evolve
                  towards <strong>storytelling illustrations</strong> that
                  combine the fruit with cultural context. I want each page to{" "}
                  <em>promote the Lingala language alongside its heritage</em>,
                  rather than present isolated objects with no story to tell.
                </p>
                <p>
                  This approach ensures the book is not only an{" "}
                  <strong>educational resource</strong> but also a{" "}
                  <strong>celebration of culture</strong>, engaging children
                  both linguistically and emotionally.
                </p>
              </section>
            )}

            {activeTab === "Next Steps" && (
              <section className="project-section outcome-snapshot">
                <h2>Next Steps</h2>
                <ul>
                  <li>
                    Refine and polish all illustrations, ensuring consistency
                    and cultural storytelling.
                  </li>
                  <li>
                    Double-check Lingala vocabulary accuracy with{" "}
                    <strong>native speakers and educators</strong>.
                  </li>
                  <li>
                    Finalize the book for print and{" "}
                    <strong>publish the first edition</strong>.
                  </li>
                  <li>
                    Plan and launch <strong>marketing and outreach</strong> to
                    families, schools, and cultural organizations.
                  </li>
                  <li>
                    Expand into additional volumes —{" "}
                    <strong>animals, numbers, cultural stories</strong> — to
                    build a full series.
                  </li>
                  <li>
                    Explore <strong>interactive digital versions</strong> with
                    audio pronunciation and printable pages.
                  </li>
                  <li>
                    Integrate the book series into the{" "}
                    <strong>Koyekola educational app</strong> as a supporting
                    resource.
                  </li>
                  <li>
                    Look into <strong>publishing partnerships</strong> and
                    community collaborations to broaden impact.
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
