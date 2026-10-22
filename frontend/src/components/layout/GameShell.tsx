import type {ReactNode} from "react";

export function GameShell({
  children,
  actions,
  onBackHome
}: {
  children: ReactNode;
  actions?: ReactNode;
  onBackHome?: () => void;
}) {
  return (
    <div>
      <header className="row" style={{justifyContent: "space-between", marginBottom: 16}}>
        <div className="row" style={{gap: "12px"}}>
          {onBackHome && (
            <button
              type="button"
              className="btn g"
              onClick={onBackHome}
              title="Return to Product Home"
              style={{padding: "6px 14px", fontSize: "0.85rem", minHeight: "36px"}}
            >
              ← Home
            </button>
          )}
          <h1
            className="logo"
            style={{cursor: onBackHome ? "pointer" : "default"}}
            onClick={onBackHome}
            title={onBackHome ? "Back to Home" : undefined}
          >
            liveQuize <span style={{fontSize: "0.8rem", opacity: 0.8, fontWeight: 600}}>by techlogicQ</span>
          </h1>
        </div>
        <div className="row">
          {actions}
          <span className="tag">Live Arena</span>
        </div>
      </header>
      {children}
    </div>
  );
}
