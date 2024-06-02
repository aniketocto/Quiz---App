import React, { useContext } from "react";
import QuizContext from "../Utils/Contexts";


const MainMenu = () => {
  const { setGameState, setName } = useContext(QuizContext);
  return (
    <div className="w-[500px] h-[500px] gap-5 rounded-lg flex bg-[#] justify-center items-center flex-col">
      <input
        className="w-96 p-5 rounded-xl h-14   "
        placeholder="Enter your name"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className=" w-72 h-14 m-1 text-lg cursor-pointer  bg-[#FFFDB5] rounded-md"
        onClick={() => setGameState("quiz")}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default MainMenu;
