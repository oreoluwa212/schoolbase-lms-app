import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const GetStarted = () => {
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  const handleProceedClick = () => {
    switch (activeButton) {
      case "applicant":
        navigate("/get-started/applicantregistration");
        break;
      case "student":
        navigate("/student/dashboard");
        break;
      case "teacher":
        navigate("/get-started/teacher/signup");
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-blueBg h-[100vh] flex flex-col ">
      <div className="px-4 py-2">
        <Link to={"/"}>
          <h1 className="font-itim font-extrabold text-[36px] text-primary ">
            SchoolBase
          </h1>
        </Link>
      </div>
      <div className="flex w-full h-full justify-center items-center gap-10">
        <div className="bg-white w-[70%] mds:w-[50%] lgss:w-[40%] lgss:h-[60vh] h-[80vh] shadow-lg shadow-black/40 rounded-[16px] flex flex-col pt-8">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full h-full px-4 flex flex-col gap-4 items-center"
          >
            <div className="bg-transparent border-[1px] border-secondary border-opacity-30 rounded-[8px] flex flex-col justify-center gap-4 px-4 py-2 mds:h-[70%] lgss:h-3/5 w-[90%]">
              <div className="flex mds:flex-row flex-wrap gap-4 justify-between items-center w-full">
                <div>
                  <button
                    className={`bg-transparent border-[1px] border-primary px-4 py-3 rounded-[4px] focus:outline-none`}
                    onClick={() => handleButtonClick("applicant")}
                  >
                    <div className="flex justify-center items-center gap-2 w-full h-full">
                      <div
                        className={`h-6 w-6 rounded-full border-[1px] border-primary ${
                          activeButton === "applicant"
                            ? "bg-primary"
                            : "bg-transparent"
                        }`}
                      ></div>
                      <p>Applicants</p>
                    </div>
                  </button>
                </div>
                <div>
                  <button
                    className={`bg-transparent border-[1px] border-primary px-4 py-3 rounded-[4px] focus:outline-none`}
                    onClick={() => handleButtonClick("student")}
                  >
                    <div className="flex justify-center items-center gap-2 w-full h-full">
                      <div
                        className={`h-6 w-6 rounded-full border-[1px] border-primary ${
                          activeButton === "student"
                            ? "bg-primary"
                            : "bg-transparent"
                        }`}
                      ></div>
                      <p>Student</p>
                    </div>
                  </button>
                </div>
                <div>
                  <button
                    className={`bg-transparent border-[1px] border-primary px-4 py-3 rounded-[4px] focus:outline-none`}
                    onClick={() => handleButtonClick("teacher")}
                  >
                    <div className="flex justify-center items-center gap-2 w-full h-full">
                      <div
                        className={`h-6 w-6 rounded-full border-[1px] border-primary ${
                          activeButton === "teacher"
                            ? "bg-primary"
                            : "bg-transparent"
                        }`}
                      ></div>
                      <p>Teacher</p>
                    </div>
                  </button>
                </div>
              </div>
              <div className="">
                <p>
                  Don&apos;t have an account?{" "}
                  <span className="text-[#FFA3BE] px-2">Register here</span>
                </p>
              </div>
            </div>

            <div className="h-1/5 w-[90%]">
              <button
                type="button"
                onClick={handleProceedClick}
                className="bg-primary w-full rounded-[8px] h-[80%] text-white font-semibold"
                disabled={!activeButton}
              >
                Proceed
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
