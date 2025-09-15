import "./RougeAfterThoughts.scss";

export default function RougeAfterThoughts() {
  return (
    <section className="project-section rouge-afterthoughts">
      <h2>After Thoughts</h2>

      <p>
        Looking back at Rouge, I’m proud Andrea and I delivered a{" "}
        <strong>fully working e-commerce prototype</strong>. It was my first
        time owning the <strong>entire technical stack</strong> — setting up the
        database, building the UI, and connecting everything end-to-end.
      </p>

      <p>
        The toughest challenges — <strong>database syncing</strong>,{" "}
        <strong>authentication</strong>, and <strong>merge conflicts</strong> —
        slowed us down but became the most valuable lessons. They showed me how
        quickly <strong>technical debt</strong> and workflow issues appear, even
        in a two-person team.
      </p>

      <p>
        If I were to start again, I’d introduce{" "}
        <strong>Laravel for backend structure</strong> and a stronger{" "}
        <strong>Git branching strategy</strong> from day one. Those practices
        would have prevented most of the friction we faced.
      </p>

      <div className="reflection-box">
        <p>
          Rouge gave me confidence to{" "}
          <strong>translate design into production code</strong>, manage both
          frontend and backend, and adapt when things didn’t go smoothly. It
          confirmed how much I enjoy solving{" "}
          <strong>technical challenges in collaboration</strong>. Most
          importantly, it taught me to approach projects like a{" "}
          <em>professional developer</em> — balancing code quality, workflow,
          and teamwork.
        </p>
      </div>
    </section>
  );
}
