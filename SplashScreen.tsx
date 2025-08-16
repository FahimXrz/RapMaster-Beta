import React from "react";

export default function SplashScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="card" style={{ textAlign: "center" }}>
      <h1 style={{ marginTop: 8, marginBottom: 8 }}>🎤 RapMaster Simulator</h1>
      <p className="muted">Build your rapper, drop tracks, grow fans, win awards.</p>
      <div style={{ marginTop: 16 }}>
        <button className="btn" onClick={onStart}>Start New Career</button>
      </div>
    </div>
  );
}
