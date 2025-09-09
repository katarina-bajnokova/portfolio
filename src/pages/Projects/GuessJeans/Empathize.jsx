import { ResearchBoard } from "./MediaSections";
import { research } from "./guessAssets";
import "./Empathize.scss";

// Import curated showcase images
import emaPersona from "@/assets/images/Guess/emaPersona.webp";
import emaUJ from "@/assets/images/Guess/emaUJ.webp";
import emaEM from "@/assets/images/Guess/emmaEM.png";
import US1 from "@/assets/images/Guess/US1.webp";
import US2 from "@/assets/images/Guess/US2.webp";
import US3 from "@/assets/images/Guess/US3.webp";
import US4 from "@/assets/images/Guess/US4.webp";

export default function Empathize() {
  return (
    <div className="empathize">
      {/* OVERVIEW */}
      <section className="project-section">
        <h2>Empathize – Understanding Users & Context</h2>
        <p>
          The empathize phase was about{" "}
          <strong>
            immersing myself fully in the denim shopping experience
          </strong>{" "}
          and capturing both functional and emotional user needs. It was not
          just about research on paper—it was about{" "}
          <strong>
            living the frustrations, desires, and motivations of real shoppers
          </strong>
          .
        </p>
        <p>
          To keep myself grounded, I structured the process into five clear
          layers:{" "}
          <em>
            research immersion, persona creation, empathy mapping, user journeys
          </em>
          , and finally <em>user stories</em> that transformed observations into
          actionable design opportunities.
        </p>
      </section>

      {/* RESEARCH BOARD */}
      <section className="project-section">
        <h3>Step 1 – Research Immersion</h3>
        <p>
          I created a <strong>research board on my wall</strong>, a living
          collage of sticky notes, interview quotes, heuristic breakdowns, and
          competitive benchmarks. This wasn’t just a board—it was{" "}
          <strong>a daily reminder of the problem I was solving</strong>.
        </p>
        <blockquote>
          “Walking past this board every day helped me
          <em> think like my users</em>, not like a designer behind a laptop.”
        </blockquote>

        <div className="highlight-box">
          <h4>Key Insights</h4>
          <ul>
            <li>
              <strong>Inconsistent sizing</strong> created hesitation and
              frequent returns.
            </li>
            <li>
              <strong>Lack of real-body representation</strong> reduced trust in
              product photos.
            </li>
            <li>
              <strong>Limited guidance</strong> on fit and style made decisions
              stressful and slow.
            </li>
          </ul>
        </div>

        <ResearchBoard images={research} />
      </section>

      {/* PERSONA */}
      <section className="project-section">
        <h3>Step 2 – Persona Creation</h3>
        <p>
          To humanize the data, I created multiple personas. For the portfolio,
          I’m showcasing <strong>Ema</strong>, a boutique owner from
          Johannesburg who represents{" "}
          <strong>curvy body types and underrepresented voices</strong>.
        </p>
        <figure className="gallery__item">
          <img src={emaPersona} alt="Persona – Ema" loading="lazy" />
          <figcaption>Persona example – Ema</figcaption>
        </figure>
        <p>
          Ema is confident, stylish, and knows what she wants—but the industry
          doesn’t always cater to her. Her frustrations with{" "}
          <strong>sizing inconsistencies</strong> and{" "}
          <strong>brands not showcasing diversity</strong> revealed the
          emotional stakes of denim shopping.
        </p>
      </section>

      {/* EMPATHY MAP */}
      <section className="project-section">
        <h3>Step 3 – Empathy Mapping</h3>
        <p>
          Empathy maps helped me dig into{" "}
          <strong>what users say, think, feel, and do</strong> across their
          journey. This process turned Ema’s frustrations and goals into a clear
          emotional landscape.
        </p>
        <figure className="gallery__item">
          <img src={emaEM} alt="Empathy Map – Ema" loading="lazy" />
          <figcaption>Empathy map – Ema</figcaption>
        </figure>
        <blockquote>
          Mapping emotions uncovered a critical gap between{" "}
          <strong>how users wanted to feel</strong> (empowered, stylish,
          represented) and what the experience delivered (confusion,
          frustration, self-doubt).
        </blockquote>
      </section>

      {/* USER JOURNEY */}
      <section className="project-section">
        <h3>Step 4 – User Journey</h3>
        <p>
          I mapped Ema’s <strong>shopping journey</strong> from browsing to
          purchase and, in some cases, returns. It was about{" "}
          <strong>capturing the highs and lows</strong>, seeing where confidence
          evaporated, and where design nudges could rebuild it.
        </p>
        <figure className="gallery__item">
          <img src={emaUJ} alt="User Journey – Ema" loading="lazy" />
          <figcaption>User journey – Ema</figcaption>
        </figure>

        <div className="highlight-box">
          <h4>Opportunities Identified</h4>
          <ul>
            <li>
              Introduce <strong>fit confidence tools</strong> to reduce
              hesitation.
            </li>
            <li>
              Showcase <strong>authentic photos</strong> of diverse body types.
            </li>
            <li>
              Provide <strong>clear, supportive microcopy</strong> around sizing
              & returns.
            </li>
          </ul>
        </div>
      </section>

      {/* USER STORIES */}
      <section className="project-section">
        <h3>Step 4 – User Journey</h3>
        <p>
          Finally, I translated insights into <strong>user stories</strong> —
          short, powerful statements describing what users need and why. These
          kept me focused on <strong>designing for value, not vanity</strong>.
        </p>

        <div className="gallery__grid" data-cols={1}>
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
              Mother balancing family/work → needs comfort and stretch.
            </figcaption>
          </figure>
          <figure className="gallery__item">
            <img src={US3} alt="User Story 3" loading="lazy" />
            <figcaption>
              Petite shopper → needs short inseam options to avoid oversized
              cuts.
            </figcaption>
          </figure>
          <figure className="gallery__item">
            <img src={US4} alt="User Story 4" loading="lazy" />
            <figcaption>
              General jeans shopper → wants an inclusive, stress-free flow
              online.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* OUTCOME SNAPSHOT */}
      <section className="outcome-snapshot">
        <h4>Why This Phase Mattered</h4>
        <p>
          The empathize phase was the <strong>beating heart</strong> of this
          project. It uncovered the emotional weight behind denim shopping — not
          just buying jeans, but{" "}
          <em>feeling represented, confident, and comfortable</em>.
        </p>
        <p>
          The outcome was a <strong>clear north star</strong>: to design a
          shopping experience that is inclusive, confidence-boosting, and
          friction-free. Every later decision built on this empathy-driven
          foundation.
        </p>
      </section>
    </div>
  );
}
