import "./RougeProjectManagement.scss";
import PM1 from "@/assets/images/Rouge/PM1.png";
import PM2 from "@/assets/images/Rouge/PM2.png";
import PM3 from "@/assets/images/Rouge/PM3.png";
import PM4 from "@/assets/images/Rouge/PM4.png";

export default function RougeProjectManagement() {
  return (
    <section className="project-section project-management">
      <h2>Project Management</h2>
      <p>
        One of my goals for this project was not only to deliver a functioning
        app, but also to treat the semester like a{" "}
        <strong>real-world software development cycle</strong>. To achieve this,
        we set up a dedicated <strong>Notion workspace</strong> and managed the
        entire project with Agile and Lean techniques. This approach helped us
        plan effectively, stay on track, and keep documentation transparent for
        both team members.
      </p>
      <p>
        The entire workspace with full documentation can be explored here:{" "}
        <a
          href="https://rouge-ixd.notion.site/Rouge-1968dc67295980d8919adaa18d58ce91"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-link"
        >
          👉 Project Management on Notion
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
            <h4>Frontend Repository</h4>
            <p>React + Sass + Mantine</p>
          </a>
          <a
            href="https://github.com/KatarinaBajnokova/rouge-backend"
            target="_blank"
            rel="noopener noreferrer"
            className="repo-card"
          >
            <h4>Backend Repository</h4>
            <p>PHP + MySQL + REST APIs</p>
          </a>
        </div>
      </div>

      <h3>Project Overview</h3>
      <p>
        At the start, we defined our{" "}
        <strong>team roles, technology stack, and process</strong>. We agreed on
        working in <strong>8 sprints (one per week)</strong>, supported by a{" "}
        <strong>Kanban board</strong> for tracking. This structure gave us
        clarity, accountability, and the ability to split a large project into
        smaller, achievable goals. Setting this up mirrored the workflows I will
        face in a professional development team.
      </p>
      <img src={PM1} alt="Project Management Overview" className="pm-image" />

      <h3>Meetings & Communication</h3>
      <p>
        To stay aligned, we ran <strong>weekly meetings</strong> and{" "}
        <strong>daily stand-ups</strong>. Every meeting was logged in Notion,
        with priorities, attendees, and key decisions. This documentation acted
        like a professional project log, which is especially valuable when
        multiple developers collaborate. It ensured that no detail was lost and
        everyone was accountable for their tasks.
      </p>
      <img src={PM2} alt="Project Meetings Screenshot" className="pm-image" />

      <h3>Sprint Planning</h3>
      <p>
        We divided the semester into <strong>8 sprints</strong>, each with
        defined goals, deliverables, and deadlines. Instead of rushing toward
        the end, this iterative approach allowed us to{" "}
        <strong>continuously deliver usable features</strong>. By the end of
        each sprint, we could showcase tangible progress (UI screens, functional
        APIs, or database updates).
      </p>
      <img src={PM3} alt="Sprints Overview Screenshot" className="pm-image" />

      <h3>Example Sprint Board</h3>
      <p>
        Each sprint board followed a clear structure:{" "}
        <em>Not Started → In Progress → Completed</em>. Tasks were assigned to
        either Andrea or me, and we used standups to update the status daily.
        This gave us full visibility of project health. For example, in{" "}
        <strong>Sprint 1</strong>, I set up the React and PHP environments,
        connected the repositories, and handled technical setup, while Andrea
        focused on UI styling and testing component libraries.
      </p>
      <img src={PM4} alt="Sprint 1 Board Screenshot" className="pm-image" />

      <h3>Collaboration & Role Sharing</h3>
      <p>
        Although Andrea and I shared many responsibilities, we also divided our
        focus areas to play to our strengths while ensuring we both gained{" "}
        <strong>full-stack experience</strong>.
      </p>

      <div className="role-sharing">
        <div className="role-card andrea">
          <h4>Andrea</h4>
          <ul>
            <li>Led on design, SCSS, and matching Figma prototype</li>
            <li>
              Created reusable components and handled early backend refinements
            </li>
            <li>Set up the initial GitHub repository</li>
          </ul>
        </div>
        <div className="role-card katarina">
          <h4>Katarina (me)</h4>
          <ul>
            <li>Led front-end structure and routing</li>
            <li>
              Set up project documentation in Notion, repo migration, and
              ongoing documentation
            </li>
            <li>Key on backend integration and overall project setup</li>
          </ul>
        </div>
      </div>

      <div className="role-sharing-shared">
        <h4>Both</h4>
        <ul>
          <li>
            Shared all development, testing, code reviews, and GitHub management
          </li>
          <li>
            Swapped roles deliberately to ensure both of us gained{" "}
            <strong>full-stack experience</strong>
          </li>
        </ul>
      </div>
    </section>
  );
}
