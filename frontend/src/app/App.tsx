import {useMockGameClient} from "../features/live-game/hooks/useMockGameClient";import {GameShell} from "../components/layout/GameShell";import {CountdownOverlay} from "../components/feedback/CountdownOverlay";import {ReactionBar} from "../components/feedback/ReactionBar";
import {GameLobby} from "../features/lobby/GameLobby";import {QuestionView} from "../features/live-game/components/QuestionView";import {RoundResults} from "../features/results/RoundResults";import {Leaderboard} from "../features/leaderboard/Leaderboard";import {ChampionReveal} from "../features/results/ChampionReveal";import {FinalResults} from "../features/results/FinalResults";import {SoundControls} from "../components/feedback/SoundControls";import {QUESTIONS} from "../features/live-game/engine/questions";import {HostControlBar} from "../features/host-controls/HostControlBar";
export function App(){const game=useMockGameClient(),{state:s,send,muted}=game,ph=s.phase;
  if(QUESTIONS.length===0)return <GameShell><div className="panel c"><h2>No questions yet</h2><p>Add questions to this quiz before starting a game.</p></div></GameShell>;
  return <GameShell actions={<SoundControls muted={game.muted} setMuted={game.setMuted}/>}>
    {ph==="countdown"&&<CountdownOverlay n={s.n}/>}{ph==="lobby"&&<GameLobby state={s} send={send}/>}
    {(ph==="question"||ph==="waiting")&&<QuestionView state={s} send={send}/>}{ph==="reveal"&&<RoundResults state={s} send={send}/>}
    {ph==="leaderboard"&&<Leaderboard state={s} send={send}/>}{ph==="final"&&<ChampionReveal state={s} send={send} muted={muted}/>}{ph==="summary"&&<FinalResults state={s} send={send}/>}
    {["question","waiting","reveal","leaderboard"].includes(ph)&&<ReactionBar/>}<HostControlBar game={game}/></GameShell>}
