import {useEffect,useState} from "react";import type {GameState,Command} from "../live-game/types";import {QUESTIONS as Q} from "../live-game/engine/questions";import {AnswerGrid} from "../live-game/components/AnswerGrid";import {CountUp} from "../../components/animations/CountUp";import {CelebrationBurst} from "../../components/feedback/CelebrationBurst";import {pick,CORRECT,WRONG,streakMsg} from "../live-game/messages";
export const REVEAL_AUTO_MS=9000;
export function RoundResults({state:s,send}:{state:GameState;send:(c:Command)=>void}){const q=Q[s.qi],r=s.round!,me=s.players[0],lg=me.log[me.log.length-1],mx=Math.max(1,...r.counts),[st,setSt]=useState(0);
  useEffect(()=>{const a=setTimeout(()=>setSt(1),900),b=setTimeout(()=>setSt(2),1300),c=setTimeout(()=>send({t:"NEXT"}),REVEAL_AUTO_MS);return()=>{clearTimeout(a);clearTimeout(b);clearTimeout(c)}},[s.qi,send]);
  const msg=!lg.answered?"Time's up! The clock won this round.":lg.ok?(streakMsg(me.streak)??pick(CORRECT,s.qi)):pick(WRONG,s.qi),face=!lg.answered?"⏰":lg.ok?"🥳":"🫣";
  return <div><p className="tag">Round complete!</p><h2 className="q">{q.q}</h2><AnswerGrid state={s} send={send} hide={st<1}/>
    {st<1?<p className="suspense">Locking in answers…</p>:<div className="panel" style={{marginTop:14}}>
      {lg.ok&&<CelebrationBurst key={s.qi} seed={s.qi} count={me.streak>=3?28:16}/>}
      <div className={`fb ${lg.ok?"fb-ok":"fb-no"}`}><span className="mascot" aria-hidden="true">{face}</span><p className="msg" role="status">{lg.ok?"✓ ":lg.answered?"✗ ":"⏱ "}{msg}{me.streak>1?` · 🔥 streak ${me.streak}`:""}</p></div>
      {lg.ok&&<b className="pts">+<CountUp v={lg.pts} from={0}/></b>}<p>{q.e}</p>
      <div className="dist">{r.counts.map((c,i)=><div key={i}>{c}<i style={{height:st>=2?`${c/mx*110}px`:"4px",background:i===q.a?"var(--ok)":"#ef444499"}}/>{"▲◆●■"[i]}</div>)}</div>
      <small>✅ {r.counts[q.a]} correct · ❌ {r.answered-r.counts[q.a]} incorrect · ⏱ {s.players.length-r.answered} no answer (demo class)</small></div>}
    <div className="row c" style={{marginTop:12}}><button className="btn" onClick={()=>send({t:"NEXT"})}>Continue ▸</button></div></div>}
