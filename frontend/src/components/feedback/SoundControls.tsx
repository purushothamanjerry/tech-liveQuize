export function SoundControls({muted,setMuted}:{muted:boolean;setMuted:(m:boolean)=>void}){
  return <button className="btn g" aria-pressed={!muted} aria-label={muted?"Turn sound on":"Turn sound off"} onClick={()=>setMuted(!muted)}>{muted?"🔇 Sound off":"🔊 Sound on"}</button>}
