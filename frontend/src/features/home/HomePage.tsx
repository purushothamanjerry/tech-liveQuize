import {useRef} from "react";
import {HomeNav} from "./components/HomeNav";
import {HeroSection} from "./components/HeroSection";
import {LiveStatsStrip} from "./components/LiveStatsStrip";
import {InteractiveSampleQuiz} from "./components/InteractiveSampleQuiz";
import {FeaturesGrid} from "./components/FeaturesGrid";
import {HowItWorksSection} from "./components/HowItWorksSection";
import {GameModesSection} from "./components/GameModesSection";
import {ArchitectureSection} from "./components/ArchitectureSection";
import {HomeFooter} from "./components/HomeFooter";

interface HomePageProps {
  onLaunchGame: (playerName?: string, pin?: string) => void;
}

export function HomePage({onLaunchGame}: HomePageProps) {
  const pinInputRef = useRef<HTMLInputElement>(null);

  const handleFocusPin = () => {
    if (pinInputRef.current) {
      pinInputRef.current.scrollIntoView({behavior: "smooth", block: "center"});
      pinInputRef.current.focus();
    }
  };

  const handleJoinGame = (playerName: string, pin: string) => {
    onLaunchGame(playerName, pin);
  };

  const handleHostGame = () => {
    onLaunchGame("QuizHost ⚡", "482 913");
  };

  return (
    <div className="home-container">
      <HomeNav
        onLaunchGame={() => onLaunchGame()}
        onFocusPin={handleFocusPin}
      />

      <main style={{display: "flex", flexDirection: "column", gap: "80px"}}>
        <HeroSection
          ref={pinInputRef}
          onJoinGame={handleJoinGame}
          onHostGame={handleHostGame}
        />

        <LiveStatsStrip />

        <InteractiveSampleQuiz onLaunchGame={() => onLaunchGame()} />

        <FeaturesGrid />

        <HowItWorksSection />

        <GameModesSection onLaunchGame={() => onLaunchGame()} />

        <ArchitectureSection />

        {/* Call to Action Banner */}
        <section className="cta-banner">
          <h2>Ready to Ignite Your Audience?</h2>
          <p>
            Experience the next generation of live multiplayer quizzing. Launch a room in seconds, invite participants with a simple 6-digit PIN, and watch the competitive energy surge.
          </p>
          <div className="row c" style={{gap: "14px"}}>
            <button
              type="button"
              className="btn big"
              onClick={() => onLaunchGame()}
              style={{boxShadow: "0 0 30px rgba(34, 211, 238, 0.5)"}}
            >
              🚀 Launch Live Arena Now
            </button>
            <a
              href="https://github.com/purushothamanjerry/tech-liveQuize"
              target="_blank"
              rel="noopener noreferrer"
              className="btn g"
              style={{padding: "16px 28px", fontSize: "1.1rem", textDecoration: "none"}}
            >
              ⭐ Star on GitHub
            </a>
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  );
}
