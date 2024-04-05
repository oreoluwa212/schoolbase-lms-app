import { semicircle } from "../../../assets";
import { circle1 } from "../../../assets";
import { circle2 } from "../../../assets";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";

const ResetPassword = () => {
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
      <div className="font-manrope py-14 text-xs bg-white m-auto w-3/4 h-1/2 rounded-3xl shadow-2xl lgss:w-3/5">
        <p className="font-bold text-center text-lg md:text-2xl lgss:text-3xl">
          Reset Your Password
        </p>
        <div className="px-6 mt-2 md:w-9/12 m-auto md:mt-7">
          <p className="font-semibold text-center mb-7 md: md:w-96 md:ml-6 lgss:ml-20">
            Enter your email address and we will send you a link to reset your
            password.
          </p>
          <TextField
            className="bg-white text-[#97999C] p-[12px] shadow-[1px_1.7px_4px_1px]  h-12 w-full"
            placeholder="Enter email address"
            size="small"
            sx={{
              "& fieldset": { border: "none" },
            }}
            //   value={firstname}
            //   onChange={(e) => setFirstName(e.target.value)}
            // onChange={formik.handleChange}
            //   onBlur={formik.handleBlur}
            // value={formik.values.firstName}
            //   error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            //   helperText={formik.touched.firstName && formik.errors.firstName}
            //   required
          />
          <Link to="">
            <div className="">
              <button className="border font-semibold hover:bg-white hover:text-[#3D5EE1] bg-[#3D5EE1] text-white text-xs rounded-md h-12 mt-10 w-full cursor-pointer my-2 lgss:mt-10">
                Submit email
              </button>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <img
          className="md:block hidden absolute right-7 bottom-96 lgss:right-28 lgss:top-80"
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

export default ResetPassword;
