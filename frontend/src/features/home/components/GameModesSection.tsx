export function GameModesSection({onLaunchGame}: {onLaunchGame: () => void}) {
  const modes = [
    {
      icon: "💻",
      title: "Tech & Engineering Battles",
      badge: "Flagship Mode",
      desc: "Built-in curated questions covering modern Java, Spring Boot, React 18, Cloud Architecture, and concurrency.",
      tags: ["Core Java", "JVM Internals", "Distributed Systems", "SQL & Caching"]
    },
    {
      icon: "🎓",
      title: "Campus & Hackathons",
      badge: "High Energy",
      desc: "Perfect for university coding festivals and student hackathons. Fast onboarding, zero registration hurdles.",
      tags: ["Data Structures", "Web Dev", "Logic Puzzles", "Computer Science"]
    },
    {
      icon: "🏢",
      title: "Corporate All-Hands & Townhalls",
      badge: "Team Building",
      desc: "Gamify company syncs, celebrate milestones, and run icebreakers that keep hundreds of remote and in-office colleagues glued to the screen.",
      tags: ["Company Culture", "Product Trivia", "Quarterly Goals", "Team Spirit"]
    },
    {
      icon: "⚡",
      title: "Rapid Blitz Arena",
      badge: "Intense",
      desc: "Supercharged 5-second question rounds with accelerated scoring multipliers and high stakes buzzer combat.",
      tags: ["5s Rounds", "Speed Combos", "Sudden Death", "Double Multipliers"]
    }
  ];

  return (
    <section className="home-section" id="modes">
      <div className="section-heading-wrap">
        <span className="section-tag">Versatile Modes</span>
        <h2 className="section-title">Built for Every Arena and Event</h2>
        <p className="section-desc">
          Whether you are hosting a developer meetup, training a global workforce, or running a college quiz, liveQuize adapts effortlessly.
        </p>
      </div>

      <div className="modes-grid">
        {modes.map((m, i) => (
          <div key={i} className="mode-card">
            <div className="mode-header">
              <h3>
                <span>{m.icon}</span> {m.title}
              </h3>
              <span className="tag" style={{borderColor: "var(--p)", color: "#c084fc"}}>
                {m.badge}
              </span>
            </div>
            <p style={{color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.6, margin: 0}}>
              {m.desc}
            </p>
            <div className="mode-tags">
              {m.tags.map((t) => (
                <span key={t} className="mode-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{textAlign: "center", marginTop: "12px"}}>
        <button type="button" className="btn big" onClick={onLaunchGame}>
          ▶ Start Playing Questions Now
        </button>
      </div>
    </section>
  );
}
