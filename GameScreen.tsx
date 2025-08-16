import React, { useState } from "react";

function Stat({ label, value }: { label: string; value: number }){
  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent:"space-between" }}>
        <span className="muted">{label}</span>
        <b>{value}</b>
      </div>
    </div>
  );
}

export default function GameScreen(){
  const [fans, setFans] = useState(100);
  const [money, setMoney] = useState(50);
  const [energy, setEnergy] = useState(10);
  const [songs, setSongs] = useState<string[]>([]);

  const createSong = () => {
    if(energy <= 0) return alert("No energy! Come back next week.");
    const title = "Track #" + (songs.length + 1);
    setSongs([...songs, title]);
    setFans(fans + Math.floor(10 + Math.random()*30));
    setMoney(money + Math.floor(5 + Math.random()*25));
    setEnergy(energy - 1);
  };

  const nextWeek = () => setEnergy(Math.min(energy + 3, 20));

  return (
    <div className="grid">
      <Stat label="Fans" value={fans} />
      <Stat label="Money" value={money} />
      <Stat label="Energy" value={energy} />

      <div className="card" style={{ gridColumn: "1 / -1" }}>
        <h3>Studio</h3>
        <p className="muted">Create songs and grow your audience.</p>
        <div style={{ display:"flex", gap:12, marginTop: 12 }}>
          <button className="btn" onClick={createSong}>Create Song</button>
          <button className="btn" onClick={nextWeek}>Next Week</button>
        </div>

        <ul>
          {songs.map((s, i)=>(<li key={i}>{s}</li>))}
        </ul>
      </div>
    </div>
  );
}
