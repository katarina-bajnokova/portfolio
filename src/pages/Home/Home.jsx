import { Link } from "react-router-dom";
import "./Home.scss";
import Header from "@/components/layout/Header/Header";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

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
          <h1>Your Next UX Design & Development Intern</h1>
        </section>

        {/* TWO TOP CARDS */}
        <section className="home-work-grid">
          <div className="grid">
            <ProjectCard
              title="End-to-end Product Design"
              subtitle="Tools: Figma, UX Research, Branding, Prototyping"
              src={guessjeansVideo}
              variant="phone"
              to="/project/guess-jeans"
            />
            <ProjectCard
              title="Full-Stack Development"
              subtitle="Tech: React, Sass, Mantine, PHP, SQLite"
              src={rougeVideo}
              variant="phone"
              to="/project/rouge"
            />
          </div>
        </section>

        {/* FEATURE BANNER → click to open Koyekola page */}
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
            <h2>Landing Page Design & Development</h2>
            <p>Tools: Figma, React, Sass</p>
          </div>
        </section>

        {/* BOOK SECTION → click video to open the project page */}
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
            <h3>Illustration & Book Design</h3>
            <p>Tools: Adobe Illustrator, Canva</p>
          </div>
        </section>

        {/* SIMPLE FOOTER (home) */}
        <footer className="site-footer" id="about">
          <p>
            © Katarina Bajnokova {new Date().getFullYear()} |
            katarinabajnokovaofficial@gmail.com | +32 472 21 50 14
          </p>
        </footer>
      </main>
    </>
  );
}
