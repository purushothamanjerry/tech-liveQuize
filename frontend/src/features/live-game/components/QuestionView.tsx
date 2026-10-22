import type {GameState,Command} from "../types";import {QUESTIONS as Q} from "../engine/questions";import {CircularTimer} from "./CircularTimer";import {AnswerGrid} from "./AnswerGrid";import {WaitingExperience} from "./WaitingExperience";
const ENTRANCES=["en-spring","en-flip","en-spot","en-zoom"];
const entrance=(qi:number)=>qi%2===0?"en-slide":ENTRANCES[(qi>>1)%ENTRANCES.length]; // calm slide on most, dramatic ones selectively
export function QuestionView({state:s,send}:{state:GameState;send:(c:Command)=>void}){const q=Q[s.qi],me=s.players[0];
  return <div><div className="row" style={{justifyContent:"space-between"}}><div className="row"><span className="tag">Q {s.qi+1}/{Q.length}</span><span className="tag">{q.cat}</span><span className="tag">{q.diff}</span><span className="tag">Score {me.total}</span>{me.streak>1&&<span className="tag">🔥 {me.streak}</span>}</div><CircularTimer left={s.left} limit={s.limit}/></div>
    <div className="bar" style={{margin:"8px 0"}}><i style={{width:`${s.qi/Q.length*100}%`}}/></div>
    <h2 className={`q ${entrance(s.qi)}`} key={s.qi}>{q.q}</h2>
    {s.phase==="waiting"&&<WaitingExperience state={s}/>}
    <AnswerGrid state={s} send={send}/>{s.paused&&<p className="c tag">⏸ Paused by host</p>}</div>}
