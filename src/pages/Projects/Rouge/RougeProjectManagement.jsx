import "./RougeProjectManagement.scss";
import PM1 from "@/assets/images/Rouge/PM1.png";
import PM2 from "@/assets/images/Rouge/PM2.png";

export default function RougeProjectManagement() {
  return (
    <section className="project-section project-management">
      <h2>Project Management</h2>

      <p>
        This project was run as a <strong>real-world software cycle</strong>,
        with Agile and Lean practices applied from start to finish. We used a
        dedicated <strong>Notion workspace</strong> for sprint planning,
        documentation, and standups, and managed code through{" "}
        <strong>GitHub repositories</strong>.
      </p>

      <p>
        Explore full documentation here:{" "}
        <a
          href="https://rouge-ixd.notion.site/Rouge-1968dc67295980d8919adaa18d58ce91"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-link"
        >
          Project Workspace on Notion
        </a>
      </p>

      <div className="repo-links">
        <h3>Repositories</h3>
        <div className="repo-grid">
          <a
            href="https://github.com/KatarinaBajnokova/rouge-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="repo-card"
          >
            <h4>Frontend</h4>
            <p>React + Sass + Mantine</p>
          </a>
          <a
            href="https://github.com/KatarinaBajnokova/rouge-backend"
            target="_blank"
            rel="noopener noreferrer"
            className="repo-card"
          >
            <h4>Backend</h4>
            <p>PHP + MySQL + REST APIs</p>
          </a>
        </div>
      </div>

      <h3>Workflow</h3>
      <p>
        The semester was divided into <strong>8 weekly sprints</strong> with
        clear deliverables. Each sprint ended with tangible outputs such as UI
        screens, API endpoints, or database updates. A{" "}
        <strong>Kanban board</strong> kept progress transparent and ensured
        accountability.
      </p>
      <img src={PM1} alt="Sprint Planning Overview" className="pm-image" />

      <h3>Team Collaboration</h3>
      <p>
        Roles were split but rotated to ensure we both gained{" "}
        <strong>full-stack experience</strong>.
      </p>

      <div className="role-sharing">
        <div className="role-card">
          <h4>Katarina (me)</h4>
          <ul>
            <li>Led frontend structure and routing</li>
            <li>Set up project documentation and repo migration</li>
            <li>Backend integration and overall project setup</li>
          </ul>
        </div>
        <div className="role-card">
          <h4>Andrea</h4>
          <ul>
            <li>Led UI design and SCSS styling</li>
            <li>Created reusable components</li>
            <li>Initial repository setup</li>
          </ul>
        </div>
      </div>

      <div className="role-sharing-shared">
        <h4>Shared</h4>
        <ul>
          <li>All development, testing, and code reviews</li>
          <li>Rotated roles to ensure balanced full-stack learning</li>
        </ul>
      </div>

      <img src={PM2} alt="Team Collaboration in Notion" className="pm-image" />
    </section>
  );
}
