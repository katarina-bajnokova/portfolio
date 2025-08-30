export default function Gallery({
  title,
  images,
  note,
  min = 240,
  cols,
  className = "",
}) {
  if (!images?.length) return null;
  return (
    <section className={`project-section gallery ${className}`.trim()}>
      {title && <h2>{title}</h2>}
      {note && <p className="gallery__note">{note}</p>}
      <div
        className="gallery__grid"
        style={{ ["--min"]: `${min}px` }}
        data-cols={cols || "auto"}
      >
        {images.map((src, i) => (
          <figure key={src} className="gallery__item">
            <img
              src={src}
              alt={`${title || "Image"} ${i + 1}`}
              loading="lazy"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
