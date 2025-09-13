import "./KoyekolaEmpathize.scss";
import em1 from "@/assets/images/Koyekola/em3.webp";
import em2 from "@/assets/images/Koyekola/em4.webp";
import persona from "@/assets/images/Koyekola/persona1.webp";

export default function KoyekolaEmpathize() {
  return (
    <div className="empathize-tab">
      {/* Introduction */}
      <section className="research-intro">
        <h2>Primary Qualitative Research</h2>
        <p>
          To ground Koyekola in real user needs, I conducted{" "}
          <strong>primary qualitative research</strong> with members of the
          Congolese diaspora. This involved conversations, observations, and
          informal interviews with both <strong>adults</strong> (parents,
          community leaders, educators) and <strong>youth</strong> (second and
          third generation diaspora). The goal was to understand their{" "}
          <em>relationship with Lingala</em>, their struggles in maintaining the
          language abroad, and their expectations for modern learning tools.
        </p>
        <p>
          From this work, I synthesized insights into{" "}
          <strong>two aggregate empathy maps</strong>: one representing adults
          and one representing youth. These maps helped me visualize the
          different emotional drivers, needs, and barriers across generations.
        </p>
      </section>

      {/* Empathy Maps */}
      <h2>Empathy Maps</h2>
      <div className="empathy-maps">
        <img src={em1} alt="Empathy Map – Adults" loading="lazy" />
        <img src={em2} alt="Empathy Map – Youth" loading="lazy" />
      </div>

      {/* Findings */}
      <section className="empathy-findings">
        <h2>Insights from the Empathy Maps</h2>
        <h3>Key Overlaps</h3>
        <ul>
          <li>Both groups link Lingala to identity and heritage pride.</li>
          <li>Both are worried about language loss abroad.</li>
          <li>
            Both see value in digital/community solutions to preserve Lingala.
          </li>
        </ul>

        <h3>Key Differences</h3>
        <ul>
          <li>
            <strong>Adults →</strong> Focus on children, community, and
            structured teaching (schools, church, books, formal preservation).
          </li>
          <li>
            <strong>Youth →</strong> Focus on personal shame, peer perception,
            and gamified learning (apps, TikTok, music, fun tools).
          </li>
          <li>
            <strong>Adults →</strong> Often proactive (creating lessons, joining
            associations).
          </li>
          <li>
            <strong>Youth →</strong> Often reactive (feeling guilty, waiting for
            accessible tools).
          </li>
        </ul>

        <p className="design-implication">
          👉 <strong>Design implication:</strong> Koyekola needs to support both{" "}
          structured family-oriented resources <em>and</em> gamified social
          learning. By tying both together into a bigger mission (diaspora
          efforts supporting schools in Kinshasa), the product can create{" "}
          <strong>cultural impact that unites generations</strong>.
        </p>
      </section>

      {/* Persona Findings */}
      <section className="persona-findings">
        <h2>From Empathy Maps to Personas</h2>
        <p>
          Based on the empathy maps, research, and extracted insights, I created
          a variety of <strong>personas</strong> to capture the diversity of
          needs across the diaspora. For clarity, I developed an{" "}
          <strong>aggregate persona</strong> that combines the recurring themes
          from both adults and youth. This persona highlights the{" "}
          <em>main pain points</em> and allows me to keep user-centered design
          decisions aligned with the core challenges identified.
        </p>

        <h3>Four Main Pain Points</h3>
        <h4>1. Lack of Accessible and Engaging Learning Resources</h4>
        <p>
          Existing Lingala materials are old-fashioned, academic, or scattered.
          Parents lack structured teaching aids; youth want gamified,
          mobile-first experiences.
        </p>

        <h4>2. Shame, Guilt, and Social Pressure</h4>
        <p>
          Youth feel embarrassed speaking Lingala; families feel guilt when kids
          use other languages. At gatherings, everyone feels judged. 👉 This
          emotional barrier is as strong as the lack of resources.
        </p>

        <h4>3. Weak Intergenerational Transmission</h4>
        <p>
          Lingala risks fading within 1–2 generations. Children raised abroad
          prefer dominant host-country languages unless reinforced at home and
          in the community.
        </p>

        <h4>4. Disconnection from Homeland Roots</h4>
        <p>
          Both young and old diaspora feel culturally incomplete without
          Lingala. Parents fear their children will lose ties to their identity.
          There is a strong desire for tools that reconnect the diaspora with
          Congo.
        </p>
      </section>

      {/* Persona Image */}
      <section className="persona-image">
        <h2>Aggregate Persona</h2>
        <img src={persona} alt="Aggregate Persona profile" loading="lazy" />
      </section>
    </div>
  );
}
