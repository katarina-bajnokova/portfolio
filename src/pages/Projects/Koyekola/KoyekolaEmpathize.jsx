import "./KoyekolaEmpathize.scss";
import em1 from "@/assets/images/Koyekola/em3.webp";
import em2 from "@/assets/images/Koyekola/em4.webp";
import SandrinePersona from "./SandrinePersona";
import SandrineUserStories from "./SandrineUserStories";
import SandrineJourneyMap from "./SandrineJourneyMap";

export default function KoyekolaEmpathize() {
  return (
    <div className="empathize-tab">
      {/* Introduction */}
      <section className="research-intro">
        <h2>Primary Research</h2>
        <p>
          To ground Koyekola in real user needs, I conducted{" "}
          <strong>qualitative research</strong> with members of the Congolese
          diaspora—both <strong>adults</strong> (parents, educators, community
          leaders) and <strong>youth</strong> (second and third generation).
        </p>
        <p>
          This helped me understand their <em>relationship with Lingala</em>,
          challenges in maintaining the language abroad, and expectations for
          modern learning tools. Findings were synthesized into{" "}
          <strong>two empathy maps</strong>—adults and youth.
        </p>
      </section>

      {/* Empathy Maps */}
      <h2>Empathy Maps</h2>
      <div className="empathy-maps">
        <img src={em1} alt="Empathy Map – Adults" loading="lazy" />
        <img src={em2} alt="Empathy Map – Youth" loading="lazy" />
      </div>

      {/* Key Insights */}
      <section className="empathy-findings">
        <h2>Insights</h2>

        <h3>Shared Themes</h3>
        <div className="insight-line">
          Lingala is tied to identity and pride.
        </div>
        <div className="insight-line">
          Concern about language loss in the diaspora.
        </div>
        <div className="insight-line">
          Interest in digital and community-driven solutions.
        </div>

        <h3>Differences</h3>
        <div className="insight-line">
          <strong>Adults:</strong> Focused on children, community, and
          structured teaching; often proactive.
        </div>
        <div className="insight-line">
          <strong>Youth:</strong> Concerned with shame, peer perception, and
          gamified learning; often reactive.
        </div>
      </section>

      {/* Design Implication */}
      <div className="design-implication">
        <strong>Design implication:</strong> Koyekola must balance{" "}
        <em>structured family learning</em> with{" "}
        <em>gamified social learning</em>. Connecting both to a broader
        mission—supporting schools in Kinshasa— creates cultural impact that
        unites generations.
      </div>

      {/* Persona */}
      <section className="persona-findings">
        <h2>From Research to Persona</h2>
        <p>
          Insights were distilled into an <strong>aggregate persona</strong> to
          guide design decisions. This helped keep the focus on the recurring
          needs across adults and youth.
        </p>

        <h3>Core Pain Points</h3>
        <div className="insight-line">
          Lack of accessible and engaging learning resources.
        </div>
        <div className="insight-line">Shame, guilt, and social pressure.</div>
        <div className="insight-line">Weak intergenerational transmission.</div>
        <div className="insight-line">Disconnection from cultural roots.</div>
      </section>

      {/* Persona Component */}
      <SandrinePersona />

      {/* Selected User Stories */}
      <SandrineUserStories />

      {/* Journey Map */}
      <SandrineJourneyMap />
    </div>
  );
}
