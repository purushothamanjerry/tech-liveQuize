import {useEffect,useRef,useState} from "react";
export function useCountUp(v:number,from?:number){const[x,setX]=useState(from??v),r=useRef(from??v);
  useEffect(()=>{const f=r.current,t0=performance.now();let id=0;const st=(n:number)=>{const k=Math.min(1,(n-t0)/800);setX(Math.round(f+(v-f)*k));if(k<1)id=requestAnimationFrame(st);else r.current=v};id=requestAnimationFrame(st);return()=>cancelAnimationFrame(id)},[v]);return x}
