import { Link } from "react-router-dom";

import "./Home.scss";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

import guessjeansVideo from "@/assets/videos/guessjeans.mp4";
import rougeVideo from "@/assets/videos/rouge.mp4";
import bookVideo from "@/assets/videos/book.mp4";
import mayeleImg from "@/assets/images/mayele.png";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="home-hero" id="work">
          <h1>UX/UI Designer & Frontend Developer</h1>

          <p>
            Component-driven design with production-aware frontend execution.
          </p>

          <p>
            Open to part-time and freelance opportunities. Available for
            full-time roles from July 2026.
          </p>
        </section>

        <section className="home-work-grid">
          <div className="grid">
            <Link
              to="/project/guess-jeans"
              className="project"
              aria-label="Open Guess Jeans project"
              title="Open project"
            >
              <video
                src={guessjeansVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <h2>Guess Jeans (UX/UI Designer)</h2>

              <p>
                <strong>Focus:</strong> Increasing fit confidence in denim
                shopping
              </p>
              <p>
                <strong>Tools:</strong> Figma, UX research, design thinking,
                prototyping
              </p>
              <div className="badges">
                <span>Fit Confidence</span>
                <span>Denim Focus</span>
                <span>Seamless Journey</span>
              </div>
            </Link>

            <Link
              to="/project/rouge"
              className="project"
              aria-label="Open Rouge project"
              title="Open project"
            >
              <video
                src={rougeVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <h2>Rouge (Frontend Developer & UX/UI)</h2>

              <p>
                <strong>Focus:</strong> Ready-to-wear makeup looks
              </p>
              <p>
                <strong>Tools:</strong> React, Sass, PHP, SQLite, Mantine,
                GitHub, Notion
              </p>
              <div className="badges">
                <span>Ready-to-Use</span>
                <span>Stress-Free Choices</span>
                <span>Smooth App Performance</span>
              </div>
            </Link>
          </div>
        </section>

        <section className="home-feature">
          <div className="feature__wrap">
            <Link
              to="/project/koyekola"
              className="home-feature__link"
              aria-label="Open Koyekola project"
              title="Open project"
            >
              <img src={mayeleImg} alt="Mayele landing page" loading="lazy" />
            </Link>
            <h2>Mayele (UX/UI Designer & Frontend Developer)</h2>

            <p>
              <strong>Focus:</strong> Playful Lingala learning for kids
            </p>
            <p>
              <strong>Tools:</strong> Figma, React, Sass, HTML, AI, GitHub
            </p>
            <div className="badges">
              <span>Diaspora Roots</span>
              <span>Creative Expression</span>
              <span>Seamless Journey</span>
            </div>
          </div>
        </section>

        <section className="home-book">
          <div className="book__wrap">
            <Link
              to="/project/ba-mbuma"
              className="home-book__link"
              aria-label="Open Ba Mbuma — Lingala Fruits Colouring Book"
              title="Open project"
            >
              <video
                src={bookVideo}
                autoPlay
                muted
                loop
                playsInline
                className="book__video"
                preload="metadata"
              />
            </Link>
            <h2>Ba Mbuma (Author & Illustrator)</h2>
            <p>
              <strong>Focus:</strong> Language and culture, reimagined for the
              diaspora
            </p>
            <p>
              <strong>Tools:</strong> Adobe Illustrator, Canva
            </p>
            <div className="badges">
              <span>Diaspora Roots</span>
              <span>Creative Expression</span>
              <span>Seamless Journey</span>
            </div>
          </div>
        </section>
      </main>

      <Footer linkedin="https://www.linkedin.com/in/katarina-bajnokova/" />
    </>
  );
}
