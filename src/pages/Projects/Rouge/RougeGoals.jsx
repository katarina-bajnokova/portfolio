import "./RougeGoals.scss";
import rougeIntro from "@/assets/images/Rouge/intro.mp4";

export default function RougeGoals() {
  return (
    <section className="project-section rouge-goals">
      <h2>Project Goals</h2>

      {/* ✅ Two-column layout for intro */}
      <div className="goals-intro">
        <div className="goals-intro__text">
          <p>
            The <strong>primary goal</strong> of this project was to{" "}
            <strong>
              build from scratch a fully functional, coded front-end and
              back-end e-commerce application
            </strong>{" "}
            based entirely on Andrea’s original Figma prototype. What started as
            a static design in the first semester had to be transformed into a{" "}
            <em>real, working system</em> with dynamic data, APIs, and complete
            user flows.
          </p>
        </div>

        <div className="goals-intro__video">
          <video
            className="project-hero__media"
            src={rougeIntro}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>

      <p>
        Alongside this main objective, we also defined several{" "}
        <strong>secondary technical goals</strong> to ensure the app was robust,
        scalable, and reflective of professional development standards:
      </p>

      <div className="goals-grid">
        <div className="goal-card">
          <h4>Responsive Design</h4>
          <p>
            Create a <strong>mobile-first shopping experience</strong> that
            adapts seamlessly to different devices.
          </p>
        </div>
        <div className="goal-card">
          <h4>Basket Management</h4>
          <p>
            Implement <strong>dynamic add, remove, and update</strong>{" "}
            functionality synced with the backend.
          </p>
        </div>
        <div className="goal-card">
          <h4>REST API</h4>
          <p>
            Develop a <strong>PHP + MySQL backend</strong> with REST APIs to
            power all business logic.
          </p>
        </div>
        <div className="goal-card">
          <h4>Integration</h4>
          <p>
            Enable smooth communication between{" "}
            <strong>React ⇄ PHP APIs</strong> using fetch and Axios.
          </p>
        </div>
        <div className="goal-card">
          <h4>User Accounts</h4>
          <p>
            Support authentication with <strong>Firebase</strong> and secure
            backend storage.
          </p>
        </div>
        <div className="goal-card">
          <h4>Developer Tooling</h4>
          <p>
            Apply <strong>Prettier + ESLint</strong> to maintain consistency and
            code quality across the project.
          </p>
        </div>
      </div>
    </section>
  );
}
