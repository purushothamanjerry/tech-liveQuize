# TechLogicQ Live Quiz

Independent commercial live-quiz product (not connected to any other project).

## Status
- Phase 0: repo scaffold, Docker Compose (MySQL), `.env.example`, CI (done)
- Phase 1: typed React frontend on a **mock** game client (done)
- Phase 2+: Spring Boot backend, auth, DB, game engine, subscriptions (not started)

## Run the frontend
    cd frontend && npm install && npm run dev
    npm run typecheck && npm test && npm run build

## Architecture (frontend)
- `features/live-game/engine`: pure TypeScript game rules (questions, scoring, reducer, awards). No UI.
- `features/live-game/types.ts`: `GameClient` interface. The UI only talks to this.
- `features/live-game/hooks/useMockGameClient.ts`: Phase 1 adapter (local timers, simulated players).
  In Phase 3 add a STOMP adapter with the same interface; the UI does not change.
- Feature folders (`lobby`, `leaderboard`, `results`, `host-controls`) hold the screens.
- Scoring: 1000 base + up to 300 speed + 50 per streak step (cap 250). Wrong = 0.

## Phase 3 note
The browser timer and scoring here are for the demo only. The server must own phase, deadline, answers and scores.

`docs/prototype-reference.html` is the original single-file UI reference.
