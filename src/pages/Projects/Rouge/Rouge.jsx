import { useState } from "react";
import "./Rouge.scss";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import rougeVideo from "@/assets/videos/rouge.mp4";

export default function Rouge() {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "Goals", "Process", "After Thoughts", "Future"];

  return (
    <>
      <Header />
      <main className="project-page">
        <section className="project__container">
          {/* HEADER */}
          <header className="project__header">
            <h1>Rouge – Fashion E-Commerce App</h1>

            <div className="project__summarybox">
              <h2 className="summary-title">Project Overview</h2>

              <div className="summary-grid">
                <div>
                  <h3>Context</h3>
                  <p>
                    Rouge is a fashion e-commerce concept that needed to move
                    from static UX/UI designs into a fully functional app. The
                    goal was to merge design with a working backend, creating a
                    seamless shopping experience.
                  </p>
                </div>
                <div>
                  <h3>Problem</h3>
                  <p>
                    The original design lacked real product data, basket
                    management, and account handling. It was essential to build
                    a complete system that felt real and usable.
                  </p>
                </div>
                <div>
                  <h3>Solution</h3>
                  <p>
                    A responsive React frontend connected to a modular{" "}
                    <strong>PHP + SQLite backend</strong>, featuring{" "}
                    <strong>basket management</strong>,{" "}
                    <strong>checkout flow</strong>, and{" "}
                    <strong>user accounts</strong>.
                  </p>
                </div>
              </div>

              <div className="summary-meta">
                <div>
                  <h3>Tools</h3>
                  <p>React, Sass, Mantine, PHP, SQLite, Firebase</p>
                </div>
                <div>
                  <h3>Impact</h3>
                  <p>
                    Brought static designs to life with real interaction,
                    showcasing <strong>end-to-end development</strong>.
                  </p>
                </div>
                <div>
                  <h3>Role</h3>
                  <p>
                    Full-Stack Developer —{" "}
                    <em>front-end, back-end, database, API integration</em>.
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
            {activeTab === "Overview" && (
              <div className="project-hero">
                <video
                  className="project-hero__media"
                  src={rougeVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              </div>
            )}

            {activeTab === "Goals" && (
              <section className="project-section">
                <h2>Project Goals</h2>
                <ul>
                  <li>
                    Build a <strong>responsive, mobile-first</strong> shopping
                    experience.
                  </li>
                  <li>
                    Implement <strong>dynamic basket management</strong> (add,
                    remove, update quantities).
                  </li>
                  <li>
                    Develop a <strong>modular backend</strong> with SQLite DB
                    connectivity.
                  </li>
                  <li>
                    Enable smooth integration between{" "}
                    <strong>React ⇄ PHP APIs</strong>.
                  </li>
                  <li>
                    Support <strong>user accounts</strong> with Firebase +
                    backend storage.
                  </li>
                </ul>
              </section>
            )}

            {activeTab === "Process" && (
              <section className="project-section">
                <h2>Development Process</h2>

                <h3>Front-End</h3>
                <ul>
                  <li>Developed UI in React + Sass to match Andrea’s Figma.</li>
                  <li>
                    Used Mantine + custom SCSS for{" "}
                    <strong>consistent styling</strong>.
                  </li>
                  <li>
                    Created <strong>reusable components</strong> (cards,
                    buttons, banners, modals).
                  </li>
                  <li>Ensured responsive layouts across devices.</li>
                </ul>

                <h3>Back-End</h3>
                <ul>
                  <li>Structured PHP backend with modular routes.</li>
                  <li>
                    Designed SQLite schema for <code>items</code>,{" "}
                    <code>basket</code>, <code>users</code>,{" "}
                    <code>reviews</code>, and <code>orders</code>.
                  </li>
                  <li>Integrated Firebase authentication + user data sync.</li>
                </ul>

                <h3>Integration</h3>
                <ul>
                  <li>
                    Fetched item data into React (Home, Product Detail, Basket).
                  </li>
                  <li>
                    Enabled <strong>basket system</strong> with add/remove and
                    quantity updates.
                  </li>
                  <li>
                    Built <strong>checkout flow</strong> storing orders in DB.
                  </li>
                </ul>

                <h3>Key Features</h3>
                <ul>
                  <li>
                    Basket System with stepper, delete, sticky totals bar.
                  </li>
                  <li>
                    Checkout Flow: multi-step (address, payment, summary).
                  </li>
                  <li>
                    Profile page: personal info, favorites, settings backed by
                    API.
                  </li>
                  <li>Dynamic product reviews and related items.</li>
                </ul>
              </section>
            )}

            {activeTab === "After Thoughts" && (
              <section className="project-section">
                <h2>After Thoughts</h2>
                <p>
                  I transformed static designs into a{" "}
                  <strong>fully functional e-commerce prototype</strong>. The
                  basket + checkout logic, paired with API-driven data, made the
                  app feel like a real product rather than just a demo.
                </p>
              </section>
            )}

            {activeTab === "Future" && (
              <section className="project-section">
                <h2>Future Improvements</h2>
                <ul>
                  <li>Add payment gateway integration.</li>
                  <li>
                    Migrate from SQLite to MySQL/PostgreSQL for scalability.
                  </li>
                  <li>
                    Expand admin dashboard (manage products, users, orders).
                  </li>
                  <li>
                    Add real-time <strong>order tracking</strong> and delivery
                    updates.
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
