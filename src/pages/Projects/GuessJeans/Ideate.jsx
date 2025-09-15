import "./Ideate.scss";
import ideaDump from "@/assets/images/Guess/ideaDUMP.jpg";
import crazy8 from "@/assets/images/Guess/crazy8.jpg";
import branding from "@/assets/images/Guess/branding.svg";

export default function Ideate() {
  return (
    <div className="ideate">
      <section className="project-section">
        <h2>Ideate – Expanding Possibilities</h2>
        <p>
          In the <strong>Ideate phase</strong>, I shifted from defining
          challenges to <strong>generating creative directions</strong>. Each
          step helped expand solutions while staying tied to user needs.
        </p>
      </section>

      <section className="project-section step">
        <div className="step-label">Step 1</div>
        <h3>Goal Statements</h3>
        <blockquote>
          The Guess Jeans redesign will make denim shopping simple, inclusive,
          and confidence-driven by providing tools like the{" "}
          <strong>Fit Guide</strong>, <strong>Fit Quiz</strong>,{" "}
          <strong>Lookbook</strong>, and <strong>Body Scan</strong> that adapt
          to different body types and style needs.
        </blockquote>
      </section>

      <section className="project-section step">
        <div className="step-label">Step 2</div>
        <h3>How Might We Questions</h3>
        <ul>
          <li>HMW help shoppers find jeans that fit their body type?</li>
          <li>HMW make shopping feel empowering instead of frustrating?</li>
          <li>HMW showcase inclusive models so customers feel represented?</li>
          <li>HMW reduce returns by guiding users to the right fit?</li>
        </ul>
      </section>

      <section className="project-section step">
        <div className="step-label">Step 3</div>
        <h3>Branding Foundation</h3>
        <p>
          A <strong>branding system</strong> was developed to ensure solutions
          aligned with Guess’s identity of inclusivity, boldness, and
          confidence.
        </p>
        <figure className="gallery__item">
          <img src={branding} alt="Guess Branding" loading="lazy" />
          <figcaption>Branding system for Guess Jeans redesign</figcaption>
        </figure>
      </section>

      <section className="project-section step">
        <div className="step-label">Step 4</div>
        <h3>Idea Dump</h3>
        <p>
          I ran an <strong>idea dump</strong> to capture as many potential
          solutions as possible, from practical tweaks to experimental concepts.
        </p>
        <figure className="gallery__item">
          <img
            src={ideaDump}
            alt="Idea Dump"
            loading="lazy"
            className="img-rotate-90"
          />
          <figcaption>
            Idea dump session – broad solution exploration
          </figcaption>
        </figure>
      </section>

      <section className="project-section step">
        <div className="step-label">Step 5</div>
        <h3>Crazy 8</h3>
        <p>
          Using the <strong>Crazy 8</strong> method, I sketched{" "}
          <strong>8 variations in 8 minutes</strong> to quickly explore multiple
          directions without overthinking.
        </p>
        <figure className="gallery__item">
          <img
            src={crazy8}
            alt="Crazy 8 Sketches"
            loading="lazy"
            className="img-rotate-90"
          />
          <figcaption>
            Crazy 8 sketches – rapid exploration of concepts
          </figcaption>
        </figure>
      </section>
    </div>
  );
}
