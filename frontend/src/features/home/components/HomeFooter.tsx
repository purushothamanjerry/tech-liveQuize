export function HomeFooter() {
  return (
    <footer className="home-footer">
      <div className="footer-top">
        <div style={{display: "flex", flexDirection: "column", gap: "6px"}}>
          <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
            <span style={{fontSize: "1.4rem"}}>⚡</span>
            <span style={{fontFamily: "'Outfit', sans-serif", fontSize: "1.2rem", fontWeight: 900, color: "#ffffff"}}>
              liveQuize
            </span>
            <span className="tag" style={{borderColor: "var(--p)", color: "#c084fc", fontSize: "0.72rem"}}>
              by techlogicQ
            </span>
          </div>
          <p style={{margin: 0, fontSize: "0.85rem", color: "#94a3b8"}}>
            High-speed real-time multiplayer quizzing platform.
          </p>
        </div>

        <ul className="footer-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#sandbox">Demo Quiz</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#modes">Game Modes</a></li>
          <li><a href="#architecture">Architecture</a></li>
          <li>
            <a
              href="https://github.com/purushothamanjerry/tech-liveQuize"
              target="_blank"
              rel="noopener noreferrer"
              style={{color: "var(--c)", fontWeight: 700}}
            >
              GitHub Repo ↗
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-bottom">
        <div>
          © {new Date().getFullYear()} liveQuize by techlogicQ. All rights reserved.
        </div>
        <div style={{display: "flex", alignItems: "center", gap: "16px"}}>
          <span style={{display: "inline-flex", alignItems: "center", gap: "6px"}}>
            <span className="pulse-dot" style={{width: 6, height: 6}} /> System Status: Operational
          </span>
          <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: "smooth"}); }}>
            ↑ Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
