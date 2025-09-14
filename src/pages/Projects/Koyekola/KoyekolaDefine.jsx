import "./KoyekolaDefine.scss";
import {
  FaBolt,
  FaQuestion,
  FaBullseye,
  FaLightbulb,
  FaGlobe,
} from "react-icons/fa";

export default function KoyekolaDefine() {
  const blocks = [
    {
      icon: <FaBolt />,
      title: "Problem Statement",
      text: "Second-generation Lingala speakers, especially children, lack engaging ways to learn the language. Existing tools are outdated or too academic, leading to disengagement and weakening cultural ties.",
    },
    {
      icon: <FaQuestion />,
      title: "How Might We",
      text: "How might we create a learning experience that feels playful and modern, while inspiring diaspora youth to proudly use Lingala in daily life?",
    },
    {
      icon: <FaBullseye />,
      title: "Goal Statement",
      text: "Design a culturally authentic, game-like platform that motivates consistent practice, strengthens family bonds, and builds lasting pride in heritage.",
    },
    {
      icon: <FaLightbulb />,
      title: "Hypothesis Statement",
      text: "If we provide an interactive, gamified Lingala learning app, children and youth will practice more regularly, use Lingala with family, and feel more connected to their culture.",
    },
    {
      icon: <FaGlobe />,
      title: "Value Proposition",
      text: "Koyekola makes Lingala fun and relevant through mini-games, storytelling, and community features—bridging generations and ensuring the language thrives.",
    },
  ];

  return (
    <section className="project-section koyekola-define">
      <h2>Define</h2>
      <div className="define__grid">
        {blocks.map((block, i) => (
          <div className="define__card" key={i}>
            <div className="define__icon">{block.icon}</div>
            <h3>{block.title}</h3>
            <p>{block.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
