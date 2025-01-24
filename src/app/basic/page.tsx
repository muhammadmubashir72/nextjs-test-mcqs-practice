"use client";
import { useState } from "react";

import { nextJsQuestions } from "./basicQuestion";

export default function NextJsQuiz() {
  const [isAnswerVisible, setIsAnswerVisible] = useState<boolean[]>(new Array(nextJsQuestions.length).fill(false));

  const handleShowAnswer = (index: number) => {
    const updatedVisibility = [...isAnswerVisible];
    updatedVisibility[index] = true;
    setIsAnswerVisible(updatedVisibility);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-gradient-to-r from-indigo-200 to-purple-300 rounded-xl shadow-lg">
      <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-8 tracking-wide">
        Next.js Quiz - Basic Level
      </h1>
      <div className="space-y-8">
        {nextJsQuestions.map((question, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-100 to-blue-300 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <p className="text-xl font-semibold text-gray-800 mb-4">
              <strong>Question {index + 1}:</strong> {question.question}
            </p>
            <div className="space-y-4 mb-6">
              {question.options.map((option, optionIndex) => (
                <div
                  key={optionIndex}
                  className="p-3 bg-white hover:bg-blue-50 rounded-lg cursor-pointer transition duration-300"
                >
                  <p className="text-lg text-gray-700">{optionIndex + 1}. {option}</p>
                </div>
              ))}
            </div>
            <button
              className="w-full py-3 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold rounded-md hover:from-green-500 hover:to-green-700 transition duration-300"
              onClick={() => handleShowAnswer(index)}
            >
              Show Answer
            </button>
            {isAnswerVisible[index] && (
              <p className="mt-4 text-xl font-semibold text-green-700">
                <strong>Answer:</strong> {question.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
