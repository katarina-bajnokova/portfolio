import "./About.scss";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import portrait from "@/assets/images/about.png";
import jciAward from "@/assets/images/About/jci.JPG";

import Timeline from "@/pages/About/Timeline";
import Certifications from "@/pages/About/Certifications";

export default function About() {
  const bookRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("katarinabajnokovaofficial@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    // Subtle hover effect on the book
    if (bookRef.current) {
      gsap.to(bookRef.current, {
        scrollTrigger: {
          trigger: bookRef.current,
          start: "center center",
        },
        duration: 0.5,
      });
    }
  }, []);

  return (
    <>
      <Header />
      <main className="about-page">
        <section className="about__container">
          {/* Open Book Effect */}
          <div className="book" ref={bookRef}>
            <div className="book__spine"></div>

            {/* Left Page - Image & Name Only */}
            <div className="book__page book__page--left">
              <div className="book__page-content book__page-content--centered">
                <figure className="book__portrait book__portrait--large">
                  <img
                    src={portrait}
                    alt="Katarína Bajnokova portrait"
                    loading="lazy"
                    className="book__portrait-img"
                  />
                </figure>
                <h1 className="book__name book__name--large">
                  Katarína Bajnokova
                </h1>
                <p className="book__subtitle book__subtitle--large">
                  Designer & Developer
                </p>
              </div>
            </div>

            {/* Right Page - Chapter I About Me */}
            <div className="book__page book__page--right">
              <div className="book__page-content">
                {/* Chapter I - About Me */}
                <div className="book__chapter">
                  <div className="book__chapter-marker">Chapter I</div>
                  <h2 className="book__chapter-title">About Me</h2>

                  <p className="book__text-first">
                    This is the part that does not fit into a job title.
                    Everything about my design process, projects, and
                    professional experience lives on my portfolio and LinkedIn.
                    What follows is who I am beyond the work.
                  </p>

                  <p className="book__text">
                    I thrive in{" "}
                    <span className="highlight highlight--yellow">
                      collaborative environments
                    </span>{" "}
                    and genuinely enjoy moments that bring people together. I
                    need{" "}
                    <span className="highlight highlight--pink">
                      challenge and constant stimulation
                    </span>
                    to feel engaged. When things stay static for too long, I
                    know it is time for something new.
                  </p>

                  <p className="book__text">
                    Outside of work, I have many interests. I am a{" "}
                    <span className="highlight highlight--yellow">
                      passionate gamer
                    </span>{" "}
                    and have been playing League of Legends since I was 12.{" "}
                    <span className="highlight highlight--strikethrough">
                      I am still in Bronze and have accepted it as a permanent
                      state. Once you get into Bronze, you do not get out.
                    </span>{" "}
                    I am, however, a big fan of{" "}
                    <span className="highlight highlight--blue">
                      cooperative games
                    </span>{" "}
                    like It Takes Two and Split Fiction, where teamwork actually
                    matters and friendships remain intact.
                  </p>

                  <p className="book__text">
                    I love{" "}
                    <span className="highlight highlight--box">
                      immersive digital experiences
                    </span>{" "}
                    and spend time in VR exploring carefully crafted worlds. On
                    the calmer side, I recently discovered
                    <span className="highlight highlight--pink">
                      coloring books as a meditative escape
                    </span>{" "}
                    and quickly became obsessed. I am also an{" "}
                    <span className="highlight highlight--blue">
                      avid reader
                    </span>
                    , switching between educational books and fantasy depending
                    on my mood.
                  </p>

                  <p className="book__text">
                    My newest habit is{" "}
                    <span className="highlight highlight--yellow">walking</span>
                    . I bought a walking pad and turned it into my{" "}
                    <span className="highlight highlight--circle">
                      thinking space
                    </span>
                    , where most of my creative problem solving now happens. I
                    am deeply{" "}
                    <span className="highlight highlight--blue">
                      curious by nature
                    </span>{" "}
                    and constantly learning through technology, online courses,
                    and experimentation.
                  </p>

                  <p className="book__text">
                    I think a lot, sometimes too much. I need{" "}
                    <span className="highlight highlight--box">
                      novelty, challenge, and growth
                    </span>{" "}
                    to feel fulfilled. If you are looking for someone driven by
                    <span className="highlight highlight--pink">
                      curiosity and restless energy
                    </span>
                    , that is me.
                  </p>

                  <p className="book__text">
                    If you would like to talk about design, products, games, or
                    books,
                    <a
                      href="mailto:katarinabajnokovaofficial@gmail.com"
                      className="book__text-link"
                    >
                      {" "}
                      feel free to get in touch
                    </a>
                    .
                  </p>
                </div>

                {/* Next Button */}
                <button
                  className="book__next-btn"
                  onClick={() => setShowModal(true)}
                  aria-label="Next chapter"
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>

          {/* Modal */}
          {showModal && (
            <div className="modal-overlay" onClick={() => setShowModal(false)}>
              <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button
                  className="modal__close"
                  onClick={() => setShowModal(false)}
                  aria-label="Close modal"
                >
                  ✕
                </button>
                <div className="modal__content">
                  <h2 className="modal__title">Chapter II</h2>
                  <p className="modal__text">
                    If you wish to discover my second chapter, I'd love for you
                    to invite me for an interview. There, I can tell you more
                    about my approach, my process, and the work I'm most proud
                    of.
                  </p>
                  <p className="modal__text">
                    Let's talk about how we can create something great together.
                  </p>
                  <button
                    className={`modal__cta ${
                      copied ? "modal__cta--copied" : ""
                    }`}
                    onClick={handleCopyEmail}
                  >
                    {copied ? "✓ Email copied!" : "Copy my email"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Education Section 
          <section className="education">
            <h2>Education</h2>
            <div className="education__grid">
              <div className="education__card">
                <h3>Thomas More University of Applied Sciences</h3>
                <p>
                  Bachelor’s Degree, Information Management & Multimedia
                  (Digital Experience Design)
                </p>
                <p>
                  Focus: UX/UI design, interaction design, prototyping, and
                  frontend fundamentals with component-based workflows.
                </p>
                <span className="date">Sep 2023 – Jun 2026</span>
              </div>
            </div>
          </section>*/}

          {/* Certifications Section 
          <Certifications />*/}

          {/* Awards Section 
          <section className="awards">
            <h2>Awards</h2>
            <div className="awards__item">
              <img
                src={jciAward}
                alt="JCI Slovakia Student Entrepreneur Award 2020"
                className="awards__image"
                loading="lazy"
              />
              <div className="awards__content">
                <h3>JCI Slovakia, Student Entrepreneur Award (2020)</h3>
                <p>
                  Top 5 finalist as co-founder of{" "}
                  <strong>Praptiu Donáška</strong>, a startup launched during
                  the COVID-19 period to improve access and convenience for home
                  delivery services.
                </p>
                <p>
                  The project strengthened my ability to operate in ambiguous,
                  fast-moving environments, communicate value clearly, and make
                  product decisions that balance user needs, feasibility, and
                  trust.
                </p>
              </div>
            </div>
          </section>*/}

          {/* Work Experience Timeline 
         {/* <Timeline />*/}
        </section>
      </main>
      <Footer linkedin="https://www.linkedin.com/in/katarina-bajnokova/" />
    </>
  );
}
