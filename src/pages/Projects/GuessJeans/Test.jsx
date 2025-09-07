import "./Test.scss";

export default function Test() {
  return (
    <div className="test">
      {/* OVERVIEW */}
      <section className="project-section">
        <h2>Test – Learning from Real Users</h2>
        <p>
          To validate the <strong>hi-fi prototype</strong>, I conducted a quick
          guerrilla usability test at a <strong>bookstore in Brussels</strong>.
          I asked <strong>5 strangers</strong> to complete core shopping tasks
          on the prototype. The goal was to uncover both{" "}
          <em>delightful moments</em> and <em>pain points</em> in a natural,
          real-world setting.
        </p>
      </section>

      {/* METHODOLOGY */}
      <section className="project-section">
        <h3>Step 1 – Methodology</h3>
        <div className="highlight-box">
          <p>
            <strong>Location:</strong> Bookstore café in Brussels.
          </p>
          <p>
            <strong>Participants:</strong> 5 shoppers (3 women, 2 men, aged
            22–45).
          </p>
          <p>
            <strong>Tasks:</strong> Find a pair of jeans, check the Fit Guide,
            add to basket, and explore Lookbook styling ideas.
          </p>
          <p>
            <strong>Duration:</strong> 7–10 minutes per participant.
          </p>
        </div>
      </section>

      {/* POSITIVE OUTCOMES */}
      <section className="project-section">
        <h3>Step 2 – What Worked</h3>
        <ul>
          <li>
            <strong>Fit Guide:</strong> 4/5 users said it gave them confidence
            in selecting their size.
          </li>
          <li>
            <strong>Lookbook:</strong> Users loved the curated outfits and felt
            inspired — “It feels like I have a stylist on my phone.”
          </li>
          <li>
            <strong>Clean navigation:</strong> No one struggled with basic
            browsing or adding items to the basket.
          </li>
        </ul>
      </section>

      {/* AREAS TO IMPROVE */}
      <section className="project-section">
        <h3>Step 3 – Areas for Improvement</h3>
        <ul>
          <li>
            <strong>Fit Quiz:</strong> Some users found the questions “too
            abstract” and suggested adding clearer visuals.
          </li>
          <li>
            <strong>Basket visibility:</strong> 2 participants didn’t notice the
            sticky basket button at first glance.
          </li>
          <li>
            <strong>Lookbook diversity:</strong> One user asked for{" "}
            <em>more body type variety</em> in styling examples.
          </li>
        </ul>
      </section>

      {/* KEY INSIGHTS */}
      <section className="project-section">
        <h3>Step 4 – Key Insights</h3>
        <blockquote>
          “This feels easier than browsing a normal fashion site — but I wish
          the size quiz showed pictures instead of just words.”
        </blockquote>
        <div className="highlight-box">
          <ul>
            <li>
              <strong>Clarity builds confidence:</strong> Visuals and examples
              make tools like the Fit Quiz more intuitive.
            </li>
            <li>
              <strong>Representation matters:</strong> Users notice diversity in
              imagery — and miss it when it’s absent.
            </li>
            <li>
              <strong>Micro-interactions matter:</strong> Small details like the
              basket button need stronger visibility cues.
            </li>
          </ul>
        </div>
      </section>

      {/* OUTCOME SNAPSHOT */}
      <section className="outcome-snapshot">
        <h4>Why This Phase Was Important</h4>
        <p>
          Testing in a real-world context uncovered subtle usability issues that
          wouldn’t have been visible in a lab. It validated the{" "}
          <strong>strength of the Fit Guide</strong> and{" "}
          <strong>Lookbook</strong>, while highlighting areas like the Fit Quiz
          and basket visibility that need iteration.
        </p>
        <p>
          These insights ensured the final product wasn’t just functional, but{" "}
          <em>truly usable and inclusive</em> for everyday shoppers.
        </p>
      </section>

      {/* FINAL REFLECTION */}
      <section className="outcome-snapshot">
        <h4>Final Reflection – Learning the Full Design Cycle</h4>
        <p>
          Working on this project allowed me to{" "}
          <strong>practice the full design cycle end-to-end</strong>. Moving
          step by step from <em>empathizing with users</em>, to{" "}
          <em>defining clear problem statements</em>,{" "}
          <em>ideating bold solutions</em>,{" "}
          <em>prototyping tangible experiences</em>, and{" "}
          <em>testing in the real world</em> showed me how each phase is{" "}
          <strong>crucial and interconnected</strong>.
        </p>
        <p>
          This process taught me that design thinking isn’t just a set of
          tools—it’s a{" "}
          <strong>
            mindset of iteration, empathy, and structured creativity
          </strong>
          . I deepened my <strong>research skills</strong>, improved my ability
          to <strong>translate insights into design decisions</strong>, and
          strengthened my confidence in{" "}
          <strong>leading end-to-end UX projects</strong>. Most importantly, I
          learned how each step builds on the previous one to create solutions
          that are not only innovative but <em>human-centered and impactful</em>
          .
        </p>
      </section>
    </div>
  );
}
