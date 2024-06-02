import React, { useContext, useState } from "react";
import QuizContext from "../Utils/Contexts";
import { Questions } from "../Utils/Questions";

const EndScreen = () => {
  const { score, setScore, setGameState, name, setName } =
    useContext(QuizContext);
  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
    setName("");
  };
  return (
    <div
      className="w-[500px] h-auto rounded-lg flex bg-[#6FDCE3] p-5
    items-center flex-col"
    >
      <h1 className=" text-white text-xl bg-[#5C88C4] w-96 text-center p-2 rounded-xl">
        Quiz Finished
      </h1>
      <div className="flex flex-col justify-center items-center mt-5 bg-[#FFFDB5] p-5 rounded-2xl w-full">
        <h1 className=" text-2xl "> Thank You, {name}</h1>
        <p className=" text-xl ">
          Your Score is: {score} out off {Questions.length}{" "}
        </p>
      </div>
      <button
        className="p-2 w-56 mt-5 mb-2 h-11 rounded-2xl cursor-pointer border-none bg-[#5C2FC2] "
        onClick={restartQuiz}
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default EndScreen;
