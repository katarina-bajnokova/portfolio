import "./RougeChallenges.scss";

export default function RougeChallenges() {
  return (
    <section className="project-section rouge-challenges">
      <h2>Challenges & Learnings</h2>

      <div className="challenge-block">
        <h3>1. Database Synchronization</h3>
        <p>
          Using <strong>plain PHP + MySQL</strong> worked for quick prototyping,
          but schema changes required manual exports/imports, slowing us down.
        </p>
        <div className="highlight-box">
          <p>
            <strong>Lesson:</strong> A framework like <strong>Laravel</strong>{" "}
            with migrations would have ensured consistency and scalability.
          </p>
        </div>
      </div>

      <div className="challenge-block">
        <h3>2. Authentication</h3>
        <p>
          We first tried <strong>cookies</strong> for auth but quickly hit
          security and scalability issues. Switching to{" "}
          <strong>Firebase Authentication</strong> solved the immediate problem
          and let us ship.
        </p>
        <div className="highlight-box">
          <p>
            <strong>Lesson:</strong> Built-in tools from frameworks (session
            handling, role-based access, password hashing) would have simplified
            development and reduced external dependencies.
          </p>
        </div>
      </div>

      <div className="challenge-block">
        <h3>3. Collaboration & Git Workflow</h3>
        <p>
          Early on, pushing directly to <strong>main</strong> caused frequent
          merge conflicts. We adopted a branching workflow with feature branches
          and a <strong>test branch</strong> before merging to main.
        </p>
        <div className="highlight-box">
          <p>
            <strong>Lesson:</strong> Proper Git discipline improves stability
            and is essential when scaling to larger teams with reviews and CI/CD
            pipelines.
          </p>
        </div>
      </div>

      <div className="challenge-block">
        <h3>Personal Growth</h3>
        <p>
          These challenges taught me{" "}
          <strong>real-world engineering trade-offs</strong>: quick hacks may
          work in small teams, but <strong>scalable practices</strong> (like
          migrations, structured auth, and disciplined Git) are vital in
          professional settings.
        </p>
      </div>

      <div className="challenge-block">
        <h3>If I Did It Again</h3>
        <p>
          I’d start with <strong>Laravel</strong> for migrations and auth, and
          enforce a stronger <strong>Git workflow</strong> (feature branches,
          reviews, automated testing). This would eliminate most of the friction
          and allow the project to grow beyond two developers.
        </p>
      </div>
    </section>
  );
}
