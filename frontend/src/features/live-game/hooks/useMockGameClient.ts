import {useCallback,useEffect,useReducer,useRef,useState} from "react";import type {Command,GameClient} from "../types";import {reducer,initState} from "../engine/reducer";import {beep,sfx} from "../../../utils/sound";
export function useMockGameClient():GameClient{const[state,dispatch]=useReducer(reducer,undefined,()=>initState(20)),[muted,setMuted]=useState(true),mref=useRef(muted),ph=state.phase;mref.current=muted;
  const send=useCallback((c:Command)=>{if(c.t==="ANSWER")sfx("select",mref.current);dispatch(c)},[]);
  useEffect(()=>{if(ph!=="countdown")return;beep(520,mref.current);const t=setInterval(()=>dispatch({t:"CD"}),900);return()=>clearInterval(t)},[ph]);
  useEffect(()=>{if((ph!=="question"&&ph!=="waiting")||state.paused)return;const t=setInterval(()=>dispatch({t:"TICK"}),100);return()=>clearInterval(t)},[ph,state.paused]);
  useEffect(()=>{if(ph==="reveal")sfx(state.players[0].log.slice(-1)[0].ok?"correct":"wrong",mref.current);else if(ph==="leaderboard")sfx("board",mref.current);else if(ph==="final")sfx("win",mref.current)},[ph]);
  return {state,send,muted,setMuted}}
