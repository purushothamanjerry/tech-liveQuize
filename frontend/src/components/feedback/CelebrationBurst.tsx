import {hash} from "../../features/live-game/engine/scoring";
const C=["#fbbf24","#22d3ee","#e879f9","#22c55e","#3b82f6"];
/** Short particle burst. Deterministic positions; hidden from assistive tech. */
export function CelebrationBurst({count=16,seed=0}:{count?:number;seed?:number}){return <div aria-hidden="true">{Array.from({length:count},(_,i)=>{const a=i/count*6.283,d=110+hash(i,seed)*150;
  return <span key={i} className="bp" style={{["--x" as string]:`${Math.cos(a)*d}px`,["--y" as string]:`${Math.sin(a)*d}px`,background:C[i%5]}}/>})}</div>}
