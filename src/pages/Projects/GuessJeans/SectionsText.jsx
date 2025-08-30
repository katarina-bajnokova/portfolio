export function GoalsVision() {
  return (
    <section className="project-section">
      <h2>Goals & Vision</h2>
      <p>
        <strong>What I set out to do:</strong>
      </p>
      <ul>
        <li>
          <strong>Fit for the user</strong> — flip the narrative from “your body
          must fit the jeans” to “the jeans should fit you”. The experience
          should make people feel confident, not stressed.
        </li>
        <li>
          <strong>Inclusive & real</strong> — stop showing only model-perfect
          bodies. Real bodies, real photos, real guidance.
        </li>
      </ul>
      <p>
        <strong>Design pillars I kept checking against:</strong> empathy (speak
        like a helper, not a gatekeeper), clarity (don’t hide fit info), and
        credibility (proof from reviews, photos, and returns policy).
      </p>
      <p>
        <strong>Supporting goals:</strong>
      </p>
      <ul>
        <li>Make the flow feel trustworthy, calm, and smooth.</li>
        <li>Simplify the path from discovery to checkout.</li>
        <li>
          Add helpful tools (Fit Guide, Lookbook, genuine customer content) so
          decisions feel easier.
        </li>
      </ul>
    </section>
  );
}

export function PersonasIntro() {
  return (
    <section className="project-section">
      <h2>Personas</h2>
      <p>
        I turned the patterns into three personas that capture different body
        types, goals, and emotions around buying denim. These helped me
        pressure-test decisions later in the flow—if a screen didn’t help at
        least two of them, I reworked it.
      </p>
    </section>
  );
}

export function JourneyMapsIntro() {
  return (
    <section className="project-section">
      <h2>Journey Maps</h2>
    </section>
  );
}

export function UserJourneysText() {
  return (
    <section className="project-section">
      <h2>User Journeys</h2>
      <p>
        I translated the insights into practical flows with guardrails
        (validation, empty states, and “escape hatches” like save-for- later) so
        the experience is resilient—not just pretty.
      </p>
      <p>
        <strong>I designed:</strong>
      </p>
      <ol>
        <li>
          <strong>Basic Purchase</strong> — browse, evaluate, add to cart,
          checkout (with size confirmation nudge).
        </li>
        <li>
          <strong>Create Profile</strong> — unlock personalization without
          friction (progressive sign-up).
        </li>
        <li>
          <strong>Find Your Fit</strong> — guided inputs/scan for a personal fit
          profile.
        </li>
        <li>
          <strong>Returns</strong> — clearer steps + messaging to rebuild trust
          fast.
        </li>
        <li>
          <strong>UGC Submission</strong> — share looks to grow an inclusive
          community.
        </li>
      </ol>
      <p>
        <strong>Acceptance criteria I checked:</strong> can users recover from
        mistakes, compare options quickly, and understand why a size is
        recommended? If not, the screen changed.
      </p>
    </section>
  );
}

export function NavigationText() {
  return (
    <section className="project-section">
      <h2>Navigation</h2>
      <p>
        I restructured navigation so the essentials stay simple (browse, basket,
        checkout) while new features (Fit Guide, Lookbook, My Fit Profile)
        directly answer the biggest pain points.
      </p>
      <p>
        <strong>Key sections</strong>
      </p>
      <p>
        <strong>Home</strong> — personal picks, a “Find Your Fit Style” quiz
        banner, featured bundles, and new arrivals.
      </p>
      <p>
        <strong>Search</strong> — browse all, filter, and actually find things
        quickly. Sticky filters + saved filters for repeat visits.
      </p>
      <p>
        <strong>Lookbook</strong> — real people, real outfits, likes and shares;
        posts include size worn + fit notes.
      </p>
      <p>
        <strong>Basket</strong> — clear summary before checkout, with inline
        size guidance if confidence looks low.
      </p>
      <p>
        <strong>Profile</strong> — My Fit Profile, favourites, returns,
        payments, and support.
      </p>
      <p>
        The goal: less friction, more confidence, and space for authentic
        content. IA choices were tested against “can I get back to what I was
        doing in one tap?”
      </p>
    </section>
  );
}

export function BrandingText() {
  return (
    <section className="project-section">
      <h2>Branding &amp; Style Guide</h2>
      <p>
        I created a small but purposeful style system for the prototype— enough
        to be consistent without slowing iteration.
      </p>
      <p>
        <strong>Included:</strong>
      </p>
      <ul>
        <li>Logo variations (color and mono)</li>
        <li>Practical color palette with accessible contrast</li>
        <li>Typographic hierarchy that reads fast</li>
        <li>Moodboard focused on real-body photography and denim textures</li>
      </ul>
      <p>
        It keeps the Guess vibe, but with a more inclusive, modern tone. I also
        defined motion rules (200–250ms ease-out) for tooltips, toasts, and
        add-to-cart so the UI feels responsive but not jumpy.
      </p>
    </section>
  );
}

export function WireframesText() {
  return (
    <section className="project-section">
      <h2>Low-Fidelity Wireframes</h2>
      <p>
        I sketched the core structure first to validate flows before investing
        in polish. Wireframes covered phone-first layouts, with a simple tablet
        breakpoint to check layout stability.
      </p>
      <p>
        <strong>Focus areas:</strong>
      </p>
      <ul>
        <li>Clear movement across home, discovery, basket, and profile.</li>
        <li>Fit-first entry with “Find Your Fit”.</li>
        <li>Space for authentic photos and fit information.</li>
        <li>
          Early testing of checkout and profile steps (field order, error
          states, and recovery).
        </li>
      </ul>
      <p>
        This made sure the experience supported the real goals: find a pair that
        fits, feel represented, and check out with confidence.
      </p>
    </section>
  );
}

export function AfterThoughts() {
  return (
    <section className="project-section">
      <h2>After Thoughts</h2>
      <p>
        This project taught me how much confidence impacts conversion. Centering
        real bodies and clearer guidance changed the vibe from “please fit me”
        to “these will fit me”. I also got sharper at designing recovery paths
        (undo, edit, save-for-later) so users don’t feel punished for exploring.
      </p>
    </section>
  );
}

export function FutureImprovements() {
  return (
    <section className="project-section">
      <h2>Future Improvements &amp; Suggestions</h2>
      <ul>
        <li>
          <strong>AI fit predictions:</strong> keep learning from scans,
          reviews, and returns to improve recommendations over time. Measure
          lift in size-confidence and return rate.
        </li>
        <li>
          <strong>Virtual try-on:</strong> a light AR layer so people can
          preview length and silhouette; test against drop-off on PDP.
        </li>
        <li>
          <strong>Richer Lookbook filters:</strong> filter by body type, height,
          and common fit issues; track filter usage vs. add-to- cart.
        </li>
        <li>
          <strong>Personalized bundles:</strong> suggest full outfits based on
          the user’s Fit Profile; A/B test against single-item carts.
        </li>
        <li>
          <strong>Sustainability:</strong> highlight eco-friendly denim lines
          and transparent factory info; show impact badges on PDP.
        </li>
      </ul>
    </section>
  );
}
