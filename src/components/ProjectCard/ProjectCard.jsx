import { Link } from "react-router-dom";
import "./ProjectCard.scss";

export default function ProjectCard({
  title,
  subtitle,
  src, // image or video
  variant = "phone", // "phone" | "laptop" | "book"
  to, // optional link
}) {
  const isVideo = typeof src === "string" && src.endsWith(".mp4");
  const Wrapper = to ? Link : "div";
  const wrapperProps = to ? { to, "aria-label": title } : {};

  return (
    <Wrapper
      className={`project-card project-card--${variant}`}
      {...wrapperProps}
    >
      <div className="project-card__media">
        {isVideo ? (
          <video src={src} autoPlay muted loop playsInline preload="metadata" />
        ) : (
          <img src={src} alt={title} loading="lazy" />
        )}
      </div>
      <h2 className="project-card__title">{title}</h2>
      <p className="project-card__subtitle">{subtitle}</p>
    </Wrapper>
  );
}
