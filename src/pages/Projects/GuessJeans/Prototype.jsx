import "./Prototype.scss";
import storyboardFull from "@/assets/images/Guess/1storyboard.jpg";
import storyboardCloseup from "@/assets/images/Guess/2storyboard.jpg";
import paperWireframe from "@/assets/images/Guess/paperWireframe.jpg";
import hifi1 from "@/assets/images/Guess/hifi1.svg";

import { WireframesGallery, HiFiPrototype } from "./MediaSections";
import { lofi, videos } from "./guessAssets";

export default function Prototype() {
  // ✅ Filter out unwanted lo-fi images
  const filteredLofi = lofi.filter(
    (img) => !img.includes("2lofi.png") && !img.includes("3lofi.png")
  );

  return (
    <div className="prototype">
      {/* OVERVIEW */}
      <section className="project-section">
        <h2>Prototype – Bringing Ideas to Life</h2>
        <p>
          After empathizing, defining, and ideating, the next natural step was{" "}
          <strong>prototyping</strong>. This phase was about turning abstract
          ideas into something <em>tangible and testable</em>. Prototypes let me
          check assumptions early, communicate flows visually, and refine
          usability before investing in polish.
        </p>
        <p>
          I worked in <strong>layers of fidelity</strong> — from storyboards and
          quick sketches, to paper wireframes, digital lo-fi drafts, and finally
          high-fidelity prototypes. Each step had a clear purpose:{" "}
          <em>
            storyboards for narrative flow, sketches for speed, wireframes for
            structure, and hi-fi for realism
          </em>
          .
        </p>
      </section>

      {/* STORYBOARD */}
      <section className="project-section">
        <h3>Step 1 – Storyboard</h3>
        <p>
          I started with <strong>storyboards</strong> to visualize Ema’s
          end-to-end journey in context. These sketches helped ensure the
          product connected smoothly with her motivations and frustrations.
        </p>
        <blockquote>
          Storyboards highlight <em>moments of delight and pain</em> in a
          narrative format, grounding design in lived experience.
        </blockquote>
        <figure className="gallery__item">
          <img src={storyboardFull} alt="Storyboard – Full Flow" />
          <figcaption>Storyboard – mapping the overall experience</figcaption>
        </figure>
        <figure className="gallery__item">
          <img src={storyboardCloseup} alt="Storyboard – Close-up" />
          <figcaption>
            Storyboard close-up – focusing on key emotional moments
          </figcaption>
        </figure>
      </section>

      {/* PAPER WIREFRAMES */}
      <section className="project-section">
        <h3>Step 2 – Paper Wireframes</h3>
        <p>
          To explore layout ideas quickly, I created{" "}
          <strong>paper wireframes</strong> of the homepage. I sketched{" "}
          <strong>4 variations</strong> side by side to test different entry
          points: hero banners, quizzes, curated looks, and product grids.
        </p>
        <div className="highlight-box">
          <p>
            Paper is <em>fast, cheap, and non-precious</em>, which encouraged me
            to think broadly before narrowing down.
          </p>
        </div>
        <figure className="gallery__item">
          <img src={paperWireframe} alt="Paper Wireframes – Homepage Options" />
          <figcaption>
            Paper wireframes – 4 quick explorations for the homepage
          </figcaption>
        </figure>
      </section>

      {/* DIGITAL LO-FI */}
      <section className="project-section">
        <h3>Step 3 – Digital Wireframes (Lo-Fi)</h3>
        <p>
          Next, I translated sketches into <strong>digital wireframes</strong>.
          These low-fidelity mockups focused on <em>structure and flow</em>,
          checking navigation, hierarchy, and early usability.
        </p>
        <blockquote>
          Keeping the design minimal ensured feedback stayed on{" "}
          <strong>layout and function</strong>, not visuals.
        </blockquote>
        <WireframesGallery images={filteredLofi} />
      </section>

      {/* HIGH-FI PROTOTYPE */}
      <section className="project-section">
        <h3>Step 4 – High-Fidelity Prototype</h3>
        <p>
          Finally, I built a <strong>hi-fi prototype</strong> to simulate the
          real shopping experience. This version included{" "}
          <em>
            inclusive imagery, interactive fit tools, and a community-driven
            lookbook
          </em>
          .
        </p>
        <figure className="gallery__item">
          <img src={hifi1} alt="Hi-Fi Prototype – Homepage" />
          <figcaption>Hi-fi prototype – homepage design exploration</figcaption>
        </figure>
        <HiFiPrototype videos={videos} />
      </section>

      {/* WHY THIS MATTERS */}
      <section className="outcome-snapshot">
        <h4>Why This Phase Was Important</h4>
        <p>
          Prototyping was the <strong>bridge between ideas and reality</strong>.
          Storyboards gave me a narrative lens, sketches gave me speed,
          wireframes gave me clarity, and hi-fi prototypes gave me realism.
        </p>
        <p>
          Without these layers, the design would have risked{" "}
          <em>misalignment with users, wasted effort, or overlooked flaws</em>.
          Instead, each step de-risked the project and ensured the final
          solution was rooted in empathy, structure, and inclusivity.
        </p>
      </section>
    </div>
  );
}
