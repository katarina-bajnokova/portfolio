import "./Ideate.scss";
import ideaDump from "@/assets/images/Guess/ideaDUMP.jpg";
import crazy8 from "@/assets/images/Guess/crazy8.jpg";

export default function Ideate() {
  return (
    <div className="ideate">
      {/* OVERVIEW */}
      <section className="project-section">
        <h2>Ideate – Expanding Possibilities</h2>
        <p>
          After defining{" "}
          <strong>
            clear problem statements, hypotheses, and value propositions
          </strong>
          , the next step was to <em>open up the solution space</em>. In the{" "}
          <strong>Ideate phase</strong>, I deliberately shifted from narrowing
          down problems to generating as many creative directions as possible.
        </p>
        <p>
          I wrote <strong>goal statements</strong> for each persona to ensure
          that every design idea tied back to real user needs. From these, I
          consolidated into a <strong>final goal statement</strong> that aligned
          the redesign with Guess’s broader vision.
        </p>
      </section>

      {/* GOAL STATEMENT */}
      <section className="project-section">
        <h3>Step 1 – Goal Statement for Ema</h3>
        <p>
          Our Guess Jeans redesign will let users like Ema (curvy, bold,
          style-driven) discover jeans that truly fit their waist-to-hip ratio
          and match their expressive fashion sense, helping them shop with
          confidence and save time.
        </p>
        <div className="highlight-box">
          <p>
            <strong>Effectiveness will be measured by:</strong> higher
            satisfaction with fit guides, reduced returns, and positive feedback
            on inclusivity and representation.
          </p>
        </div>

        <h3>Step 2 – Final Goal Statement</h3>
        <blockquote>
          The Guess Jeans redesign will make denim shopping simple, inclusive,
          and confidence-driven by providing tools like the{" "}
          <strong>Fit Guide</strong>, <strong>Fit Quiz</strong>,{" "}
          <strong>Lookbook</strong>, and <strong>Body Scan</strong> that adapt
          to different body types and style needs.
        </blockquote>
        <p>
          <strong>Effectiveness will be measured by:</strong> improved fit
          satisfaction, lower return rates, and stronger engagement with
          personalized shopping features.
        </p>
      </section>

      {/* HMW QUESTIONS */}
      <section className="project-section">
        <h3>Step 3 – HMW (How Might We) Questions</h3>
        <p>
          From the problem statements and goals, I reframed challenges into{" "}
          <strong>HMW questions</strong>. This invites{" "}
          <em>open-ended exploration</em> while staying anchored to real user
          frustrations.
        </p>
        <ul>
          <li>HMW help Ema find jeans that fit her waist-to-hip ratio?</li>
          <li>HMW make shopping feel empowering instead of frustrating?</li>
          <li>HMW showcase inclusive models so Ema feels represented?</li>
          <li>
            HMW let her visualize how jeans will look on her body before
            purchase?
          </li>
          <li>HMW reduce returns by guiding her to the right fit?</li>
          <li>
            HMW highlight bold, stylish looks that match her expressive
            personality?
          </li>
          <li>
            HMW build trust by showing that Guess celebrates diverse body types?
          </li>
          <li>
            HMW save her time while still giving confidence she’s picking the
            right style?
          </li>
        </ul>
      </section>

      {/* IDEA DUMP */}
      <section className="project-section">
        <h3>Step 4 – Idea Dump</h3>
        <p>
          To push creativity further, I ran an <strong>idea dump</strong> — a
          process of writing down as many potential solutions as possible
          without self-censoring. The goal was <em>quantity over quality</em>:
          to capture everything from practical tweaks to wild, experimental
          concepts.
        </p>
        <figure className="gallery__item">
          <img
            src={ideaDump}
            alt="Idea Dump"
            loading="lazy"
            className="img-rotate-90"
          />
          <figcaption>
            Idea dump session – capturing every idea possible
          </figcaption>
        </figure>
        <p>
          This ensured no potential direction was lost and gave a rich
          foundation to refine later.
        </p>
      </section>

      {/* CRAZY 8 */}
      <section className="project-section">
        <h3>Step 5 – Crazy 8</h3>
        <p>
          From the idea dump, I moved into a <strong>Crazy 8</strong> session, a
          design sprint activity. I sketched{" "}
          <strong>8 variations in 8 minutes</strong> to rapidly explore
          different solutions without overthinking.
        </p>
        <p>
          The fast pace forced me to <em>prioritize bold concepts</em> over
          polish. The outcome was a set of <strong>visual directions</strong>{" "}
          that revealed new possibilities for layouts, fit tools, and
          representation.
        </p>
        <figure className="gallery__item">
          <img
            src={crazy8}
            alt="Crazy 8 Sketches"
            loading="lazy"
            className="img-rotate-90"
          />
          <figcaption>
            Crazy 8 sketches – fast exploration of possibilities
          </figcaption>
        </figure>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="outcome-snapshot">
        <h4>Why This Phase Was Important</h4>
        <p>
          Ideation is where <strong>divergent thinking</strong> happens. By
          reframing challenges into HMW questions, dumping every idea, and
          running Crazy 8, I ensured the project had{" "}
          <strong>a wide creative pool</strong> before narrowing down.
        </p>
        <p>
          This protected the project from tunnel vision and guaranteed that when
          we moved to prototyping, we weren’t just building the first solution —
          but the <em>best solution</em> grounded in empathy and creativity.
        </p>
      </section>
    </div>
  );
}
