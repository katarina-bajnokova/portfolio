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
        <section className="home-hero" id="work">
          <h1>Your Next UX Design & Development Intern</h1>
        </section>

        <section className="home-work-grid">
          <div className="grid">
            <ProjectCard
              title="End-to-end Product Design"
              subtitle="Tools: Figma, UX Research, Branding, Prototyping"
              src={guessjeansVideo}
              variant="phone"
            />
            <ProjectCard
              title="Full-Stack Development"
              subtitle="Tech: React, Sass, Mantine, PHP, SQLite"
              src={rougeVideo}
              variant="phone"
            />
          </div>
        </section>

        <section className="home-feature">
          <div className="feature__wrap">
            <img src={koyekolaImg} alt="Koyekola landing page" loading="lazy" />
            <h2>Landing Page Design & Development</h2>
            <p>Tools: Figma, React, Sass</p>
          </div>
        </section>

        <section className="home-book">
          <div className="book__wrap">
            <video
              src={bookVideo}
              autoPlay
              muted
              loop
              playsInline
              className="book__video"
            />
            <h3>Illustration & Book Design</h3>
            <p>Tools: Adobe Illustrator, Canva</p>
          </div>
        </section>

        <footer className="site-footer" id="about">
          <p>
            © Katarina Bajnokova 2025 | katarinabajnokovaofficial@gmail.com |
            +32 472 21 50 14
          </p>
        </footer>
      </main>
    </>
  );
}
