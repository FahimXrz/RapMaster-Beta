import React, { useState } from "react";

export default function CharacterCreation({ onBegin }: { onBegin: () => void }) {
  const [name, setName] = useState("Rookie");
  const [style, setStyle] = useState("Boom Bap");
  const [energy, setEnergy] = useState(10);

  return (
    <div className="card">
      <h2>Create Your Artist</h2>
      <div className="grid" style={{ marginTop: 8 }}>
        <div>
          <label>Name</label>
          <input value={name} onChange={e=>setName(e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 10, border: "1px solid rgba(255,255,255,0.15)", background:"rgba(0,0,0,0.2)", color:"white" }} />
        </div>
        <div>
          <label>Style</label>
          <select value={style} onChange={e=>setStyle(e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 10 }}>
            <option>Boom Bap</option>
            <option>Trap</option>
            <option>Drill</option>
            <option>Lo-fi</option>
          </select>
        </div>
        <div>
          <label>Energy</label>
          <input type="number" value={energy} onChange={e=>setEnergy(parseInt(e.target.value||'0'))} min={0} max={100} style={{ width: "100%", padding: 10, borderRadius: 10 }} />
        </div>
      </div>
      <div style={{ display:"flex", gap:12, marginTop:16 }}>
        <button className="btn" onClick={onBegin}>Enter Studio</button>
      </div>
    </div>
  );
}
