import { semicircle } from "../../../assets";
import { circle1 } from "../../../assets";
import { circle2 } from "../../../assets";
import { Link } from "react-router-dom";

const PasswordResetSuccessful = () => {
  return (
    <div className="bg-blueBg h-screen relative">
      <div className="px-7 py-10 w-1/3">
        <h1 className="font-semibold font-itim text-[#474BCA] text-2xl tracking-wider lgss:ml-24">
          SchoolBase
        </h1>
      </div>
      <div className="">
        <img className="absolute top-40" src={semicircle} alt="" />
      </div>
      <div className="font-manrope text-center py-24 text-xs bg-white border-black m-auto w-3/4 h-1/2 rounded-3xl shadow-2xl lgss:w-3/5">
        <p className="font-bold text-lg md:text-2xl">
          You’ve reset your password
        </p>
        <p className="mt-3 w-52 text-center m-auto text-xs font-medium md:w-96 lgss:font-semibold">
          Well done. Now you can continue to MatchLesson.
        </p>
        <Link to="">
          <div className="">
            <button className="font-semibold border hover:bg-white hover:text-[#3D5EE1] bg-[#3D5EE1] text-white text-xs rounded-md h-12 mt-10 w-3/4 cursor-pointer md:w-2/3 lgss:w-2/4">
              Proceed to your dashboard
            </button>
          </div>
        </Link>
      </div>
      <div>
        <img
          className="md:block hidden absolute right-7 bottom-96 md:top-64 lgss:right-28 lgss:top-64"
          src={circle1}
          width={50}
          height={50}
          alt=""
        />
      </div>
      <div className="">
        <img
          className="absolute left-4 bottom-32 lgss:left-32"
          src={circle2}
          alt=""
        />
      </div>
    </div>
  );
};

export default PasswordResetSuccessful;
