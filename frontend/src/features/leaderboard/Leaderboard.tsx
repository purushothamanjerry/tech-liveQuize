import {useEffect,useState} from "react";import type {GameState,Command} from "../live-game/types";import {QUESTIONS as Q} from "../live-game/engine/questions";import {rank} from "../live-game/engine/scoring";import {BOARD,pick} from "../live-game/messages";import {CountUp} from "../../components/animations/CountUp";
export const LEADERBOARD_AUTO_MS=7000;
export function Leaderboard({state:s,send}:{state:GameState;send:(c:Command)=>void}){const ps=s.players,r=rank(ps),[go,setGo]=useState(false),last=s.qi+1>=Q.length,nq=Q[s.qi+1],pos=(id:number)=>r.findIndex(x=>x.id===id);
  useEffect(()=>{const a=setTimeout(()=>setGo(true),700),b=setTimeout(()=>send({t:"NEXT"}),LEADERBOARD_AUTO_MS);return()=>{clearTimeout(a);clearTimeout(b)}},[s.qi,send]);
  const top=ps.map(p=>({id:p.id,m:p.prev-pos(p.id)})).filter(x=>x.m>0).sort((a,b)=>b.m-a.m||a.id-b.id)[0];
  const me=ps[0],mp=pos(0);
  const leaderChanged=ps.find(p=>pos(p.id)===0)!.prev>0,note=leaderChanged?"We have a new leader!":top&&top.m>=3?"A comeback is happening!":pick(BOARD,s.qi);
  return <div><div className="ov"/><div className="panel" style={{position:"relative",zIndex:2}}><h2 className="lbt">Standings after Q{s.qi+1}</h2><p className="msg">{note}</p>
    {top&&<span className="tag up">🚀 Biggest jump: {ps.find(p=>p.id===top.id)!.name} ▲{top.m}</span>}
    <div className="lb2">{ps.filter(p=>pos(p.id)<5).map((p,i)=>{const cur=pos(p.id),shown=go?cur:p.prev,mv=p.prev-cur;
      return <div key={p.id} className={`lr${p.id===0?" me":""}`} style={{transform:`translateY(${shown*64}px)`,animationDelay:`${i*90}ms`}}><b>#{shown+1}</b><span style={{fontSize:"1.5rem"}}>{p.emoji}</span><span>{p.name}</span>
        {p.streak>1&&<span className="tag">🔥{p.streak}</span>}{go&&p.gain>0&&<span className="up">+{p.gain}</span>}{go&&mv!==0&&<span className={mv>0?"up":"dn"}>{mv>0?`▲${mv}`:`▼${-mv}`}</span>}<span className="n"><CountUp v={p.total} from={p.total-p.gain}/></span></div>})}</div>
    {mp>=5&&<div className="lr me" style={{position:"relative",marginTop:8,height:48}}><b>#{mp+1}</b><span>{me.emoji} You</span><span className="n">{me.total}</span></div>}
    <p style={{margin:"12px 0 6px"}}>{last?"🏁 Final results are next!":`Next up: Q${s.qi+2} · ${nq.cat} · ${nq.diff}`}</p><div className="bar autobar"><i/></div>
    <div className="row c" style={{marginTop:10}}><button className="btn" onClick={()=>send({t:"NEXT"})}>Skip animation / Continue ▸</button></div></div></div>}
