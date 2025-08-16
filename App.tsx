import React, { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import CharacterCreation from "./components/CharacterCreation";
import GameScreen from "./components/GameScreen";

export default function App() {
  const [stage, setStage] = useState<"splash"|"create"|"game">("splash");

  return (
    <div className="container">
      {stage === "splash" && <SplashScreen onStart={() => setStage("create")} />}
      {stage === "create" && <CharacterCreation onBegin={() => setStage("game")} />}
      {stage === "game" && <GameScreen />}
    </div>
  );
}
