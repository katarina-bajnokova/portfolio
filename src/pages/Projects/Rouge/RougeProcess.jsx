import "./RougeProcess.scss";
import rougeFavourite from "@/assets/images/Rouge/favourite.mp4";
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
        I started by laying the foundation with a{" "}
        <strong>scalable project environment</strong> for both frontend and
        backend. This included structuring separate repositories, configuring{" "}
        <strong>Prettier + ESLint</strong> for code quality, building a clean{" "}
        <strong>folder architecture</strong>, and establishing the{" "}
        <strong>API connection</strong> between React and PHP. From day one, the
        goal was to treat this project like a production-ready system rather
        than a student prototype.
      </p>

      <h3>Step 2 – Frontend Development</h3>
      <p>
        The frontend was built with <strong>React, Sass, and Mantine</strong>,
        translating Andrea’s Figma prototype into dynamic, reusable components.
        I implemented the <strong>entire navigation system</strong> with React
        Router (Home, Product, Basket, Checkout, Profile), while ensuring{" "}
        <strong>business logic</strong> like basket state, checkout validation,
        and user flows were smooth and reliable. To keep performance high, I
        optimized with <strong>lazy loading</strong> and{" "}
        <strong>image compression</strong>.
      </p>

      <h3>Step 3 – Backend Development</h3>
      <p>
        On the backend, I designed a modular <strong>PHP environment</strong>{" "}
        with clear routing and folder structure. The{" "}
        <strong>MySQL schema</strong> covered all core features — products,
        users, orders, reviews. I built <strong>REST APIs</strong> to handle
        CRUD operations, integrated <strong>Firebase authentication</strong>{" "}
        with secure MySQL storage (hashed passwords, validation), and enforced{" "}
        <strong>input sanitization with parameterized queries</strong> to
        protect against security risks.
      </p>
      <p>
        Authentication was a particularly important part of the process. Users
        could only create and access favorites, basket, and orders once signed
        in. Below is a demo of how the <strong>Signup & Login</strong> flow
        works with Firebase Authentication.
      </p>
      <div className="feature-demo">
        <video
          className="feature-demo__media"
          src={rougeSignup}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <h3>Step 4 – Integration</h3>
      <p>
        The integration phase was about connecting everything together. I linked
        the frontend with backend APIs using <code>fetch()</code> and Axios,
        handling loading and error states gracefully. The{" "}
        <strong>basket system</strong> synced with the server so data persisted
        across sessions, while the <strong>multi-step checkout flow</strong> —
        User Info → Delivery → Payment — ensured orders were stored in the DB
        and inventory updated automatically.
      </p>
      <p>
        Below is a demo of how the <strong>checkout process</strong> looked in
        the final app.
      </p>
      <div className="feature-demo">
        <video
          className="feature-demo__media"
          src={rougeCheckout}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <h3>Feature Spotlight – Favorites</h3>
      <p>
        We also created a <strong>Favorites functionality</strong> to let users
        save products they liked. This feature works only when the{" "}
        <strong>user is signed in</strong>, since it relies on authenticated
        Firebase sessions and synced MySQL storage. Below is a showcase of how
        the feature looks and behaves in the final app.
      </p>
      <div className="feature-demo">
        <video
          className="feature-demo__media"
          src={rougeFavourite}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <h3>Step 5 – Developer Workflow</h3>
      <p>
        We worked in <strong>weekly sprints</strong> tracked in Notion, with
        retrospectives to adapt quickly. Collaboration was close: we often used{" "}
        <strong>pair programming</strong> when someone got stuck, and followed a{" "}
        <strong>GitHub flow</strong> with feature branches, pull requests, and
        reviews. We also conducted{" "}
        <strong>user testing during our open day</strong>, which helped refine
        basket logic and checkout clarity.
      </p>

      <h3>Step 6 – Reflection & Learnings</h3>
      <div className="highlight-box">
        <p>
          Through this process, I learned not just how to build a{" "}
          <strong>production-ready full-stack app</strong>, but also how to work
          like a professional engineer:
        </p>
        <ul>
          <li>
            <strong>Deploy early, iterate often</strong> — late deployment
            taught us the importance of CI/CD pipelines.
          </li>
          <li>
            <strong>Architecture matters</strong> — clean folder structures and
            APIs made teamwork smooth.
          </li>
          <li>
            <strong>Collaboration is a skill</strong> — debugging each other’s
            code and sharing ownership improved both speed and quality.
          </li>
        </ul>
      </div>
    </section>
  );
}
