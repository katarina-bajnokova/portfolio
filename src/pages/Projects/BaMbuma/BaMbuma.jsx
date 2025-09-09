import "./BaMbuma.scss";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import bookVideo from "@/assets/videos/book.mp4";

export default function BaMbuma() {
  return (
    <>
      <Header />
      <main className="project-page bambuma-page">
        <section className="project__container">
          <header className="project__header">
            <h1>Ba Mbuma – Lingala Fruits Colouring Book</h1>
            <p className="project__summary">
              <strong>Challenge:</strong> I wanted to create an educational and
              cultural resource that introduces Lingala vocabulary to children
              in a fun and engaging way. The challenge was to design a book that
              is simple enough for kids to enjoy while also reflecting cultural
              authenticity and visual appeal.
            </p>
            <p className="project__meta">
              <strong>Deliverables:</strong> Branding & visual direction, custom
              illustrations (fruits + layouts), page design and book structure,
              ready-to-print digital file
              <br />
              <strong>Role:</strong> Author, Illustrator & Designer
            </p>
          </header>

          {/* HERO MEDIA */}
          <div className="project-hero">
            <video
              className="project-hero__media"
              src={bookVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>

          {/* GOALS */}
          <section className="project-section">
            <h2>Goals</h2>
            <ul>
              <li>
                Help children learn Lingala fruit names and vocabulary in an
                interactive format.
              </li>
              <li>
                Create playful illustrations that encourage coloring and
                creativity.
              </li>
              <li>
                Develop a clear, consistent, and visually appealing book layout.
              </li>
              <li>
                Explore how cultural storytelling can translate into an
                educational product.
              </li>
            </ul>
          </section>

          {/* PROCESS */}
          <section className="project-section">
            <h2>Development Process</h2>
            <h3>Illustration & Design</h3>
            <ul>
              <li>
                Created fruit illustrations in Adobe Illustrator with a bold,
                playful style.
              </li>
              <li>
                Used Canva to structure pages and apply branding consistently.
              </li>
              <li>
                Balanced education and fun — each page teaches a Lingala word
                alongside an illustration for coloring.
              </li>
              <li>
                Experimented with AI to generate initial concepts; every
                illustration was refined and redrawn for authenticity and
                originality.
              </li>
              <li>
                One-sided printable pages (reverse side left blank) prevent
                bleed-through from markers or paint.
              </li>
            </ul>
          </section>

          {/* AFTER THOUGHTS */}
          <section className="project-section">
            <h2>After Thoughts</h2>
            <p>
              This project allowed me to combine illustration, education, and
              cultural design into a single product. It showed me how design can
              extend beyond screens into publishing while still applying UX
              principles like clarity and engagement.
            </p>
            <p>
              I’m polishing the first colouring book and plan to create more
              volumes (animals, numbers, cultural history). Once complete, I’ll
              publish and release them as part of the Koyekola educational
              brand.
            </p>
          </section>

          {/* FUTURE */}
          <section className="project-section">
            <h2>Future Improvements & Suggestions</h2>
            <ul>
              <li>Refine and finalize the first fruit colouring book.</li>
              <li>
                Expand into a series (fruits, animals, numbers, cultural
                stories).
              </li>
              <li>
                Add interactive digital versions (e.g., PDF with clickable audio
                for pronunciation).
              </li>
              <li>
                Connect the books with the Koyekola app to build a complete
                ecosystem.
              </li>
            </ul>
          </section>
        </section>
      </main>
      <Footer linkedin="https://www.linkedin.com/in/katarina-bajnokova/" />
    </>
  );
}
