import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";
import TestResultChart from "./TestResultChart";
import { quiz, history } from "../../assets/index.js";
import CreateQuizModal from "./CreateQuizModal";

const Exams = () => {
  const [quizModal, setQuizModal] = useState(false);

  const openQuizModal = () => {
    setQuizModal(true);
  };

  const navigate = useNavigate();

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="border-2 w-[75%]">
        <Header />

        {quizModal ? (
          <CreateQuizModal />
        ) : (
          <div className=" mx-16 flex flex-col gap-10 h-[700px]">
            <div className="border h-[50%] w-[50%]">
              <TestResultChart />
            </div>
            <p className="font-bold text-2xl">Quick Access</p>
            <div className="flex w-full justify-between h-[40%] gap-8">
              <div className="border shadow-lg shadow-purple-300/50 bg-[#490659C4]/70 px-4 py-5 h-full w-1/3 flex flex-col justify-between rounded-lg">
                <div className="font-bold text-white flex flex-col gap-3">
                  <p className="text-2xl">Overall Performance</p>
                  <div className="flex justify-between">
                    <p>Weekly Tests</p>
                    <p className="font-light">80%</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Practice Tests</p>
                    <p className="font-light">80%</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Monthly Tests</p>
                    <p className="font-light">80%</p>
                  </div>
                </div>
                <button className="bg-white py-3 text-[#490659C4]/70 font-bold rounded-2xl">
                  See Overall Results
                </button>
              </div>
              <div className="flex flex-col items-center border w-1/3 rounded-lg px-4 py-5 justify-between shadow-lg shadow-purple-300/50">
                <div className="text-2xl font-bold self-start">Create</div>
                <img src={quiz} alt="" width={150} />
                <button
                  className="bg-[#3D5EE1] py-3 text-white font-bold rounded-2xl w-full"
                  onClick={openQuizModal}
                >
                  Create a Quiz
                </button>
              </div>
              <div className="flex flex-col justify-between items-center border w-1/3 rounded-lg px-4 py-5 bg-[#DA1265] shadow-lg shadow-purple-300/50">
                <div className="text-2xl font-bold self-start text-white">
                  History
                </div>
                <img src={history} alt="" width={150} />
                <button
                  className="bg-white py-3 text-[#DA1265] font-bold rounded-2xl w-full"
                  onClick={() => navigate("history")}
                >
                  View Quiz History
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exams;
