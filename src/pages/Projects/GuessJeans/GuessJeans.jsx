import "./GuessJeans.scss";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import {
  videos,
  personas,
  research,
  branding,
  navigation,
  userJourney,
  jm,
  lofi,
} from "./guessAssets";

import {
  GoalsVision,
  PersonasIntro,
  JourneyMapsIntro,
  UserJourneysText,
  NavigationText,
  BrandingText,
  WireframesText,
  AfterThoughts,
  FutureImprovements,
} from "./SectionsText";

import {
  ResearchBoard,
  PersonasGallery,
  JourneyMapsGallery,
  UserJourneyGallery,
  NavigationGallery,
  BrandingGallery,
  WireframesGallery,
  HiFiPrototype,
} from "./MediaSections";

export default function GuessJeans() {
  return (
    <>
      <Header />
      <main className="project-page">
        <section className="project__container">
          {/* HEADER */}
          <header className="project__header">
            <h1>Guess Jeans – Digital Shopping Experience Redesign</h1>
            <p className="project__summary">
              <strong>Challenge:</strong> Shopping for jeans online is often
              frustrating—sizes are inconsistent, fit details are unclear, and
              most imagery doesn’t reflect real body types. Although Guess is
              strong in denim, its current digital journey doesn’t fully support
              inclusive fit guidance or confidence. This project rethinks that
              experience to make finding the right pair simple and reassuring.
            </p>

            <p className="project__meta">
              <strong>Deliverables:</strong> Market research, personas, journey
              mapping, wireframes, UI design, interactive prototype. <br />
              <strong>Role:</strong> End-to-End Product Designer (solo)
            </p>
          </header>

          {/* HERO PHONE VIDEO */}
          <div className="project-hero">
            <video
              className="project-hero__media"
              src={videos.hero}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>

          {/* TEXT SECTIONS */}
          <GoalsVision />

          {/* MEDIA: Research & Personas */}
          <ResearchBoard images={research} />
          <PersonasIntro />
          <PersonasGallery images={personas} />

          {/* Journeys */}
          <JourneyMapsIntro />
          <JourneyMapsGallery images={jm} />
          <UserJourneysText />
          <UserJourneyGallery images={userJourney} />

          {/* Navigation */}
          <NavigationText />
          <NavigationGallery images={navigation} />

          {/* Branding */}
          <BrandingText />
          <BrandingGallery images={branding} />

          {/* Wireframes */}
          <WireframesText />
          <WireframesGallery images={lofi} />

          {/* Hi-Fi prototype videos */}
          <HiFiPrototype videos={videos} />

          {/* After thoughts & Future work */}
          <AfterThoughts />
          <FutureImprovements />
        </section>
      </main>
      <Footer linkedin="https://www.linkedin.com/in/katarina-bajnokova/" />
    </>
  );
}
