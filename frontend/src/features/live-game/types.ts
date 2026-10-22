export type Phase = "lobby"|"countdown"|"question"|"waiting"|"reveal"|"leaderboard"|"final"|"summary";
export interface Question { id:number; q:string; cat:string; diff:string; o:string[]; a:number; e:string }
export interface RoundLog { ok:boolean; pts:number; el:number|null; answered:boolean }
export interface Player { id:number; name:string; emoji:string; skill:number; total:number; gain:number; streak:number; best:number; prev:number; log:RoundLog[] }
export interface Answer { c:number; el:number }
export interface RoundStats { counts:number[]; answered:number }
export interface GameState { phase:Phase; qi:number; limit:number; left:number; paused:boolean; ans:Answer|null; n:number; players:Player[]; round:RoundStats|null }
export type Command = {t:"LIMIT";v:number}|{t:"START"}|{t:"CD"}|{t:"PAUSE"}|{t:"TICK"}|{t:"ANSWER";c:number}|{t:"REVEAL"}|{t:"NEXT"}|{t:"BACK"}|{t:"REPLAY"};
/** The UI only talks to this interface. Phase 1: mock. Phase 3: STOMP/WebSocket to the server. */
export interface GameClient { state:GameState; send:(c:Command)=>void; muted:boolean; setMuted:(m:boolean)=>void }
