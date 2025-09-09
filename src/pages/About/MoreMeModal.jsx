import "./MoreMeModal.scss";

export default function MoreMeModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
      >
        <button className="modal-close" onClick={onClose}>
          ✖
        </button>

        <h2>Meet the Human Behind the Pixels ✨</h2>

        <p>
          When I’m not busy designing or coding, you’ll usually find me with my
          head in a <strong>book</strong> — I’m equally into{" "}
          <em>
            non-fiction, educational deep dives, and the occasional guilty
            pleasure read
          </em>
          . 📚
        </p>

        <p>
          I’m also what you could call a <strong>water enthusiast</strong>. 🌊
          Oceans, lakes, rivers, swimming pools, spa & wellness centers — if it
          involves water, I’m there. Swimming is my ultimate reset button.
        </p>

        <p>
          Traveling and <strong>group activities</strong> keep me energized. I
          love{" "}
          <em>
            team buildings, interactive trainings, and collecting new
            certificates
          </em>
          . For me, learning should always be a mix of fun, collaboration, and a
          little adventure.
        </p>

        <p>
          Since the age of <strong>16</strong>, I’ve been working alongside my
          studies to support myself. It’s taught me{" "}
          <strong>responsibility, work ethic, and resilience</strong> — and that
          coffee is, in fact, a food group. ☕
        </p>

        <p>
          I thrive most in places where there’s a real sense of{" "}
          <strong>togetherness</strong> — openness, honesty, and teamwork that
          goes beyond the buzzwords. Environments where people genuinely support
          one another are where I do my best work.
        </p>

        <p>
          And yes, I know it’s <em>a bit early</em> to apply — I’d officially
          join in <strong>February next year</strong>. But I’m not a last-minute
          person. I’d rather{" "}
          <strong>
            secure my internship spot early, tick it off my to-do list
          </strong>
          , and then focus on showing up prepared and motivated when the time
          comes.
        </p>
      </div>
    </div>
  );
}
