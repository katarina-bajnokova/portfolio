import "./ProjectCard.scss";

export default function ProjectCard({
  title,
  subtitle,
  src,
  variant = "phone",
  poster,
}) {
  const isVideo = typeof src === "string" && src.endsWith(".mp4");

  return (
    <div className={`project-card project-card--${variant}`}>
      <div className="project-card__media">
        {isVideo ? (
          <video src={src} autoPlay muted loop playsInline poster={poster} />
        ) : (
          <img src={src} alt={title} loading="lazy" />
        )}
      </div>
      <h2 className="project-card__title">{title}</h2>
      <p className="project-card__subtitle">{subtitle}</p>
    </div>
  );
}
