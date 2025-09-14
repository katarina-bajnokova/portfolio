import "./KoyekolaBranding.scss";
import mascotImg from "@/assets/images/Koyekola/mascot.webp";

export default function KoyekolaBranding() {
  const palettes = [
    {
      title: "Identity & Pride",
      colors: [
        { name: "Congo Blue", hex: "#00adef", meaning: "Unity, youth, future" },
        { name: "Golden Baobab", hex: "#ffd700", meaning: "Energy, hope" },
        {
          name: "Courage Red",
          hex: "#ce1126",
          meaning: "Strength, resilience",
        },
      ],
    },
    {
      title: "Nature & Heritage",
      colors: [
        {
          name: "Forest Green",
          hex: "#2e603d",
          meaning: "Lingala, cassava leaves, forests",
        },
        {
          name: "Terracotta Clay",
          hex: "#c65a30",
          meaning: "Earth, dance floors, pagne tones",
        },
        {
          name: "Deep River Blue",
          hex: "#243b6b",
          meaning: "Congo River, depth, heritage",
        },
      ],
    },
    {
      title: "Playful & Emotional",
      colors: [
        { name: "Papaya Peach", hex: "#ffb997", meaning: "Warm & fun" },
        {
          name: "Sunset Orange",
          hex: "#ff914d",
          meaning: "Joy, rhythm, dance",
        },
        { name: "Palm Mist", hex: "#bdd1b2", meaning: "Calm, balance" },
        {
          name: "River Mist",
          hex: "#dce9f5",
          meaning: "Light, fresh, digital background",
        },
      ],
    },
    {
      title: "Neutrals & Balance",
      colors: [
        {
          name: "Sand Ivory",
          hex: "#faf4e6",
          meaning: "Soft, cultural background",
        },
        { name: "Clay Dust", hex: "#b1ad9b", meaning: "Neutral text balance" },
        {
          name: "Ebony Bark",
          hex: "#1d1b16",
          meaning: "Strong text, grounding",
        },
      ],
    },
  ];

  return (
    <section className="project-section koyekola-branding">
      <h2>Colour Palette</h2>
      <p>
        The Koyekola brand identity blends <strong>colors</strong>,{" "}
        <strong>typography</strong>, and a <strong>mascot</strong> to create a
        playful yet culturally rooted experience.
      </p>

      {palettes.map((group, i) => (
        <div key={i} className="palette-group">
          <h3>{group.title}</h3>
          <div className="color-row">
            {group.colors.map((c, j) => (
              <div className="color-card" key={j}>
                <div
                  className="color-swatch"
                  style={{ backgroundColor: c.hex }}
                ></div>
                <h4>{c.name}</h4>
                <p className="hex">{c.hex}</p>
                <p className="meaning">{c.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="typography-system">
        <h2>Typography</h2>
        <p>
          Koyekola’s typography combines <strong>Poppins</strong> (headings),{" "}
          <strong>Nunito</strong> (body), and <strong>DM Serif Display</strong>{" "}
          (cultural accent). This balance ensures modern readability, playful
          warmth, and heritage depth.
        </p>

        <div className="type-samples">
          <div className="type-card">
            <h3>Poppins – Headings</h3>
            <p className="type-heading">Learning Lingala is Playful & Modern</p>
          </div>
          <div className="type-card">
            <h3>Nunito – Body</h3>
            <p className="type-body">
              Easy to read, approachable, and balanced for instructions and
              longer practice tasks inside the app.
            </p>
          </div>
          <div className="type-card">
            <h3>DM Serif Display – Accent</h3>
            <p className="type-accent">
              “Heritage is alive in every word we speak.”
            </p>
          </div>
        </div>
      </div>

      <div className="mascot-system">
        <h2>Mascot — The Okapi</h2>
        <p>
          The <strong>Okapi</strong>, Congo’s national animal, was chosen as
          Koyekola’s mascot. It is unique, gentle, and deeply tied to Congolese
          identity, making it the perfect cultural ambassador for language
          learning.
        </p>

        <div className="mascot-visual">
          <div className="mascot-illustration">
            <img src={mascotImg} alt="Koyekola Okapi Mascot" />
          </div>
        </div>
      </div>
    </section>
  );
}
