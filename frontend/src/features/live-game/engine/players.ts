import type {Player,Answer} from "../types";import {QUESTIONS} from "./questions";import {hash} from "./scoring";
// DEMO participants (simulated). Real players come from the server later.
const BOTS:[string,string][]=[["Aarav","🦊"],["Meena","🐼"],["Kavin","🐯"],["Divya","🦄"],["Ravi","🐸"],["Sneha","🦉"],["Arun","🐙"],["Nila","🐱"],["Vijay","🐲"],["Priya","🦋"]];
export const makePlayers=():Player[]=>[{id:0,name:"You",emoji:"😎",skill:0},...BOTS.map((b,i)=>({id:i+1,name:b[0],emoji:b[1],skill:.45+((i*37)%50)/100}))]
  .map(p=>({...p,total:0,gain:0,streak:0,best:0,prev:0,log:[]}));
/** Deterministic simulated answer for a bot. */
export const botAnswer=(p:Player,qi:number,limit:number):Answer=>{const q=QUESTIONS[qi],ok=hash(p.id,qi)<p.skill;
  return {c:ok?q.a:(q.a+1+Math.floor(hash(p.id,qi+99)*3))%4, el:1.5+hash(p.id,qi+7)*limit*.8}};
