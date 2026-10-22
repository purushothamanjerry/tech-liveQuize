import {useEffect,useState} from "react";import type {GameState,Command} from "../live-game/types";import {QUESTIONS as Q} from "../live-game/engine/questions";import {LOBBY,pick} from "../live-game/messages";import {hash} from "../live-game/engine/scoring";import {CountUp} from "../../components/animations/CountUp";
export function GameLobby({state:s,send}:{state:GameState;send:(c:Command)=>void}){const[joined,setJ]=useState(4),[m,setM]=useState(0);
  useEffect(()=>{if(joined>=s.players.length)return;const t=setTimeout(()=>setJ(j=>j+1),900);return()=>clearTimeout(t)},[joined,s.players.length]);
  useEffect(()=>{const t=setInterval(()=>setM(x=>x+1),3200);return()=>clearInterval(t)},[]);
  return <div className="panel c" style={{position:"relative",overflow:"hidden"}}>
    {Array.from({length:10},(_,i)=><span key={i} className="fp" aria-hidden="true" style={{left:`${hash(i,1)*95}%`,top:`${hash(i,2)*90}%`,animationDelay:`${hash(i,3)*3}s`}}>{["◆","●","▲","■"][i%4]}</span>)}
    <p className="tag">DEMO ROOM · simulated players</p><h2 className="logo lobby-title">Java Brain Arena</h2>
    <span className="mascot" aria-hidden="true">🤖</span><p className="msg" key={m} role="status">{pick(LOBBY,m)}</p>
    <p>Join with PIN</p><div className="pin">482 913</div>
    <div className="row c" style={{margin:"16px 0"}}>{s.players.slice(0,joined).map(p=><div className="pl" key={p.id}><span>{p.emoji}</span><small>{p.name}{p.id?" ✓":""}</small></div>)}</div>
    <p><b><CountUp v={joined}/></b> of {s.players.length} demo players ready · {Q.length} questions · {s.limit}s each</p>
    <div className="row c" style={{margin:"10px 0"}}>{Q.slice(0,4).map(q=><span className="tag" key={q.id}>{q.cat}</span>)}<span className="tag">+more</span></div>
    <button className="btn big" onClick={()=>send({t:"START"})}>▶ Start Game</button></div>}
