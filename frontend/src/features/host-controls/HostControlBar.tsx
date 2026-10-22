import type {GameClient} from "../live-game/types";import {QUESTIONS as Q} from "../live-game/engine/questions";
export function HostControlBar({game}:{game:GameClient}){const {state:s,send,muted,setMuted}=game,live=s.phase==="question"||s.phase==="waiting",ask=(m:string,c:Parameters<typeof send>[0])=>{if(confirm(m))send(c)};
  return <div className="host"><div className="row"><span className="logo">HOST</span>
    {s.phase==="lobby"&&<label>Timer <select value={s.limit} onChange={e=>send({t:"LIMIT",v:+e.target.value})} style={{minHeight:36}}>{[10,20,30].map(v=><option key={v} value={v}>{v}s</option>)}</select></label>}
    {live&&<><button className="btn g" onClick={()=>send({t:"PAUSE"})}>{s.paused?"▶ Resume":"⏸ Pause"}</button><button className="btn g" onClick={()=>send({t:"REVEAL"})}>⏭ End & reveal</button></>}
    {(s.phase==="reveal"||s.phase==="leaderboard")&&<button className="btn" onClick={()=>send({t:"NEXT"})}>{s.phase==="reveal"?"Leaderboard ▸":s.qi+1>=Q.length?"Finish ▸":"Next question ▸"}</button>}
    <button className="btn g" onClick={()=>setMuted(!muted)}>{muted?"🔇 Unmute":"🔊 Mute"}</button>
    {s.phase!=="lobby"&&<><button className="btn g" onClick={()=>ask("Restart the game from the beginning?",{t:"REPLAY"})}>↻ Restart</button><button className="btn g" onClick={()=>ask("Exit to the lobby? Progress will be lost.",{t:"BACK"})}>⏏ Exit</button></>}</div></div>}
