import "./RougeAfterThoughts.scss";

export default function RougeAfterThoughts() {
  return (
    <section className="project-section rouge-afterthoughts">
      <h2>After Thoughts</h2>

      <p>
        Looking back at Rouge, I’m proud that Andrea and I delivered a{" "}
        <strong>fully working e-commerce prototype</strong> by combining her
        design skills with my backend and frontend development. It was my first
        time owning the <strong>entire technical stack</strong>, from setting up
        the database to building the UI and connecting everything together.
      </p>

      <p>
        Some parts of the project were harder than expected.{" "}
        <strong>Database syncing, authentication, and merge conflicts</strong>{" "}
        all slowed us down at some point. But those difficulties were also the
        most valuable: they taught me how quickly technical debt and workflow
        issues appear, even in a two-person team.
      </p>

      <p>
        If I were to start over, I would introduce{" "}
        <strong>Laravel for backend structure</strong> and a{" "}
        <strong>Git branching strategy</strong> from day one. Still, making
        mistakes in this project was a safe way to learn lessons that I now
        carry into every new build.
      </p>

      <div className="reflection-box">
        <p>
          Rouge gave me the confidence to{" "}
          <strong>translate design into production code</strong>, manage both
          frontend and backend, and adapt when things didn’t go smoothly. It
          confirmed how much I enjoy solving technical challenges as part of a{" "}
          <strong>collaborative process</strong>. Most importantly, it taught me
          to always think like a <em>professional developer</em> — balancing
          code quality, workflow, and teamwork.
        </p>
      </div>
    </section>
  );
}
