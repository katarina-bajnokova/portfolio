import { Link } from "react-router-dom";

import "./Home.scss";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import guessjeansVideo from "@/assets/videos/guessjeans.mp4";
import rougeVideo from "@/assets/videos/rouge.mp4";
import bookVideo from "@/assets/videos/book.mp4";
import koyekolaImg from "@/assets/images/koyekola.png";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="home-hero" id="work">
          <section className="home-hero" id="work">
            <h1>UX Design & Development Student</h1>
            <p>(Your next intern starting in February 2026)</p>
          </section>
        </section>

        {/* PROJECT GRID – Guess Jeans + Rouge */}
        <section className="home-work-grid">
          <div className="grid">
            {/* Guess Jeans */}
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
              <h2>Guess Jeans (UX Designer)</h2>
              <p>
                <strong>Focus:</strong> Jeans shopping made simple
              </p>
              <p>
                <strong>Tools:</strong> Figma, AI, Design Thinking & Research
              </p>
              <div className="badges">
                <span>Fit Confidence</span>
                <span>Denim Focus</span>
                <span>Seamless Journey</span>
              </div>
            </Link>

            {/* Rouge */}
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
              <h2>Rouge (Full-Stack Developer)</h2>
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

        {/* FEATURE BANNER – Koyekola */}
        <section className="home-feature">
          <div className="feature__wrap">
            <Link
              to="/project/koyekola"
              className="home-feature__link"
              aria-label="Open Koyekola project"
              title="Open project"
            >
              <img
                src={koyekolaImg}
                alt="Koyekola landing page"
                loading="lazy"
              />
            </Link>
            <h2>Koyekola (UX Designer & Developer)</h2>
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

        {/* BOOK PROJECT – Ba Mbuma */}
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

      {/* FOOTER (always visible, fixed at bottom) */}
      <Footer linkedin="https://www.linkedin.com/in/katarina-bajnokova/" />
    </>
  );
}
