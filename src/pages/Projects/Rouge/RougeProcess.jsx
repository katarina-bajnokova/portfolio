import "./RougeProcess.scss";
import rougeFavorite from "@/assets/images/Rouge/favourite.mp4";
import rougeCheckout from "@/assets/images/Rouge/checkoutProccess.mp4";
import rougeSignup from "@/assets/images/Rouge/signup.mp4";

export default function RougeProcess() {
  return (
    <section className="project-section rouge-process">
      <h2>Development Process</h2>

      <div className="tech-snapshot">
        <h3>Tech Stack Snapshot</h3>
        <div className="tech-grid">
          <div className="tech-card">
            <h4>Frontend</h4>
            <p>React, Sass, Mantine, React Router</p>
          </div>
          <div className="tech-card">
            <h4>Backend</h4>
            <p>PHP, MySQL, REST APIs</p>
          </div>
          <div className="tech-card">
            <h4>Integration</h4>
            <p>Axios, Fetch API, Firebase Auth</p>
          </div>
          <div className="tech-card">
            <h4>Workflow</h4>
            <p>GitHub Flow, Notion, Agile Sprints</p>
          </div>
        </div>
      </div>

      <h3>Step 1 – Environment Setup</h3>
      <p>
        I began by creating a <strong>scalable environment</strong> for both
        frontend and backend. This included separate repositories, clean folder
        architecture, <strong>Prettier + ESLint</strong> for consistency, and an
        initial <strong>API connection</strong> between React and PHP. From day
        one, the goal was to treat this as a <em>production-ready system</em>,
        not a student prototype.
      </p>

      <h3>Step 2 – Frontend Development</h3>
      <p>
        Built with <strong>React, Sass, and Mantine</strong>, the frontend
        translated Andrea’s Figma into reusable components. I implemented the{" "}
        <strong>navigation system</strong> (Home, Product, Basket, Checkout,
        Profile), basket state, checkout validation, and user flows. Performance
        was improved with <strong>lazy loading</strong> and{" "}
        <strong>image compression</strong>.
      </p>

      <h3>Step 3 – Backend Development</h3>
      <p>
        I set up a modular <strong>PHP backend</strong> with clear routing and
        MySQL schema for products, users, orders, and reviews. REST APIs handled
        CRUD operations, integrated with{" "}
        <strong>Firebase authentication</strong> (securely stored in MySQL), and
        validated input with parameterized queries to prevent security risks.
      </p>
      <p>
        Authentication was key: users could only create/access favorites,
        basket, and orders once signed in.
      </p>
      <video
        className="feature-demo__media"
        src={rougeSignup}
        autoPlay
        muted
        loop
        playsInline
      />

      <h3>Step 4 – Integration</h3>
      <p>
        I connected frontend and backend via <code>fetch()</code> and Axios,
        with proper loading/error states. The <strong>basket system</strong>{" "}
        synced with the server for persistence, while the{" "}
        <strong>multi-step checkout</strong> (User Info → Delivery → Payment)
        stored orders in the DB and updated inventory.
      </p>
      <video
        className="feature-demo__media"
        src={rougeCheckout}
        autoPlay
        muted
        loop
        playsInline
      />

      <h3>Feature Spotlight – Favorites</h3>
      <p>
        Users could save products to <strong>Favorites</strong>, accessible only
        when signed in, since it relied on authenticated Firebase sessions and
        synced MySQL storage.
      </p>
      <video
        className="feature-demo__media"
        src={rougeFavorite}
        autoPlay
        muted
        loop
        playsInline
      />

      <h3>Step 5 – Developer Workflow</h3>
      <p>
        We worked in <strong>weekly sprints</strong>, tracked in Notion, with
        retrospectives to adapt quickly. Collaboration included{" "}
        <strong>pair programming</strong>, GitHub flow (branches, PRs, reviews),
        and <strong>user testing during our open day</strong>, which refined
        basket logic and checkout clarity.
      </p>

      <h3>Step 6 – Reflection & Learnings</h3>
      <div className="highlight-box">
        <p>
          Beyond building a <strong>full-stack app</strong>, I learned how to
          work like a professional engineer:
        </p>
        <ul>
          <li>
            <strong>Deploy early, iterate often</strong> — late deployment
            showed the importance of CI/CD pipelines.
          </li>
          <li>
            <strong>Architecture matters</strong> — clean folder structures and
            APIs made collaboration smoother.
          </li>
          <li>
            <strong>Collaboration is a skill</strong> — debugging and sharing
            ownership improved both speed and quality.
          </li>
        </ul>
      </div>
    </section>
  );
}
