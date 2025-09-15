import "./Test.scss";

export default function Test() {
  return (
    <div className="test">
      <section className="project-section">
        <h2>Test – Learning from Real Users</h2>
        <p>
          To validate the <strong>hi-fi prototype</strong>, I ran usability
          testing with <strong>5 participants</strong> at a bookstore café in
          Brussels. Each completed key shopping tasks to reveal{" "}
          <em>delightful moments</em> and <em>pain points</em>.
        </p>
      </section>

      <section className="project-section step">
        <h3>Methodology</h3>
        <div className="highlight-box">
          <p>
            <strong>Location:</strong> Bookstore café in Brussels
          </p>
          <p>
            <strong>Participants:</strong> 5 shoppers (3 women, 2 men, aged
            22–45)
          </p>
          <p>
            <strong>Tasks:</strong> Find jeans, check Fit Guide, add to basket,
            explore Lookbook
          </p>
          <p>
            <strong>Duration:</strong> 7–10 minutes per participant
          </p>
        </div>
      </section>

      <section className="project-section step">
        <h3>What Worked</h3>
        <div className="highlight-box">
          <ul>
            <li>
              <strong>Fit Guide:</strong> 4/5 users felt more confident in
              selecting size.
            </li>
            <li>
              <strong>Lookbook:</strong> Inspired users — “It feels like I have
              a stylist on my phone.”
            </li>
            <li>
              <strong>Navigation:</strong> Smooth browsing and basket flow.
            </li>
          </ul>
        </div>
      </section>

      <section className="project-section step">
        <h3>Areas for Improvement</h3>
        <div className="highlight-box">
          <ul>
            <li>
              <strong>Fit Quiz:</strong> Felt “too abstract” — visuals
              suggested.
            </li>
            <li>
              <strong>Basket visibility:</strong> 2 users missed the sticky
              button initially.
            </li>
            <li>
              <strong>Lookbook diversity:</strong> Request for{" "}
              <em>more varied body types</em> in styling.
            </li>
          </ul>
        </div>
      </section>

      <section className="project-section step">
        <h3>Key Insights</h3>
        <blockquote>
          “This feels easier than browsing a normal fashion site — but the size
          quiz should show pictures, not just words.”
        </blockquote>
        <div className="highlight-box">
          <ul>
            <li>
              <strong>Clarity builds confidence:</strong> Visuals make tools
              like the Fit Quiz more intuitive.
            </li>
            <li>
              <strong>Representation matters:</strong> Diversity in imagery is
              noticed — and missed when absent.
            </li>
            <li>
              <strong>Micro-interactions count:</strong> Basket button needs
              stronger cues.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
