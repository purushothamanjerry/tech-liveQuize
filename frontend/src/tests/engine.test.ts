import {describe,it,expect} from "vitest";import {score,rank} from "../features/live-game/engine/scoring";import {reducer,initState} from "../features/live-game/engine/reducer";import type {GameState} from "../features/live-game/types";
const inQuestion=():GameState=>({...initState(20),phase:"question"});
describe("scoring",()=>{
  it("gives 1300 for an instant correct answer, 0 for wrong",()=>{expect(score(true,0,20,1)).toBe(1300);expect(score(false,1,20,0)).toBe(0)});
  it("adds a capped streak bonus",()=>{expect(score(true,20,20,3)).toBe(1100);expect(score(true,20,20,50)).toBe(1250)});
  it("ranks by total then id",()=>{expect(rank([{id:2,total:5},{id:1,total:5},{id:3,total:9}]).map(p=>p.id)).toEqual([3,1,2])});});
describe("reducer",()=>{
  it("ignores a second answer",()=>{let s=reducer(inQuestion(),{t:"ANSWER",c:1});const first=s.ans;s=reducer(s,{t:"ANSWER",c:2});expect(s.ans).toEqual(first)});
  it("scores a round only once",()=>{let s=reducer(inQuestion(),{t:"ANSWER",c:1});s=reducer(s,{t:"REVEAL"});const t=s.players[0].total;s=reducer(s,{t:"REVEAL"});expect(s.players[0].total).toBe(t);expect(s.players[0].log).toHaveLength(1)});
  it("restart fully resets",()=>{let s=reducer(inQuestion(),{t:"ANSWER",c:1});s=reducer(s,{t:"REVEAL"});s=reducer(s,{t:"REPLAY"});expect(s.phase).toBe("countdown");expect(s.players.every(p=>p.total===0&&p.log.length===0)).toBe(true)});});
import {streakMsg,resultMsg} from "../features/live-game/messages";
describe("messages",()=>{it("streak tiers",()=>{expect(streakMsg(1)).toBeNull();expect(streakMsg(3)).toMatch(/fire/);expect(streakMsg(10)).toMatch(/BEYOND/)});
  it("encourages every rank",()=>{expect(resultMsg(1,90)).toMatch(/champion/);expect(resultMsg(9,10)).toMatch(/comeback/)})});
