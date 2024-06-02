import React, { useContext, useState } from "react";
import { Questions } from "../Utils/Questions";
import { motion } from "framer-motion";
import QuizContext from "../Utils/Contexts";

const Quiz = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [chosenOptions, setChosenOptions] = useState(
    Array(Questions.length).fill("")
  );

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === chosenOptions[currentQuestion]) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const prevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer === chosenOptions[currentQuestion]) {
      setScore(score + 1);
    }
    setGameState("result");
  };

  const chooseOption = (option) => {
    const updatedChosenOptions = [...chosenOptions];
    updatedChosenOptions[currentQuestion] = option;
    setChosenOptions(updatedChosenOptions);
  };

  const allQuestionsAnswered = chosenOptions.every((option) => option !== "");

  return (
    <div
      className="w-[500px] h-auto text-white rounded-lg flex bg-[#6FDCE3] p-10
     items-center flex-col"
    >
      <h1 className=" text-white text-4xl bg-[#5C88C4] p-4 rounded-xl">
        {Questions[currentQuestion].question}
      </h1>
      <div className="flex flex-col w-full mt-5">
        <motion.button
          className={`p-4 rounded-2xl text-black cursor-pointer border-none mb-2 ${
            chosenOptions[currentQuestion] === "A"
              ? "bg-[#FFD700]"
              : "bg-[#FFFDB5]"
          }`}
          whileTap={{ scale: 0.85 }}
          onClick={() => chooseOption("A")}
        >
          {Questions[currentQuestion].optionA}
        </motion.button>
        <motion.button
          className={`p-4 rounded-2xl text-black cursor-pointer border-none mb-2 ${
            chosenOptions[currentQuestion] === "B"
              ? "bg-[#FFD700]"
              : "bg-[#FFFDB5]"
          }`}
          whileTap={{ scale: 0.85 }}
          onClick={() => chooseOption("B")}
        >
          {Questions[currentQuestion].optionB}
        </motion.button>
        <motion.button
          className={`p-4 rounded-2xl text-black cursor-pointer border-none mb-2 ${
            chosenOptions[currentQuestion] === "C"
              ? "bg-[#FFD700]"
              : "bg-[#FFFDB5]"
          }`}
          whileTap={{ scale: 0.85 }}
          onClick={() => chooseOption("C")}
        >
          {Questions[currentQuestion].optionC}
        </motion.button>
        <motion.button
          className={`p-4 rounded-2xl text-black cursor-pointer border-none mb-2 ${
            chosenOptions[currentQuestion] === "D"
              ? "bg-[#FFD700]"
              : "bg-[#FFFDB5]"
          }`}
          whileTap={{ scale: 0.85 }}
          onClick={() => chooseOption("D")}
        >
          {Questions[currentQuestion].optionD}
        </motion.button>
      </div>

      {currentQuestion == Questions.length - 1 ? (
        <div className="flex gap-2">
          <button
            onClick={prevQuestion}
            className={`p-2 w-56 mt-5 mb-2 h-11 rounded-2xl cursor-pointer border-none ${
              currentQuestion === 0
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-[#5C2FC2]"
            }`}
            disabled={currentQuestion === 0}
          >
            Previous Question
          </button>
          <button
            className={`p-2 w-56 mt-5 mb-2 h-11 rounded-2xl cursor-pointer border-none bg-[#5C2FC2] ${
              !allQuestionsAnswered
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-[#5C2FC2]"
            }`}
            onClick={finishQuiz}
            disabled={!allQuestionsAnswered}
            title={
              !allQuestionsAnswered
                ? "Please answer all questions before finishing"
                : ""
            }
          >
            Finish Quiz
          </button>
        </div>
      ) : (
        <div className="flex gap-2">
          <button
            onClick={prevQuestion}
            className={`p-2 w-56 mt-5 mb-2 h-11 rounded-2xl cursor-pointer border-none ${
              currentQuestion === 0
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-[#5C2FC2]"
            }`}
            disabled={currentQuestion === 0}
          >
            Previous Question
          </button>
          <button
            onClick={nextQuestion}
            className="p-2 w-56 mt-5 mb-2 h-11 rounded-2xl cursor-pointer border-none bg-[#5C2FC2] "
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
