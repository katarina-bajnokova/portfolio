import "./About.scss";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Header from "@/components/layout/Header/Header";
import portrait from "@/assets/images/about.png";
import jciAward from "@/assets/images/About/jci.JPG";

import Timeline from "@/pages/About/Timeline";
import Certifications from "@/pages/About/Certifications";

export default function About() {
  const bookRef = useRef(null);
  const leftPageRef = useRef(null);
  const portraitRef = useRef(null);
  const subtitleRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [flippedTags, setFlippedTags] = useState([]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("katarinabajnokovaofficial@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTagClick = (tagId) => {
    setFlippedTags(prev => 
      prev.includes(tagId) ? prev.filter(id => id !== tagId) : [...prev, tagId]
    );
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

  useEffect(() => {
    // Interactive parallax tilt on the left page + portrait parallax
    const el = leftPageRef.current;
    const img = portraitRef.current;
    if (!el || !img) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width; // 0..1
      const y = (e.clientY - rect.top) / rect.height; // 0..1
      const rotateY = (x - 0.5) * 6; // tilt range
      const rotateX = (0.5 - y) * 6;

      gsap.to(el, { rotateY, rotateX, duration: 0.3, ease: "power2.out" });
      gsap.to(img, {
        x: (x - 0.5) * 16,
        y: (y - 0.5) * 16,
        scale: 1.03,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleLeave = () => {
      gsap.to(el, { rotateY: 0, rotateX: 0, duration: 0.4, ease: "power2.out" });
      gsap.to(img, { x: 0, y: 0, scale: 1, duration: 0.4, ease: "power2.out" });
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  useEffect(() => {
    // Subtle intro animation for stickers
    if (leftPageRef.current) {
      const stickers = leftPageRef.current.querySelectorAll('.sticker');
      if (stickers.length) {
        gsap.from(stickers, {
          opacity: 0,
          y: 8,
          duration: 0.4,
          ease: 'power2.out',
          stagger: 0.08,
        });
      }
    }
  }, []);

  return (
    <>
      <Header />
      <main className="about-page">
        <section className="about__container">
          {/* Background floating tags */}
          <div className="bg-tags" aria-hidden="false">
            <span className={`bg-tag tag--1 ${flippedTags.includes(1) ? 'is-flipped' : ''}`} onClick={() => handleTagClick(1)}>
              <span className="bg-tag__front">LOL</span>
              <span className="bg-tag__back">🎮</span>
            </span>
            <span className={`bg-tag tag--2 ${flippedTags.includes(2) ? 'is-flipped' : ''}`} onClick={() => handleTagClick(2)}>
              <span className="bg-tag__front">COD</span>
              <span className="bg-tag__back">🎯</span>
            </span>
            <span className={`bg-tag tag--3 ${flippedTags.includes(3) ? 'is-flipped' : ''}`} onClick={() => handleTagClick(3)}>
              <span className="bg-tag__front">Split Fiction</span>
              <span className="bg-tag__back">🎭</span>
            </span>
            <span className={`bg-tag tag--4 ${flippedTags.includes(4) ? 'is-flipped' : ''}`} onClick={() => handleTagClick(4)}>
              <span className="bg-tag__front">It Takes Two</span>
              <span className="bg-tag__back">🤝</span>
            </span>
            <span className={`bg-tag tag--5 ${flippedTags.includes(5) ? 'is-flipped' : ''}`} onClick={() => handleTagClick(5)}>
              <span className="bg-tag__front">Hooked</span>
              <span className="bg-tag__back">📖</span>
            </span>
            <span className={`bg-tag tag--6 ${flippedTags.includes(6) ? 'is-flipped' : ''}`} onClick={() => handleTagClick(6)}>
              <span className="bg-tag__front">Creative Confidence</span>
              <span className="bg-tag__back">💡</span>
            </span>
            <span className={`bg-tag tag--7 ${flippedTags.includes(7) ? 'is-flipped' : ''}`} onClick={() => handleTagClick(7)}>
              <span className="bg-tag__front">Disorientation</span>
              <span className="bg-tag__back">🌀</span>
            </span>
            <span className={`bg-tag tag--8 ${flippedTags.includes(8) ? 'is-flipped' : ''}`} onClick={() => handleTagClick(8)}>
              <span className="bg-tag__front">Coloring</span>
              <span className="bg-tag__back">🎨</span>
            </span>
            <span className={`bg-tag tag--9 ${flippedTags.includes(9) ? 'is-flipped' : ''}`} onClick={() => handleTagClick(9)}>
              <span className="bg-tag__front">Yellowface</span>
              <span className="bg-tag__back">📚</span>
            </span>
            <span className={`bg-tag tag--10 ${flippedTags.includes(10) ? 'is-flipped' : ''}`} onClick={() => handleTagClick(10)}>
              <span className="bg-tag__front">VR</span>
              <span className="bg-tag__back">🥽</span>
            </span>
            <span className={`bg-tag tag--11 ${flippedTags.includes(11) ? 'is-flipped' : ''}`} onClick={() => handleTagClick(11)}>
              <span className="bg-tag__front">Walking</span>
              <span className="bg-tag__back">🚶‍♀️</span>
            </span>
            <span className={`bg-tag tag--12 ${flippedTags.includes(12) ? 'is-flipped' : ''}`} onClick={() => handleTagClick(12)}>
              <span className="bg-tag__front">Reading</span>
              <span className="bg-tag__back">📕</span>
            </span>
            <span className={`bg-tag tag--13 ${flippedTags.includes(13) ? 'is-flipped' : ''}`} onClick={() => handleTagClick(13)}>
              <span className="bg-tag__front">Gaming</span>
              <span className="bg-tag__back">🕹️</span>
            </span>
            <span className={`bg-tag tag--14 ${flippedTags.includes(14) ? 'is-flipped' : ''}`} onClick={() => handleTagClick(14)}>
              <span className="bg-tag__front">Design of<br/>Everyday Things</span>
              <span className="bg-tag__back">🚪</span>
            </span>
            <span className={`bg-tag tag--15 ${flippedTags.includes(15) ? 'is-flipped' : ''}`} onClick={() => handleTagClick(15)}>
              <span className="bg-tag__front">Learning</span>
              <span className="bg-tag__back">🧠</span>
            </span>
          </div>
          {/* Open Book Effect */}
          <div className="book" ref={bookRef}>
            <div className="book__spine"></div>

            {/* Left Page - Image & Name Only */}
            <div className="book__page book__page--left" ref={leftPageRef}>
              <div className="book__page-content book__page-content--centered">
                <figure className="book__portrait book__portrait--large">
                  <img
                    src={portrait}
                    alt="Katarína Bajnokova portrait"
                    loading="lazy"
                    className="book__portrait-img"
                    ref={portraitRef}
                  />
                </figure>
                <h1 className="book__name book__name--large">
                  Katarína Bajnokova
                </h1>
                <p className="book__subtitle book__subtitle--large" ref={subtitleRef}>
                  UX/UI Designer • Frontend Developer
                </p>
                <button
                  type="button"
                  className={`contact-quick ${copied ? 'is-copied' : ''}`}
                  onClick={handleCopyEmail}
                  aria-label="Copy my email"
                >
                  {copied ? "✓ Email copied" : "Copy email"}
                </button>
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
                    What follows is{" "}
                    <span className="highlight highlight--yellow">
                      who I am beyond the work
                    </span>
                    .
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
                    and have been playing League of Legends since I was 12. I am
                    still in Bronze and have accepted it as a permanent state.
                    Once you get into Bronze, you do not{" "}
                    <span className="highlight highlight--strikethrough">
                      get out
                    </span>
                    . I am, however, a big fan of{" "}
                    <span className="highlight highlight--blue">
                      cooperative games
                    </span>{" "}
                    like It Takes Two and Split Fiction, where{" "}
                    <span className="highlight highlight--pink">teamwork</span>{" "}
                    actually matters and{" "}
                    <span className="highlight highlight--circle">
                      friendships remain intact
                    </span>
                    .
                  </p>

                  <p className="book__text">
                    I love{" "}
                    <span className="highlight highlight--box">
                      immersive digital experiences
                    </span>{" "}
                    and spend time in{" "}
                    <span className="highlight highlight--blue">VR</span>{" "}
                    exploring carefully crafted worlds. On the calmer side, I
                    recently discovered
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
    </>
  );
}
