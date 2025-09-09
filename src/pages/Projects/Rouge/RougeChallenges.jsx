import "./RougeChallenges.scss";

export default function RougeChallenges() {
  return (
    <section className="project-section rouge-challenges">
      <h2>Challenges & Learnings</h2>

      <div className="challenge-block">
        <h3>1. Database Synchronization</h3>
        <p>
          Working with <strong>plain PHP + MySQL</strong> was fast for
          prototyping, but schema changes became a bottleneck. Since{" "}
          <strong>migrations were not available</strong>, Andrea and I had to
          manually export/import databases when changes were made. With just the
          two of us this was still workable, but in a larger team this approach
          would quickly collapse under its own complexity.
        </p>
        <div className="highlight-box">
          <p>
            A framework like <strong>Laravel</strong> would have solved this
            issue with built-in <strong>migrations</strong>, keeping databases
            consistent across environments and preventing human error.
          </p>
        </div>
      </div>

      <div className="challenge-block">
        <h3>2. Authentication</h3>
        <p>
          Initially, we attempted to implement authentication via{" "}
          <strong>plain cookies</strong>, but we quickly realized the
          limitations in terms of <strong>security and scalability</strong>. To
          move forward, we integrated <strong>Firebase Authentication</strong>,
          which solved the immediate problem and allowed us to ship a working
          prototype.
        </p>
        <p>
          Looking back, a framework like <strong>Laravel</strong> would have
          provided <strong>out-of-the-box auth tools</strong> with session
          handling, password hashing, and role-based access control. This would
          have streamlined the process, reduced external dependencies, and
          simplified our codebase.
        </p>
      </div>

      <div className="challenge-block">
        <h3>3. Collaboration & Branching Strategy</h3>
        <p>
          At the beginning, we pushed all code directly to the{" "}
          <strong>main branch</strong>. This quickly led to{" "}
          <strong>merge conflicts</strong> that slowed us down and sometimes
          overwrote working code. We realized this was not sustainable, even in
          a two-person team.
        </p>
        <p>
          To fix this, we adopted a <strong>branching workflow</strong>:
        </p>
        <ul>
          <li>Create sub-branches for individual features or fixes.</li>
          <li>
            Merge them first into a <strong>test branch</strong>.
          </li>
          <li>
            Only merge tested, working code back into <strong>main</strong>.
          </li>
        </ul>
        <p>
          This improved code stability and taught us the importance of{" "}
          <strong>Git discipline</strong>. In a larger company, such practices
          (combined with code reviews and CI/CD pipelines) are essential to
          maintaining velocity without breaking production.
        </p>
      </div>

      <div className="challenge-block">
        <h3>Personal Growth</h3>
        <p>
          These three challenges — database syncing, authentication, and code
          collaboration — gave me{" "}
          <strong>hands-on lessons in real-world engineering tradeoffs</strong>.
          I learned that while quick solutions may work in small teams, scalable
          approaches (frameworks, CI/CD, and branching strategies) are critical
          in professional settings.
        </p>
      </div>

      <div className="challenge-block">
        <h3>If I Did It Again</h3>
        <p>
          If I were to rebuild Rouge today, I would choose{" "}
          <strong>Laravel</strong> from the start for{" "}
          <strong>migrations, authentication, and project structure</strong>. I
          would also apply a more rigorous <strong>Git workflow</strong> with
          feature branches, code reviews, and automated testing. These practices
          would have prevented most of the friction we faced and allowed the
          project to scale beyond two people.
        </p>
      </div>
    </section>
  );
}
