import {useState, forwardRef} from "react";

interface HeroSectionProps {
  onJoinGame: (playerName: string, pin: string) => void;
  onHostGame: () => void;
}

const AVATARS = ["⚡", "🦊", "🚀", "🤖", "🎮", "🧠", "🔥", "👑", "🎯", "💎"];
const RANDOM_NAMES = [
  "ByteMaster",
  "CloudNinja",
  "KernelSpark",
  "PixelHero",
  "JavaWhiz",
  "TurboCoder",
  "AlgoRhythm",
  "DevDynamo"
];

export const HeroSection = forwardRef<HTMLInputElement, HeroSectionProps>(
  function HeroSection({onJoinGame, onHostGame}, pinInputRef) {
    const [selectedAvatar, setSelectedAvatar] = useState("⚡");
    const [playerName, setPlayerName] = useState("");
    const [pin, setPin] = useState("482 913");
    const [showAvatarTray, setShowAvatarTray] = useState(false);

    const handleRandomName = () => {
      const random = RANDOM_NAMES[Math.floor(Math.random() * RANDOM_NAMES.length)];
      setPlayerName(random);
    };

    const handleJoin = (e: React.FormEvent) => {
      e.preventDefault();
      const finalName = playerName.trim() || `${selectedAvatar} Player_${Math.floor(Math.random() * 900 + 100)}`;
      onJoinGame(finalName, pin);
    };

    return (
      <section className="hero-section" id="top">
        <div className="hero-glow-bg" aria-hidden="true" />

        <div className="hero-badge">
          <span className="pulse-dot" aria-hidden="true" />
          <span>LIVEQUIZE v2.0 • BY TECHLOGICQ</span>
        </div>

        <h1 className="hero-headline">
          Real-Time Live Quizzes That <span className="gradient-text">Electrify</span> Any Crowd
        </h1>

        <p className="hero-subheadline">
          Engage thousands in split-second live multiplayer trivia. Engineered by techlogicQ with sub-50ms synchronization, dynamic streak scoring, and cinema-grade podium reveals.
        </p>

        {/* Quick Join Console */}
        <div className="quick-join-card">
          <div className="join-card-header">
            <h3>
              <span>⚡</span> Quick Join Live Arena
            </h3>
            <span className="join-badge-live">ROOM READY</span>
          </div>

          <form onSubmit={handleJoin} style={{display: "flex", flexDirection: "column", gap: "16px"}}>
            <div className="join-inputs-row">
              <div className="input-group">
                <label>Avatar</label>
                <button
                  type="button"
                  className="avatar-picker-btn"
                  onClick={() => setShowAvatarTray(!showAvatarTray)}
                  title="Choose your avatar"
                >
                  {selectedAvatar}
                </button>
              </div>

              <div className="input-group">
                <label htmlFor="player-nickname">
                  Nickname{" "}
                  <button
                    type="button"
                    onClick={handleRandomName}
                    style={{background: "none", border: "none", color: "var(--c)", cursor: "pointer", fontSize: "0.72rem", textDecoration: "underline", padding: 0}}
                  >
                    (randomize)
                  </button>
                </label>
                <input
                  id="player-nickname"
                  type="text"
                  className="input-field"
                  placeholder="Enter your handle..."
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  maxLength={18}
                />
              </div>

              <div className="input-group">
                <label htmlFor="game-pin">Game PIN</label>
                <input
                  id="game-pin"
                  ref={pinInputRef}
                  type="text"
                  className="input-field input-pin"
                  placeholder="482 913"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  maxLength={10}
                  required
                />
              </div>
            </div>

            {showAvatarTray && (
              <div className="avatar-tray" role="group" aria-label="Select avatar">
                {AVATARS.map((av) => (
                  <button
                    key={av}
                    type="button"
                    className={`avatar-choice ${selectedAvatar === av ? "active" : ""}`}
                    onClick={() => {
                      setSelectedAvatar(av);
                      setShowAvatarTray(false);
                    }}
                  >
                    {av}
                  </button>
                ))}
              </div>
            )}

            <div className="join-actions-row">
              <button type="submit" className="btn-primary-join">
                <span>🚀</span> Enter Live Arena
              </button>
              <button
                type="button"
                className="btn-secondary-host"
                onClick={onHostGame}
              >
                🎮 Host / Demo Mode
              </button>
            </div>
          </form>
        </div>

        {/* Visual Showcase */}
        <div className="hero-visual-container">
          <div className="hero-visual-inner">
            <img
              src="/hero-preview.jpg"
              alt="liveQuize by techlogicQ live showdown interface preview"
              className="hero-visual-img"
              loading="eager"
            />
            <div className="floating-pill top-left">
              <span>🔥</span>
              <span>Streak Combo x5 (+250 pts)</span>
            </div>
            <div className="floating-pill bottom-right">
              <span className="pulse-dot" />
              <span>2,845 Players Synced</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
);
