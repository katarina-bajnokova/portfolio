import "./Prototype.scss";
import storyboardFull from "@/assets/images/Guess/1storyboard.jpg";
import storyboardCloseup from "@/assets/images/Guess/2storyboard.jpg";
import paperWireframe from "@/assets/images/Guess/paperWireframe.jpg";
import hifi1 from "@/assets/images/Guess/hifi1.svg";

import { WireframesGallery, HiFiPrototype } from "./MediaSections";
import { lofi, videos } from "./guessAssets";

export default function Prototype() {
  const filteredLofi = lofi.filter(
    (img) => !img.includes("2lofi.png") && !img.includes("3lofi.png")
  );

  return (
    <div className="prototype">
      {/* OVERVIEW */}
      <section className="project-section">
        <h2>Prototype – Bringing Ideas to Life</h2>
        <p>
          In the <strong>Prototype phase</strong>, abstract ideas were turned
          into <strong>tangible, testable outputs</strong>. Each layer of
          fidelity served a purpose: storyboards for flow, paper for speed,
          wireframes for structure, and hi-fi for realism.
        </p>
      </section>

      {/* STEP 1 */}
      <section className="project-section step">
        <div className="step-label">Step 1</div>
        <h3>Storyboard</h3>
        <p>
          I started with <strong>storyboards</strong> to visualize the
          end-to-end journey and ensure the design aligned with user needs.
        </p>
        <figure className="gallery__item">
          <img src={storyboardFull} alt="Storyboard – Full Flow" />
          <figcaption>Storyboard – mapping the overall experience</figcaption>
        </figure>
        <figure className="gallery__item">
          <img src={storyboardCloseup} alt="Storyboard – Close-up" />
          <figcaption>Storyboard close-up – focusing on key moments</figcaption>
        </figure>
      </section>

      {/* STEP 2 */}
      <section className="project-section step">
        <div className="step-label">Step 2</div>
        <h3>Paper Wireframes</h3>
        <p>
          I sketched <strong>4 variations</strong> of the homepage to explore
          different layouts quickly before moving digital.
        </p>
        <figure className="gallery__item">
          <img src={paperWireframe} alt="Paper Wireframes – Homepage Options" />
          <figcaption>Paper wireframes – 4 homepage explorations</figcaption>
        </figure>
      </section>

      {/* STEP 3 */}
      <section className="project-section step">
        <div className="step-label">Step 3</div>
        <h3>Digital Wireframes (Lo-Fi)</h3>
        <p>
          I translated sketches into <strong>digital wireframes</strong> to test
          navigation, hierarchy, and early usability.
        </p>
        <WireframesGallery images={filteredLofi} />
      </section>

      {/* STEP 4 */}
      <section className="project-section step">
        <div className="step-label">Step 4</div>
        <h3>High-Fidelity Prototype</h3>
        <p>
          Finally, I built a <strong>hi-fi prototype</strong> simulating the
          real shopping experience with inclusive imagery, interactive fit
          tools, and a community-driven lookbook.
        </p>

        <figure className="gallery__item">
          <img src={hifi1} alt="Hi-Fi Prototype – Homepage" />
          <figcaption>Hi-fi prototype – homepage design</figcaption>
        </figure>

        <HiFiPrototype videos={videos} />
      </section>
    </div>
  );
}
