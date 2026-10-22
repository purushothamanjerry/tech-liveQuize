import {useRef,useState} from "react";
export function ReactionBar(){const[f,setF]=useState<{id:number;e:string;l:number}[]>([]),last=useRef(0);
  const go=(e:string)=>{const n=Date.now();if(n-last.current<700)return;last.current=n;setF(x=>[...x,{id:n,e,l:10+(n%80)}]);setTimeout(()=>setF(x=>x.filter(y=>y.id!==n)),2000)};
  return <div className="row c" style={{marginTop:16}}>{["🔥","😂","🤯","👏","❤️","🤔"].map(e=><button key={e} className="btn g" aria-label={`React ${e}`} onClick={()=>go(e)}>{e}</button>)}{f.map(x=><span key={x.id} className="fl" style={{left:`${x.l}%`}}>{x.e}</span>)}</div>}
