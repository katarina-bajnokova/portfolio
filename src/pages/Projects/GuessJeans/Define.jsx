import "./Define.scss";
import {
  FaBolt,
  FaQuestionCircle,
  FaBullseye,
  FaLightbulb,
  FaGlobe,
} from "react-icons/fa";

export default function Define() {
  return (
    <div className="define define-cards">
      <div className="cards-grid">
        <div className="card">
          <div className="card-header">
            <FaBolt className="card-icon" />
            <h3>Problem Statement</h3>
          </div>
          <p>
            Shoppers face <strong>inconsistent denim sizing</strong>, lack of
            representation in product images, and minimal guidance on fit. This
            leads to hesitation, frustration, and frequent returns.
          </p>
        </div>

        <div className="card">
          <div className="card-header">
            <FaQuestionCircle className="card-icon" />
            <h3>How Might We</h3>
          </div>
          <p>
            How might we <strong>simplify denim shopping</strong> so customers
            feel confident in their fit, represented in visuals, and supported
            throughout the journey?
          </p>
        </div>

        <div className="card">
          <div className="card-header">
            <FaBullseye className="card-icon" />
            <h3>Goal Statement</h3>
          </div>
          <p>
            Create an <strong>inclusive, seamless shopping experience</strong>{" "}
            that boosts fit confidence, reduces returns, and strengthens trust
            in the Guess brand.
          </p>
        </div>

        <div className="card">
          <div className="card-header">
            <FaLightbulb className="card-icon" />
            <h3>Hypothesis Statement</h3>
          </div>
          <p>
            If we provide <strong>fit confidence tools</strong>, authentic
            visuals of diverse body types, and clear sizing guidance, shoppers
            will purchase more confidently and return fewer items.
          </p>
        </div>

        <div className="card">
          <div className="card-header">
            <FaGlobe className="card-icon" />
            <h3>Value Proposition</h3>
          </div>
          <p>
            Guess will stand out by offering a{" "}
            <strong>modern, confidence-driven denim experience</strong> that
            combines fashion with inclusivity—bridging trust, style, and brand
            loyalty.
          </p>
        </div>
      </div>
    </div>
  );
}
