import { ResearchBoard } from "./MediaSections";
import { research } from "./guessAssets";
import "./Empathize.scss";

import emaPersona from "@/assets/images/Guess/emaPersona.webp";
import emaUJ from "@/assets/images/Guess/emaUJ.webp";
import emaEM from "@/assets/images/Guess/emmaEM.png";
import US1 from "@/assets/images/Guess/US1.webp";
import US2 from "@/assets/images/Guess/US2.webp";

export default function Empathize() {
  return (
    <div className="empathize">
      <section className="project-section">
        <h2>Empathize – Understanding Users & Context</h2>
        <p>
          The empathize phase focused on{" "}
          <strong>immersing in the denim shopping experience</strong> and
          identifying both functional and emotional user needs. The process was
          structured into five steps:{" "}
          <em>
            research immersion, persona creation, empathy mapping, user journeys
          </em>
          , and <em>user stories</em>.
        </p>
      </section>

      <section className="project-section step">
        <div className="step-label">Step 1</div>
        <h3>Research Immersion</h3>
        <p>
          A <strong>research board</strong> consolidated sticky notes, interview
          insights, heuristic reviews, and competitor benchmarks, serving as a
          constant reference throughout the project.
        </p>
        <div className="highlight-box">
          <h4>Key Insights</h4>
          <ul>
            <li>
              <strong>Inconsistent sizing</strong> created hesitation and
              frequent returns.
            </li>
            <li>
              <strong>Lack of body diversity</strong> reduced trust in product
              photography.
            </li>
            <li>
              <strong>Limited fit guidance</strong> made decisions stressful and
              time-consuming.
            </li>
          </ul>
        </div>
        <ResearchBoard images={research} />
      </section>

      <section className="project-section step">
        <div className="step-label">Step 2</div>
        <h3>Persona Creation</h3>
        <p>
          To humanize findings, I developed multiple personas. For the
          portfolio, I highlight <strong>Ema</strong>, representing{" "}
          <strong>curvy body types and underrepresented shoppers</strong>.
        </p>
        <figure className="gallery__item">
          <img src={emaPersona} alt="Persona – Ema" loading="lazy" />
          <figcaption>Persona – Ema</figcaption>
        </figure>
        <p>
          Ema’s frustrations with <strong>sizing inconsistencies</strong> and{" "}
          <strong>lack of representation</strong> highlighted the emotional
          stakes of denim shopping.
        </p>
      </section>

      <section className="project-section step">
        <div className="step-label">Step 3</div>
        <h3>Empathy Mapping</h3>
        <p>
          Empathy maps captured{" "}
          <strong>what users say, think, feel, and do</strong>, turning Ema’s
          challenges into a clear emotional landscape.
        </p>
        <figure className="gallery__item">
          <img src={emaEM} alt="Empathy Map – Ema" loading="lazy" />
          <figcaption>Empathy Map – Ema</figcaption>
        </figure>
        <p>
          The process revealed a gap between <strong>desired feelings</strong>{" "}
          (confidence, empowerment) and the reality (confusion, frustration).
        </p>
      </section>

      <section className="project-section step">
        <div className="step-label">Step 4</div>
        <h3>User Journey</h3>
        <p>
          I mapped Ema’s <strong>shopping journey</strong> from browsing to
          purchase and returns, identifying confidence breakdowns and potential
          design interventions.
        </p>
        <figure className="gallery__item">
          <img src={emaUJ} alt="User Journey – Ema" loading="lazy" />
          <figcaption>User Journey – Ema</figcaption>
        </figure>
        <div className="highlight-box">
          <h4>Opportunities</h4>
          <ul>
            <li>
              Add <strong>fit confidence tools</strong> to reduce hesitation.
            </li>
            <li>
              Showcase <strong>diverse body types</strong> with authentic
              photos.
            </li>
            <li>
              Provide <strong>clear sizing guidance</strong> and supportive
              microcopy.
            </li>
          </ul>
        </div>
      </section>

      <section className="project-section step">
        <div className="step-label">Step 5</div>
        <h3>User Stories</h3>
        <p>
          Insights were translated into <strong>user stories</strong> —
          practical statements defining what users need and why.
        </p>
        <div className="gallery__grid" data-cols={2}>
          <figure className="gallery__item">
            <img src={US1} alt="User Story 1" loading="lazy" />
            <figcaption>
              Style-conscious professional → needs jeans that fit curves without
              gaps.
            </figcaption>
          </figure>
          <figure className="gallery__item">
            <img src={US2} alt="User Story 2" loading="lazy" />
            <figcaption>
              Working mother → needs comfort and flexibility.
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}
