import { useState, useContext } from "react";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import QuizContext from "./Utils/Contexts";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");

  return (
    <div className="flex justify-center items-center flex-col font-sans">
      <h1 className="text-3xl m-8 border border-none bg-[#FFFDB5] rounded-xl p-3 w-52 text-center">
        Quiz App
      </h1>

      <QuizContext.Provider
        value={{ gameState, setGameState, score, setScore, name, setName }}
      >
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "result" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
