import type {ReactNode} from "react";
export function GameShell({children,actions}:{children:ReactNode;actions?:ReactNode}){return <div><header className="row" style={{justifyContent:"space-between",marginBottom:12}}><h1 className="logo">TECHLOGICQ ⚡ LIVE</h1><div className="row">{actions}<span className="tag">Demo data · no backend</span></div></header>{children}</div>}
