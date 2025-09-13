import { useEffect, useRef, useState } from "react";
import "./Timeline.scss";

const jobs = [
  {
    date: "Jun 2025 – Present",
    company: "European Heat Pump Association",
    role: "Office Assistant",
    bullets: [
      "Supported daily operations and admin tasks",
      "Improved efficiency of reporting processes",
    ],
  },
  {
    date: "Oct 2024 – May 2025",
    company: "WHSmith",
    role: "Sales Assistant",
    bullets: [
      "Delivered customer service in a fast-paced environment",
      "Handled POS and stock management",
    ],
  },
  {
    date: "Apr 2023 – Aug 2024",
    company: "Keyence",
    role: "Telemarketer",
    bullets: [
      "Generated 100+ qualified leads/month across 3 markets",
      "Managed CRM workflows (Salesforce, HubSpot)",
    ],
  },
  {
    date: "Apr 2022 – Aug 2024",
    company: "Atelier 29",
    role: "Server & Bartender",
    bullets: [
      "Provided service at corporate & social events",
      "Worked in multilingual teams in Brussels",
    ],
  },
];

export default function Timeline() {
  const timelineRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const items = document.querySelectorAll(".timeline__item");

    const onScroll = () => {
      let current = 0;
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const triggerPoint = window.innerHeight * 0.7; // react earlier

        if (rect.top < triggerPoint) {
          current = index;
        }
      });

      // ✅ Ensure last item activates at page bottom
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        current = items.length - 1;
      }

      setActiveIndex(current);
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // run once on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-based progress line (sync with active circle)
  useEffect(() => {
    const onScroll = () => {
      if (!timelineRef.current) return;
      const items = document.querySelectorAll(".timeline__item");
      const active = document.querySelector(".timeline__item.active");

      if (active) {
        const rect = active.getBoundingClientRect();
        const timelineRect = timelineRef.current.getBoundingClientRect();

        // Progress based on active circle's center position
        const activeCenter = rect.top + rect.height / 2 - timelineRect.top;
        const progress = Math.min(activeCenter / timelineRect.height, 1);

        timelineRef.current.style.setProperty(
          "--progress",
          `${progress * 100}%`
        );
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // run once
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeIndex]);

  return (
    <section className="timeline" ref={timelineRef}>
      <h2>Work Experience</h2>
      <div className="timeline__items">
        {jobs.map((job, index) => (
          <div
            key={index}
            className={`timeline__item ${
              index === activeIndex ? "active" : ""
            }`}
          >
            <div className="timeline__date">{job.date}</div>
            <div className="timeline__content">
              <h3>{job.company}</h3>
              <p className="role">{job.role}</p>
              <ul>
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
