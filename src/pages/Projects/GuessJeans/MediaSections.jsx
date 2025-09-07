import Gallery from "./Gallery";

export function ResearchBoard({ images }) {
  return (
    <Gallery
      className="gallery--research"
      title="" // remove heading
      images={images}
      note="Sticky-note clustering, interview notes, and a quick heuristic review."
      min={800}
    />
  );
}

/* Personas: larger */
export function PersonasGallery({ images }) {
  return (
    <Gallery
      className="gallery--personas"
      title=""
      images={images}
      note=""
      min={800}
      cols={2}
    />
  );
}

/* Journey maps: keep layout but can still override if needed */
export function JourneyMapsGallery({ images }) {
  return <Gallery title="" images={images} note="" min={900} cols={1} />;
}

/* User journey: keep layout */
export function UserJourneyGallery({ images }) {
  return <Gallery title="" images={images} note="" min={900} cols={1} />;
}

/* Navigation: larger */
export function NavigationGallery({ images }) {
  return (
    <Gallery
      className="gallery--navigation"
      title=""
      images={images}
      note=""
      min={800}
    />
  );
}

/* Branding: larger */
export function BrandingGallery({ images }) {
  return (
    <Gallery
      className="gallery--branding"
      title="Branding System"
      images={images}
      note=""
      min={600}
    />
  );
}

/* Lo-fi wireframes: larger */
export function WireframesGallery({ images }) {
  return (
    <Gallery
      className="gallery--lofi"
      title="Wireframes (Lo-Fi)"
      images={images}
      note=""
      min={500}
    />
  );
}

/* Hi-fi prototype videos: smaller */
export function HiFiPrototype({ videos }) {
  return (
    <section className="project-section hifi-prototype">
      <h2>High-Fidelity Prototype</h2>

      <h3 className="h4">Bodytype Scanning</h3>
      <p>
        A lightweight body scan/input creates a Fit Profile. From there,
        recommendations match waist-to-hip ratio, thigh fit, and stretch, so
        you’re not guessing sizes anymore. I used progressive disclosure and
        inline help to keep the flow non-intimidating.
      </p>

      <div
        className="gallery__grid"
        data-cols={1}
        style={{ ["--min"]: "320px" }}
      >
        <figure className="gallery__item">
          <video
            className="gallery__video"
            src={videos.hifiScan}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </figure>
      </div>

      <h3 className="h4">Lookbook Feature</h3>
      <p>
        A community-driven lookbook shows jeans on real bodies with size worn
        and fit notes. People can like, share, and upload their own looks — it
        builds trust way faster than studio shots. To prevent spam, the upload
        flow bakes in simple moderation and clear posting rules.
      </p>

      <div
        className="gallery__grid"
        data-cols={1}
        style={{ ["--min"]: "320px" }}
      >
        <figure className="gallery__item">
          <video
            className="gallery__video"
            src={videos.hifiLb}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </figure>
      </div>
    </section>
  );
}
