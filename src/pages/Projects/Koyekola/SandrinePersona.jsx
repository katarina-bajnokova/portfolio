import persona from "@/assets/images/Koyekola/persona1.webp";
import "./SandrinePersona.scss";

export default function SandrinePersona() {
  return (
    <section className="persona-image">
      <h2>Aggregate Persona</h2>
      <img src={persona} alt="Aggregate Persona profile" loading="lazy" />

      <div className="persona-narrative">
        <h3>Meet Sandrine</h3>
        <p>
          Sandrine Ngalula, 24, is a student in Brussels and part of the
          Congolese diaspora. She understands Lingala but struggles to speak it
          confidently, leaving her feeling distant from her cultural roots. She
          wants modern, interactive tools that make language learning engaging
          and relevant to her daily life.
        </p>
      </div>

      <div className="persona-insights">
        <h3>Pains</h3>
        <ul>
          <li>Embarrassed when speaking Lingala with peers.</li>
          <li>Guilt when she cannot respond to grandparents.</li>
          <li>Learning resources feel outdated and boring.</li>
          <li>Disconnect between her digital life and heritage.</li>
        </ul>

        <h3>Gains</h3>
        <ul>
          <li>Confidence when speaking with family and peers.</li>
          <li>Reconnect with Congolese heritage emotionally.</li>
          <li>Fun, mobile-first learning that fits her lifestyle.</li>
        </ul>

        <h3>Jobs To Be Done</h3>
        <ul>
          <li>
            <strong>Functional:</strong> Learn on-the-go with micro-lessons.
          </li>
          <li>
            <strong>Social:</strong> Participate confidently in events.
          </li>
          <li>
            <strong>Emotional:</strong> Reduce shame, build cultural pride.
          </li>
        </ul>

        <h3>Representative Use Cases</h3>
        <ul>
          <li>5-minute gamified vocab challenges during her commute.</li>
          <li>“Conversation prep” before visiting grandparents.</li>
        </ul>

        <h3>Key Questions</h3>
        <ul>
          <li>
            <strong>Who?</strong> Sandrine, 24, second-generation Congolese.
          </li>
          <li>
            <strong>Why?</strong> To reconnect with roots and reduce shame.
          </li>
          <li>
            <strong>How?</strong> Through a gamified, mobile-first app.
          </li>
        </ul>
      </div>
    </section>
  );
}
