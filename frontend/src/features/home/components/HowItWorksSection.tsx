export function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Host Starts Room",
      desc: "Select a question set (or customize your own) and broadcast the game lobby with the unique 6-digit game PIN on the main screen."
    },
    {
      num: "02",
      title: "Audience Joins Instantly",
      desc: "Participants open the site on phone or laptop, type the PIN, pick a fun avatar emoji, and appear live in the lobby."
    },
    {
      num: "03",
      title: "High-Speed Live Round",
      desc: "Synchronized countdown timer ticks down. Players buzz in on colorful choice cards. Speed and accuracy multiply your total score."
    },
    {
      num: "04",
      title: "Podium & Insights",
      desc: "Watch the leaderboard climb dynamically between questions. End with an electrifying 3rd, 2nd, and 1st place podium reveal!"
    }
  ];

  return (
    <section className="home-section" id="how-it-works">
      <div className="section-heading-wrap">
        <span className="section-tag">Game Flow</span>
        <h2 className="section-title">How liveQuize Works in Action</h2>
        <p className="section-desc">
          Four frictionless steps from room creation to podium celebration. Designed for maximum engagement and zero technical friction.
        </p>
      </div>

      <div className="flow-steps-grid">
        {steps.map((s) => (
          <div key={s.num} className="flow-step-card">
            <div className="step-num-badge">{s.num}</div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
