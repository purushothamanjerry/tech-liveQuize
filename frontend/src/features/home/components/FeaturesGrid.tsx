export function FeaturesGrid() {
  const features = [
    {
      icon: "⚡",
      title: "Sub-50ms Real-Time Engine",
      desc: "Synchronized countdown timers and instant question delivery ensure zero latency gaps between players, whether on mobile or desktop."
    },
    {
      icon: "🎯",
      title: "Speed-Weighted Scoring & Streaks",
      desc: "1,000 base points plus up to 300 speed bonus for rapid answers. Maintain consecutive correct streaks for up to +250 extra combo points."
    },
    {
      icon: "🏆",
      title: "Cinema-Grade Podium Reveals",
      desc: "Build suspense with step-by-step 3rd, 2nd, and 1st place champion reveals, accompanied by confetti bursts and full leaderboard rank changes."
    },
    {
      icon: "🎙️",
      title: "Host Command Cockpit",
      desc: "Full moderator control: pause rounds, skip questions, broadcast countdowns, override limits, and monitor live answer distributions in real time."
    },
    {
      icon: "📱",
      title: "Zero-Install Instant Join",
      desc: "Participants simply open the web link, type the 6-digit game PIN, choose an avatar, and immediately join the live battle arena."
    },
    {
      icon: "🛡️",
      title: "Enterprise Grade & Scalable",
      desc: "Engineered by techlogicQ for horizontal scale. Decoupled TypeScript client with Spring Boot and STOMP WebSocket architecture."
    }
  ];

  return (
    <section className="home-section" id="features">
      <div className="section-heading-wrap">
        <span className="section-tag">Core Capabilities</span>
        <h2 className="section-title">Engineered for Competitive Intensity</h2>
        <p className="section-desc">
          Every millisecond counts. liveQuize delivers crisp animations, instant response processing, and exhilarating live competition.
        </p>
      </div>

      <div className="features-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            <div className="feature-icon-wrap" aria-hidden="true">
              {f.icon}
            </div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
