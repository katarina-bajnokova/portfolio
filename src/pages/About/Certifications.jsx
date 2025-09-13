import { useEffect } from "react";
import "./Certifications.scss";

const certs = [
  { title: "Google — Start the UX Design Process", date: "Sep 2025" },
  { title: "Cosden Solutions — React Project", date: "Jul 2025" },
  { title: "92learns — Adobe Illustrator Mega Course", date: "Sep 2024" },
  { title: "92learns — Adobe Photoshop Mega Course", date: "Jun 2024" },
  { title: "Google — Bits & Bytes of Computer Networking", date: "Mar 2024" },
  { title: "Google — Technical Support Fundamentals", date: "Feb 2024" },
  { title: "Google — Foundations of UX Design", date: "Dec 2023" },
  {
    title: "University of London — Refugees in the 21st Century",
    date: "Jun 2020",
  },
  { title: "Microsoft — Office Specialist: Excel Associate", date: "Jun 2020" },
];

export default function Certifications() {
  useEffect(() => {
    const cards = document.querySelectorAll(".cert-card");
    cards.forEach((card, i) => {
      card.style.setProperty("--i", i);
    });
  }, []);

  return (
    <section className="certifications">
      <h2>Certifications</h2>
      <div className="certifications__grid">
        {certs.map((cert, i) => (
          <div key={i} className="cert-card">
            <p className="cert-title">{cert.title}</p>
            <span className="cert-date">{cert.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
