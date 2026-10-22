import {useState, useEffect} from "react";

interface SampleQuestion {
  id: number;
  cat: string;
  q: string;
  options: string[];
  correct: number;
  explanation: string;
}

const SAMPLE_QUESTIONS: SampleQuestion[] = [
  {
    id: 1,
    cat: "Core Java & Modern JVM",
    q: "Which Java feature introduced in Java 14+ creates transparent, immutable data-carrier classes with zero boilerplate?",
    options: ["Sealed Classes", "Record Classes", "Virtual Threads", "Vector API"],
    correct: 1,
    explanation: "Records provide a compact syntax for declaring classes that are transparent holders for immutable data."
  },
  {
    id: 2,
    cat: "Real-Time Architecture",
    q: "Which protocol enables full-duplex, sub-millisecond bidirectional communication required by liveQuize?",
    options: ["HTTP Long-Polling", "WebSocket (STOMP)", "Server-Sent Events", "REST Webhooks"],
    correct: 1,
    explanation: "WebSockets maintain a persistent low-overhead TCP connection, perfect for synchronous live multiplayer buzzers."
  }
];

export function InteractiveSampleQuiz({onLaunchGame}: {onLaunchGame: () => void}) {
  const [qIndex, setQIndex] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [streak, setStreak] = useState(2);
  const [score, setScore] = useState(2450);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [lastEarned, setLastEarned] = useState<number | null>(null);

  const curQ = SAMPLE_QUESTIONS[qIndex];

  useEffect(() => {
    setStartTime(Date.now());
    setSelectedOpt(null);
    setLastEarned(null);
  }, [qIndex]);

  const handleSelect = (idx: number) => {
    if (selectedOpt !== null) return;
    setSelectedOpt(idx);

    const elapsed = Math.min(10, (Date.now() - startTime) / 1000);
    const isCorrect = idx === curQ.correct;

    if (isCorrect) {
      const speedBonus = Math.round(Math.max(0, 300 * (1 - elapsed / 10)));
      const streakBonus = Math.min(250, streak * 50);
      const earned = 1000 + speedBonus + streakBonus;
      setScore((s) => s + earned);
      setStreak((st) => st + 1);
      setLastEarned(earned);
    } else {
      setStreak(0);
      setLastEarned(0);
    }
  };

  const nextQuestion = () => {
    setQIndex((idx) => (idx + 1) % SAMPLE_QUESTIONS.length);
  };

  return (
    <section className="home-section" id="sandbox">
      <div className="section-heading-wrap">
        <span className="section-tag">Interactive Preview</span>
        <h2 className="section-title">Test Your Reaction Speed Right Now</h2>
        <p className="section-desc">
          Experience our high-velocity buzzer scoring engine. Faster correct responses earn up to 300 bonus speed points plus streak multipliers.
        </p>
      </div>

      <div className="sandbox-card">
        <div className="sandbox-header">
          <div className="sandbox-category">
            <span>🏷️</span> {curQ.cat}
          </div>
          <div className="row" style={{gap: "10px"}}>
            <div className="sandbox-streak">
              <span>🔥</span> Streak: {streak}x
            </div>
            <div className="tag" style={{background: "rgba(34, 211, 238, 0.15)", borderColor: "var(--c)", color: "var(--c)"}}>
              Score: <b>{score.toLocaleString()}</b>
            </div>
          </div>
        </div>

        <h3 className="sandbox-question-title">{curQ.q}</h3>

        <div className="sandbox-options-grid">
          {curQ.options.map((opt, i) => {
            let stateClass = "";
            if (selectedOpt !== null) {
              if (i === curQ.correct) {
                stateClass = "correct";
              } else if (i === selectedOpt) {
                stateClass = "wrong";
              }
            }
            return (
              <button
                key={i}
                type="button"
                className={`sandbox-opt-btn ${stateClass}`}
                onClick={() => handleSelect(i)}
                disabled={selectedOpt !== null}
              >
                <b>{["A", "B", "C", "D"][i]}</b>
                <span>{opt}</span>
              </button>
            );
          })}
        </div>

        {selectedOpt !== null && (
          <div className={`sandbox-feedback-box ${selectedOpt === curQ.correct ? "feedback-success" : "feedback-miss"}`}>
            <div>
              <strong>
                {selectedOpt === curQ.correct
                  ? `⚡ Correct! +${lastEarned} points awarded!`
                  : "❌ Nice try! Streak reset to 0."}
              </strong>
              <p style={{margin: "4px 0 0", fontSize: "0.88rem", opacity: 0.9}}>
                {curQ.explanation}
              </p>
            </div>
            <div className="row" style={{gap: "8px", flexShrink: 0}}>
              <button
                type="button"
                className="btn g"
                style={{padding: "8px 16px", fontSize: "0.85rem"}}
                onClick={nextQuestion}
              >
                Next Demo Question ➔
              </button>
              <button
                type="button"
                className="btn"
                style={{padding: "8px 16px", fontSize: "0.85rem"}}
                onClick={onLaunchGame}
              >
                Play in Arena
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
