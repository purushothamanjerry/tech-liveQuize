import type {Player} from "../types";import {QUESTIONS as Q} from "./questions";import {rank} from "./scoring";
export const correct=(p:Player)=>p.log.filter(l=>l.ok).length;
/** Only awards computable from the game log. */
export function computeAwards(ps:Player[]){const r=rank(ps),r0=[...ps].sort((a,b)=>b.log[0].pts-a.log[0].pts||a.id-b.id);
  const imp=ps.map(p=>({p,v:r0.findIndex(x=>x.id===p.id)-r.findIndex(x=>x.id===p.id)})).sort((a,b)=>b.v-a.v||a.p.id-b.p.id)[0];
  const bs=[...ps].sort((a,b)=>b.best-a.best||a.id-b.id)[0],ac=[...ps].sort((a,b)=>correct(b)-correct(a)||b.total-a.total)[0];
  const fast=ps.flatMap(p=>p.log.filter(l=>l.ok&&l.el!=null).map(l=>({p,el:l.el as number}))).sort((a,b)=>a.el-b.el)[0];
  return [["🔥","Longest streak",`${bs.name} · ${bs.best}`],imp.v>0?["🚀","Most improved",`${imp.p.name} · +${imp.v} ranks`]:null,
    ["🎯","Accuracy champion",`${ac.name} · ${correct(ac)}/${Q.length}`],fast?["⚡","Fastest correct",`${fast.p.name} · ${fast.el.toFixed(1)}s`]:null].filter(Boolean) as string[][]}
