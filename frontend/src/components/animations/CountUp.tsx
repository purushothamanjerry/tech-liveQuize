import {useCountUp} from "../../hooks/useCountUp";
export function CountUp({v,from}:{v:number;from?:number}){return <span>{useCountUp(v,from)}</span>}
