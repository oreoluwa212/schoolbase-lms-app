import { ApplicantImg } from "../../../assets";
import { Link } from "react-router-dom";
import {
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const ApplicantAcademiaInfo = () => {
  return (
    <div className="font-manrope bg-blueBg">
      <div className="text-center text-xl border-b-4 font-extrabold py-5">
        <h1 className="">ACADEMIA INFORMATION</h1>
      </div>
      <div className="flex w-4/5 m-auto">
        <div className="my-9">
          <img
            className="md:block hidden lg: w-full h-full mr-48 px-12"
            width={100}
            height={50}
            src={ApplicantImg}
            alt=""
          />
        </div>
        <form className="my-10 w-11/12">
          <div className="">
            <p className="text-xs font-semibold mb-2 text-[#4D4D4E]">
              List of extracurricular (e.g; clubs, sports)
            </p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='First name' /> */}
            <TextField
              className="w-full text-xs bg-white rounded-md p-[12px] placeholder:text-base shadow-2xl outline-none"
              placeholder="List of extracurricular (e.g; clubs, sports)"
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
          </div>

          <div className="mt-4">
            <p className="text-xs font-semibold mb-2 text-[#4D4D4E]">
              Briefly state about your Interests/ goals or reason for applying
            </p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='Middle name' /> */}
            <TextField
              className="w-full bg-white rounded-md p-[12px] shadow-2xl outline-none"
              placeholder="Briefly state about your Interests/ goals or reason for applying"
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
          </div>

          <div className="mt-4">
            <p className="text-xs font-semibold mb-2 text-[#4D4D4E]">
              State your special skills/ talents
            </p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='Surname' /> */}
            <TextField
              className="w-full bg-white rounded-md p-[12px] shadow-2xl outline-none"
              placeholder="State your special skills/ talents"
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
          </div>
          <div className="mt-4">
            <p className="text-xs font-semibold mb-2 text-[#4D4D4E]">
              Name of previous school attended
            </p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='Residential Address' /> */}
            <TextField
              className="w-full bg-white rounded p-[12px] shadow-2xl outline-none"
              placeholder="Name of previous school attended"
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
          </div>
          <div className="mt-4">
            <p className="text-xs font-semibold mb-2 text-[#4D4D4E]">
              Upload additional document (e.g; supplementary materials)
            </p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='Religion' /> */}
            <TextField
              className="w-full bg-white rounded-md p-[12px] shadow-2xl outline-none"
              placeholder=""
              type="file"
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
          </div>
          <div className="mt-4">
            <p className="text-xs font-semibold mb-2 text-[#4D4D4E]">
              Recommendation letter (e.g; teachers, mentors)
            </p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='State of Origin' /> */}
            <TextField
              className="w-full bg-white rounded-md p-[12px] shadow-2xl outline-none"
              placeholder=""
              type="file"
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
          </div>
          <div className="mt-4">
            <p className="text-xs font-semibold mb-2 text-[#4D4D4E]">
              Signature{" "}
            </p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='State of Origin' /> */}
            <TextField
              className="w-full bg-white rounded-md p-[12px] shadow-2xl outline-none"
              placeholder=""
              type="file"
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
          </div>
          <div className="mt-2">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="I confirm that the information given on this form is correct"
              />{" "}
            </FormGroup>
          </div>
          <div className="flex justify-between">
            <Link to="/get-started/applicantcontact">
              <div className="">
                <button className="border hover:bg-[#3D5EE1] hover:text-white bg-[white] text-[#3D5EE1] rounded-md h-10 w-36 cursor-pointer my-2">
                  Back
                </button>
              </div>
            </Link>
            <Link>
              <div className="">
                <button className="border hover:bg-white hover:text-[#3D5EE1] bg-[#3D5EE1] text-white rounded-md h-10 w-36 cursor-pointer my-2">
                  Continue
                </button>
              </div>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicantAcademiaInfo;
