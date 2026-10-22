export function ArchitectureSection() {
  return (
    <section className="home-section" id="architecture">
      <div className="section-heading-wrap">
        <span className="section-tag">System Design</span>
        <h2 className="section-title">Engineered by techlogicQ</h2>
        <p className="section-desc">
          Designed with modularity and clean architectural boundaries. Built to seamlessly transition from in-memory mock adapters to distributed enterprise clusters.
        </p>
      </div>

      <div className="architecture-card">
        <div className="arch-columns">
          <div className="arch-col">
            <h4>
              <span>⚡</span> Frontend Tier (React 18 & Vite)
            </h4>
            <ul className="arch-list">
              <li>
                <span className="arch-check">✓</span>
                <div>
                  <strong>Pure TypeScript Game Engine:</strong> Deterministic state reducer, scoring algorithms, and streak curves isolated from UI components.
                </div>
              </li>
              <li>
                <span className="arch-check">✓</span>
                <div>
                  <strong>Pluggable GameClient Contract:</strong> The entire UI communicates via a typed <code>GameClient</code> interface (Mock today, STOMP tomorrow).
                </div>
              </li>
              <li>
                <span className="arch-check">✓</span>
                <div>
                  <strong>Synthesizer Audio Effects:</strong> Built-in procedural Web Audio synthesizer with zero external MP3 payload overhead.
                </div>
              </li>
              <li>
                <span className="arch-check">✓</span>
                <div>
                  <strong>Responsive 60 FPS Animations:</strong> GPU-accelerated CSS keyframes and spring physics for smooth podium reveals.
                </div>
              </li>
            </ul>
          </div>

          <div className="arch-col">
            <h4>
              <span>🛡️</span> Backend & Protocol Tier (Spring Boot)
            </h4>
            <ul className="arch-list">
              <li>
                <span className="arch-check">✓</span>
                <div>
                  <strong>STOMP over WebSocket:</strong> Bi-directional full-duplex communication channels delivering sub-50ms round synchronization.
                </div>
              </li>
              <li>
                <span className="arch-check">✓</span>
                <div>
                  <strong>Virtual Threads (Project Loom):</strong> Java 21 lightweight concurrency capable of scaling to 50k+ connected live sockets per instance.
                </div>
              </li>
              <li>
                <span className="arch-check">✓</span>
                <div>
                  <strong>Server-Authoritative Game Clock:</strong> Server validates all answer timestamps and buzzers to eliminate client-side cheating.
                </div>
              </li>
              <li>
                <span className="arch-check">✓</span>
                <div>
                  <strong>Relational & Cache Persistence:</strong> MySQL for persistent quiz banks, user accounts, and Redis for volatile in-flight rooms.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
