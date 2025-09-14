import "./SandrineJourneyMap.scss";

export default function SandrineJourneyMap() {
  const journeySteps = [
    {
      action: "Sees family speaking Lingala at gathering",
      task: "Tries to follow conversations, picks up words",
      feeling: "Curious, but embarrassed when she doesn’t understand",
      opportunity: "Provide “conversation prep” tools for family events",
    },
    {
      action: "Listens to Congolese music",
      task: "Repeats lyrics, looks up meaning online",
      feeling: "Excited, motivated, playful",
      opportunity:
        "Integrate music-based learning modules (karaoke, lyric breakdowns)",
    },
    {
      action: "Attends diaspora events",
      task: "Engages with community, dances, socializes",
      feeling: "Proud, but self-conscious when speaking",
      opportunity: "Create event-focused learning packs (phrases, dialogues)",
    },
    {
      action: "Wants to practice with peers",
      task: "Avoids speaking to not “sound Belgian”",
      feeling: "Ashamed, anxious, judged",
      opportunity: "Enable peer challenges and supportive feedback loops",
    },
    {
      action: "Searches for resources",
      task: "Tries textbooks, scattered PDFs online",
      feeling: "Bored, overwhelmed, disconnected",
      opportunity: "Offer modern, gamified, mobile-first alternatives",
    },
    {
      action: "Connects online (TikTok, Instagram)",
      task: "Shares content, engages with trends",
      feeling: "Confident online, vulnerable in Lingala",
      opportunity:
        "Merge her digital habits with cultural learning (TikTok-style lessons, social challenges)",
    },
    {
      action: "Visits grandparents",
      task: "Attempts short conversations",
      feeling: "Guilty, frustrated when she can’t reply",
      opportunity:
        "Introduce guided “family mode” practice for intergenerational bonding",
    },
  ];

  return (
    <section className="journey-map">
      <h2>Sandrine’s User Journey Map</h2>
      <div className="journey-grid">
        <div className="journey-header">Actions</div>
        <div className="journey-header">Tasks</div>
        <div className="journey-header">Feelings</div>
        <div className="journey-header">Opportunities</div>

        {journeySteps.map((step, i) => (
          <>
            <div key={`action-${i}`} className="journey-cell action">
              {step.action}
            </div>
            <div key={`task-${i}`} className="journey-cell task">
              {step.task}
            </div>
            <div key={`feeling-${i}`} className="journey-cell feeling">
              {step.feeling}
            </div>
            <div key={`opportunity-${i}`} className="journey-cell opportunity">
              {step.opportunity}
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
