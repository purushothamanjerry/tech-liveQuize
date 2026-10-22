import type {GameState,Command} from "../types";import {QUESTIONS as Q} from "./questions";import {makePlayers,botAnswer} from "./players";import {score,rank} from "./scoring";
export const initState=(limit=20):GameState=>({phase:"lobby",qi:0,limit,left:limit,paused:false,ans:null,n:3,players:makePlayers(),round:null});
const live=(s:GameState)=>s.phase==="question"||s.phase==="waiting";
function reveal(s:GameState):GameState{ if(!live(s))return s; // guard: score once
  const el=s.limit-s.left,q=Q[s.qi],order=rank(s.players),counts=[0,0,0,0];let answered=0;
  const players=s.players.map(p=>{const a=p.id===0?s.ans:(()=>{const b=botAnswer(p,s.qi,s.limit);return b.el<=el+.01?b:null})();
    const ok=!!a&&a.c===q.a,streak=ok?p.streak+1:0,pts=score(ok,a?a.el:0,s.limit,streak);if(a){counts[a.c]++;answered++}
    return {...p,prev:order.findIndex(o=>o.id===p.id),gain:pts,streak,best:Math.max(p.best,streak),total:p.total+pts,log:[...p.log,{ok,pts,el:a?a.el:null,answered:!!a}]}});
  return {...s,phase:"reveal",players,round:{counts,answered}}}
export function reducer(s:GameState,a:Command):GameState{switch(a.t){
  case "LIMIT":return s.phase==="lobby"?{...s,limit:a.v,left:a.v}:s;
  case "START":return s.phase==="lobby"?{...initState(s.limit),phase:"countdown"}:s;
  case "CD":if(s.phase!=="countdown")return s;return s.n>0?{...s,n:s.n-1}:{...s,phase:"question",left:s.limit,ans:null};
  case "PAUSE":return live(s)?{...s,paused:!s.paused}:s;
  case "TICK":{if(!live(s)||s.paused)return s;const left=Math.max(0,s.left-.1);return left<=.05?reveal({...s,left:0}):{...s,left}}
  case "ANSWER":if(s.phase!=="question"||s.paused||s.ans||a.c<0||a.c>3)return s;return {...s,phase:"waiting",ans:{c:a.c,el:s.limit-s.left}};
  case "REVEAL":return reveal(s);
  case "NEXT":if(s.phase==="reveal")return {...s,phase:"leaderboard"};
    if(s.phase==="leaderboard")return s.qi+1>=Q.length?{...s,phase:"final"}:{...s,phase:"question",qi:s.qi+1,left:s.limit,ans:null,round:null};
    if(s.phase==="final")return {...s,phase:"summary"};return s;
  case "BACK":return initState(s.limit);
  case "REPLAY":return {...initState(s.limit),phase:"countdown"};
}}
