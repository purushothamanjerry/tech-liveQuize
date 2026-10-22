import type {Player} from "../types";
/** 1000 base + up to 300 speed + 50 per streak step (cap 250). Wrong or no answer = 0. */
export const BASE=1000, SPEED=300, STREAK_STEP=50, STREAK_CAP=250;
export const score=(ok:boolean,el:number,limit:number,streak:number)=>
  ok?BASE+Math.round(SPEED*Math.max(0,1-el/limit))+Math.min(STREAK_CAP,STREAK_STEP*Math.max(0,streak-1)):0;
export const hash=(a:number,b:number)=>{let x=(Math.imul(a+1,2654435761)^Math.imul(b+7,40503))>>>0;x=Math.imul(x^(x>>>15),2246822519)>>>0;return (x%1000)/1000};
export const rank=<T extends Pick<Player,"id"|"total">>(ps:T[])=>[...ps].sort((a,b)=>b.total-a.total||a.id-b.id);
