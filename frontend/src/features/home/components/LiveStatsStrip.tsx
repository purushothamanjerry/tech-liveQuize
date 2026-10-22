export function LiveStatsStrip() {
  const stats = [
    {
      number: "< 50ms",
      label: "Real-Time WebSocket Sync",
      desc: "Instant zero-drift countdown"
    },
    {
      number: "50,000+",
      label: "Concurrent Player Capacity",
      desc: "Spring Boot horizontal cluster"
    },
    {
      number: "1,000 + 300",
      label: "Dynamic Speed Points",
      desc: "Speed bonus + streak rewards"
    },
    {
      number: "100%",
      label: "Zero-Install Join",
      desc: "Instant play via mobile or web"
    }
  ];

  return (
    <div className="stats-strip-container" aria-label="Key Performance Metrics">
      {stats.map((s, i) => (
        <div key={i} className="stat-box">
          <div className="stat-number">{s.number}</div>
          <div className="stat-label">{s.label}</div>
          <small style={{color: "#64748b", fontSize: "0.78rem", display: "block", marginTop: "4px"}}>
            {s.desc}
          </small>
        </div>
      ))}
    </div>
  );
}
