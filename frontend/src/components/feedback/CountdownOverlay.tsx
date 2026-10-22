export function CountdownOverlay({n}:{n:number}){return <div className="cd" aria-live="assertive"><b key={n}>{n>0?n:"GO!"}</b></div>}
