import "./Rouge.scss";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import rougeVideo from "@/assets/videos/rouge.mp4";

export default function Rouge() {
  return (
    <>
      <Header />
      <main className="project-page">
        <section className="project__container">
          <header className="project__header">
            <h1>Rouge – Fashion E-Commerce App</h1>

            <p className="project__summary">
              <strong>Challenge:</strong> Rouge, a fashion e-commerce concept,
              needed to be turned into a functional app that connected Andrea’s
              UX/UI design with a working backend. The goal was a smooth,
              responsive shopping experience with real product data and basket
              management.
            </p>

            <p className="project__meta">
              <strong>Deliverables:</strong> Front-end (React, Sass, Mantine),
              Back-end (PHP, SQLite / Laravel), DB setup (items, basket, users,
              orders), API integration, add-to-basket, checkout, login/signup.
              <br />
              <strong>Role:</strong> Full-Stack Developer (with Andrea:
              Front-end & Back-end collaboration)
            </p>
          </header>

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

          <section className="project-section">
            <h2>Goals</h2>
            <ul>
              <li>
                Implement a responsive, mobile-first shopping experience from
                design files.
              </li>
              <li>
                Enable dynamic basket management (add, remove, update
                quantities).
              </li>
              <li>Build a modular backend with database connectivity.</li>
              <li>Ensure smooth React ⇄ PHP + SQLite integration.</li>
              <li>
                Support accounts using Firebase authentication and backend
                storage.
              </li>
            </ul>
          </section>

          <section className="project-section">
            <h2>Development Process</h2>
            <h3>Front-End</h3>
            <ul>
              <li>
                Built UI components in React + Sass; styled to match Figma.
              </li>
              <li>Used Mantine and custom SCSS for layout consistency.</li>
              <li>
                Created reusable components (cards, buttons, banners, modals).
              </li>
              <li>Implemented responsive layouts for mobile and desktop.</li>
            </ul>

            <h3>Back-End</h3>
            <ul>
              <li>Developed RESTful APIs in PHP (Laravel-style structure).</li>
              <li>
                Designed SQLite schema (items, basket, users, reviews, orders).
              </li>
              <li>Connected Firebase auth; stored extended profile data.</li>
              <li>
                Wrote routes for <code>/api/items</code>,{" "}
                <code>/api/basket</code>, <code>/api/orders</code>.
              </li>
            </ul>

            <h3>Integration</h3>
            <ul>
              <li>
                Fetched item data from backend into React (Home, Product Detail,
                Basket).
              </li>
              <li>Enabled basket system with add/remove/quantity update.</li>
              <li>Built checkout flow storing orders in database.</li>
            </ul>

            <h3>Key Features Implemented</h3>
            <ul>
              <li>
                Basket System: quantity stepper, delete, sticky totals bar.
              </li>
              <li>Checkout Flow: multi-step (address, payment, summary).</li>
              <li>
                Profile: personal info, favorites, settings (backed by API).
              </li>
              <li>Product Detail Page: dynamic reviews and related items.</li>
            </ul>
          </section>

          <section className="project-section">
            <h2>After Thoughts</h2>
            <p>
              I translated high-fidelity designs into a responsive, functional
              front-end and built a working PHP + SQLite backend. The basket and
              checkout logic make the prototype feel like a real app.
            </p>
          </section>

          <section className="project-section">
            <h2>Future Improvements & Suggestions</h2>
            <ul>
              <li>Add payment gateway integration for real transactions.</li>
              <li>Migrate from SQLite to MySQL/PostgreSQL for scalability.</li>
              <li>Expand admin dashboard (manage products, users, orders).</li>
              <li>Add real-time order tracking and delivery updates.</li>
            </ul>
          </section>
        </section>
      </main>
      <Footer linkedin="https://www.linkedin.com/in/katarina-bajnokova/" />
    </>
  );
}
