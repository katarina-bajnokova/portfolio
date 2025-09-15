import "./RougeGoals.scss";
import rougeIntro from "@/assets/images/Rouge/intro.mp4";

export default function RougeGoals() {
  return (
    <section className="project-section rouge-goals">
      <h2>Project Goals</h2>

      <div className="goals-intro">
        <div className="goals-intro__text">
          <p>
            The goal of this project was to{" "}
            <strong>
              build a fully functional front-end and back-end e-commerce
              application
            </strong>{" "}
            from scratch. What started as a static design had to be transformed
            into a <em>real, working system</em> with dynamic data, APIs, and
            complete user flows.
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
        Alongside this main objective, several <strong>technical goals</strong>{" "}
        were defined to ensure the app was robust, scalable, and aligned with
        professional development standards:
      </p>

      <div className="goals-grid">
        <div className="goal-card">
          <h4>Responsive Design</h4>
          <p>
            Create a <strong>mobile-first shopping experience</strong> that
            adapts across devices.
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
            Develop a <strong>PHP + MySQL backend</strong> with REST endpoints
            powering business logic.
          </p>
        </div>
        <div className="goal-card">
          <h4>Integration</h4>
          <p>
            Ensure smooth communication between{" "}
            <strong>React and PHP APIs</strong>.
          </p>
        </div>
        <div className="goal-card">
          <h4>User Accounts</h4>
          <p>
            Support authentication with <strong>Firebase</strong> and secure
            backend storage.
          </p>
        </div>
      </div>
    </section>
  );
}
