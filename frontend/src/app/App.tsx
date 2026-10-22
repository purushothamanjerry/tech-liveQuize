import {useState} from "react";
import {useMockGameClient} from "../features/live-game/hooks/useMockGameClient";
import {GameShell} from "../components/layout/GameShell";
import {CountdownOverlay} from "../components/feedback/CountdownOverlay";
import {ReactionBar} from "../components/feedback/ReactionBar";
import {GameLobby} from "../features/lobby/GameLobby";
import {QuestionView} from "../features/live-game/components/QuestionView";
import {RoundResults} from "../features/results/RoundResults";
import {Leaderboard} from "../features/leaderboard/Leaderboard";
import {ChampionReveal} from "../features/results/ChampionReveal";
import {FinalResults} from "../features/results/FinalResults";
import {SoundControls} from "../components/feedback/SoundControls";
import {QUESTIONS} from "../features/live-game/engine/questions";
import {HostControlBar} from "../features/host-controls/HostControlBar";
import {HomePage} from "../features/home/HomePage";

export function App() {
  const [view, setView] = useState<"home" | "game">("home");
  const game = useMockGameClient();
  const {state: s, send, muted} = game;
  const ph = s.phase;

  const handleLaunchGame = (_playerName?: string, _pin?: string) => {
    setView("game");
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  const handleBackHome = () => {
    setView("home");
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  if (view === "home") {
    return <HomePage onLaunchGame={handleLaunchGame} />;
  }

  if (QUESTIONS.length === 0) {
    return (
      <GameShell onBackHome={handleBackHome}>
        <div className="panel c">
          <h2>No questions yet</h2>
          <p>Add questions to this quiz before starting a game.</p>
        </div>
      </GameShell>
    );
  }

  return (
    <GameShell
      onBackHome={handleBackHome}
      actions={<SoundControls muted={game.muted} setMuted={game.setMuted} />}
    >
      {ph === "countdown" && <CountdownOverlay n={s.n} />}
      {ph === "lobby" && <GameLobby state={s} send={send} />}
      {(ph === "question" || ph === "waiting") && <QuestionView state={s} send={send} />}
      {ph === "reveal" && <RoundResults state={s} send={send} />}
      {ph === "leaderboard" && <Leaderboard state={s} send={send} />}
      {ph === "final" && <ChampionReveal state={s} send={send} muted={muted} />}
      {ph === "summary" && <FinalResults state={s} send={send} />}
      {["question", "waiting", "reveal", "leaderboard"].includes(ph) && <ReactionBar />}
      <HostControlBar game={game} />
    </GameShell>
  );
}
