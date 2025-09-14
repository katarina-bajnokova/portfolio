import "./SandrineUserStories.scss";

export default function SandrineUserStories() {
  return (
    <section className="persona-userstories">
      <h2>User Stories</h2>

      <div className="userstory">
        <h3>Reconnecting with Heritage</h3>
        <p>
          As Sandrine, I want to learn Lingala in a way that feels modern and
          fun, so I can reconnect with my family and culture.
        </p>
        <div className="paths">
          <div className="happy">
            <strong>Happy Path:</strong> Uses gamified challenges → feels
            engaged, practices daily with grandparents.
          </div>
          <div className="edge">
            <strong>Edge Case:</strong> Content feels like a textbook → loses
            interest quickly.
          </div>
        </div>
      </div>

      <div className="userstory">
        <h3>Overcoming Shame</h3>
        <p>
          As Sandrine, I want to practice in a safe, low-pressure space, so I
          can build confidence without feeling judged.
        </p>
        <div className="paths">
          <div className="happy">
            <strong>Happy Path:</strong> Uses private/self-paced features →
            gains confidence before speaking publicly.
          </div>
          <div className="edge">
            <strong>Edge Case:</strong> Peer comparison/leaderboards create
            anxiety → avoids the app.
          </div>
        </div>
      </div>

      <div className="userstory">
        <h3>Fitting into Daily Life</h3>
        <p>
          As Sandrine, I want short lessons that fit my routine, so I can
          practice Lingala on-the-go.
        </p>
        <div className="paths">
          <div className="happy">
            <strong>Happy Path:</strong> Completes 5-min micro-lessons on
            commute → builds consistent habit.
          </div>
          <div className="edge">
            <strong>Edge Case:</strong> Lessons too long/rigid → skips practice,
            drops out.
          </div>
        </div>
      </div>

      <div className="userstory">
        <h3>Learning Through Music</h3>
        <p>
          As Sandrine, I want to learn via Congolese music, so practice feels
          natural and enjoyable.
        </p>
        <div className="paths">
          <div className="happy">
            <strong>Happy Path:</strong> Unlocks “Lyrics Mode” → sings with
            translations → retention improves.
          </div>
          <div className="edge">
            <strong>Edge Case:</strong> Songs don’t match her taste →
            disengages, returns to TikTok.
          </div>
        </div>
      </div>
    </section>
  );
}
