import {useState} from "react";

interface HomeNavProps {
  onLaunchGame: () => void;
  onFocusPin: () => void;
}

export function HomeNav({onLaunchGame, onFocusPin}: HomeNavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="home-nav-wrapper">
      <nav className="home-nav" aria-label="Main Navigation">
        <a href="#top" className="home-nav-brand" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: "smooth"}); }}>
          <div className="brand-icon" aria-hidden="true">⚡</div>
          <div className="brand-text">
            <span className="brand-title">liveQuize</span>
            <span className="brand-sub">by techlogicQ</span>
          </div>
        </a>

        <ul className="home-nav-links" style={{display: mobileOpen ? "flex" : undefined}}>
          <li><a href="#features" onClick={() => setMobileOpen(false)}>Features</a></li>
          <li><a href="#sandbox" onClick={() => setMobileOpen(false)}>Interactive Demo</a></li>
          <li><a href="#how-it-works" onClick={() => setMobileOpen(false)}>How It Works</a></li>
          <li><a href="#modes" onClick={() => setMobileOpen(false)}>Game Modes</a></li>
          <li><a href="#architecture" onClick={() => setMobileOpen(false)}>Architecture</a></li>
        </ul>

        <div className="home-nav-actions">
          <button
            type="button"
            className="btn-nav-pin"
            onClick={onFocusPin}
            title="Jump to Game PIN input"
          >
            Enter PIN
          </button>
          <button
            type="button"
            className="btn-nav-arena"
            onClick={onLaunchGame}
            title="Start live multiplayer quiz arena"
          >
            <span>▶</span> Launch Live Arena
          </button>
        </div>
      </nav>
    </div>
  );
}
