import {useEffect,useState} from "react";import type {GameState} from "../types";import {pick,WAIT} from "../messages";
/** Shown after an answer is submitted. Uses only real local data (time left); no invented class progress. */
export function WaitingExperience({state:s}:{state:GameState}){const[i,setI]=useState(0);
  useEffect(()=>{const t=setInterval(()=>setI(x=>x+1),3500);return()=>clearInterval(t)},[]);
  return <div className="panel c" style={{marginBottom:14}}><span className="mascot" aria-hidden="true">🧠</span>
    <p className="msg" key={i} role="status">{pick(WAIT,s.qi*3+i)}</p><b>✓ Answer submitted ({"ABCD"[s.ans?.c??0]})</b>
    <div className="bar" style={{margin:"8px 0"}}><i style={{width:`${s.left/s.limit*100}%`}}/></div>
    <small>Time left in this round · Demo mode: results appear when the timer ends or the host reveals.</small></div>}
