import { semicircle } from "../../../assets";
import { circle1 } from "../../../assets";
import { circle2 } from "../../../assets";
import { TextField } from "@mui/material";

const ConfirmEmail = () => {
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
      <div className="font-manrope text-center py-20 text-xs bg-white border-black m-auto w-3/4 h-1/2 rounded-3xl shadow-2xl lgss:w-3/5">
        <p className="font-bold text-lg lgss:text-3xl">
          Confirm your email address
        </p>
        <p className="mt-3 font-medium lgss:font-semibold">
          Enter the code that was sent to
        </p>
        <p className="mb-3 lgss:font-semibold lgss:mb-5">
          a**************s@*****.com
        </p>
        <div className=" flex mt-12 justify-between w-64 m-auto md:w-80 lgss:w-6/12">
          <TextField
            className="bg-white text-[#97999C] shadow-[0px_2px_2px_1px] rounded-lg h-10 w-10  md:h-12 md:w-10"
            placeholder=""
            size="small"
            sx={{
              height: "100%",
              //   "& fieldset": { border: "none" },
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
          <TextField
            className="bg-white border text-[#97999C] shadow-[0px_2px_2px_1px] rounded-lg h-10 w-10 md:h-12 md:w-10"
            placeholder=""
            size="small"
            sx={{
              height: "100%",
              //   "& fieldset": { border: "none" },
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
          <TextField
            className="bg-white border text-[#97999C] shadow-[0px_2px_2px_1px] rounded-lg h-10 w-10 md:h-12 md:w-10"
            placeholder=""
            size="small"
            sx={{
              height: "100%",
              //   "& fieldset": { border: "none" },
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
          <TextField
            className="bg-white border text-[#97999C] shadow-[0px_2px_2px_1px] rounded-lg h-10 w-10 md:h-12 md:w-10"
            placeholder=""
            size="small"
            sx={{
              height: "100%",
              //   "& fieldset": { border: "none" },
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
          <TextField
            className="bg-white border text-[#97999C] shadow-[0px_2px_2px_1px] rounded-lg h-10 w-10 md:h-12 md:w-10"
            placeholder=""
            size="small"
            sx={{
              height: "100%",
              //   "& fieldset": { border: "none" },
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
        </div>
        <p className="font-medium -ml-36 mt-7 md:-ml-52 lgss:-ml-80">
          Resend Code in 42s
        </p>
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

export default ConfirmEmail;
