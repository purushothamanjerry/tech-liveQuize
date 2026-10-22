let ctx:AudioContext|undefined;
export const beep=(f:number,muted:boolean)=>{if(muted)return;try{ctx=ctx||new AudioContext();const o=ctx.createOscillator(),g=ctx.createGain();o.frequency.value=f;g.gain.value=.05;o.connect(g);g.connect(ctx.destination);o.start();o.stop(ctx.currentTime+.12)}catch{/* audio unavailable: silent fallback */}};
const SFX={select:[440],correct:[660,880],wrong:[260,210],board:[520,620],win:[523,659,784,1047]};
/** Short synthesized effects. Muted by default; no audio files needed. */
export const sfx=(n:keyof typeof SFX,muted:boolean)=>SFX[n].forEach((f,i)=>setTimeout(()=>beep(f,muted),i*130));
