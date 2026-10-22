import {useEffect} from "react";import type {GameState,Command} from "../types";import {QUESTIONS as Q} from "../engine/questions";
interface P{state:GameState;send:(c:Command)=>void;hide?:boolean}
export function AnswerGrid({state:s,send,hide}:P){const q=Q[s.qi],rev=s.phase==="reveal"&&!hide,locked=s.phase!=="question"||s.paused;
  useEffect(()=>{const k=(e:KeyboardEvent)=>{const i="1234".indexOf(e.key);if(i>=0)send({t:"ANSWER",c:i})};addEventListener("keydown",k);return()=>removeEventListener("keydown",k)},[send]);
  return <div className="grid" role="group" aria-label="Answers">{q.o.map((o,i)=>{const sel=s.ans?.c===i;
    const cls=`ans a${i}`+(rev?(i===q.a?" ok":" no")+(sel&&i!==q.a?" wrong":""):sel?" sel":s.ans?" dim":"");
    return <button key={i} className={cls} disabled={locked&&!rev} aria-pressed={sel} style={{animationDelay:`${i*80}ms`}} onClick={()=>send({t:"ANSWER",c:i})}><b>{"▲◆●■"[i]}</b>{o}{rev&&i===q.a?" ✓":""}{rev&&sel?(i===q.a?" (your pick)":" ✗ your pick"):""}</button>})}</div>}
