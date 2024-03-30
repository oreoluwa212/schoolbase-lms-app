import React from "react";
import { ApplicantImg } from "../../../assets";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {
  TextField,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import { Link } from "react-router-dom";

const ApplicantReg = () => {
  const [gender, setGender] = React.useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  //   flex w-11/12 justify-between lgss: m-auto gap-x-12

  return (
    <div className="font-manrope bg-blueBg">
      <div className="text-center text-xl border-b-4 font-extrabold py-5">
        <h1 className="">ADMISSION FORM</h1>
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
            <p className="text-sm text-[#4D4D4E]">First name</p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='First name' /> */}
            <TextField
              className="w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-base shadow-lg outline-none"
              placeholder="First name"
              size="small"
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

          <div>
            <p className="text-sm text-[#4D4D4E]">Middle name</p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='Middle name' /> */}
            <TextField
              className="w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-base shadow-lg outline-none"
              placeholder="Middle name"
              size="small"
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

          <div>
            <p className="text-sm text-[#4D4D4E]">Surname</p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='Surname' /> */}
            <TextField
              className="w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-base shadow-lg outline-none"
              placeholder="Surname"
              size="small"
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
          <div>
            <p className="text-sm text-[#4D4D4E]">Date of Birth</p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                slotProps={{ textField: { size: "small" } }}
                className="px-2 text-xs my-1 shadow-md rounded p-[12px] w-full"
                label="Date of Birth"
              />
            </LocalizationProvider>
          </div>
          <div className="">
            <p className="text-sm text-[#4D4D4E]">Gender</p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='Gender' /> */}
            <FormControl className="w-full shadow-lg" size="small">
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                //   labelId="demo-simple-select-label"
                //   id="demo-simple-select"
                value={gender}
                label="gender"
                onChange={handleChange}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <p className="text-sm text-[#4D4D4E]">Residential Address</p>
            {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='Residential Address' /> */}
            <TextField
              className="w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-base shadow-lg outline-none"
              placeholder="Residential Address"
              size="small"
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
          <p className="text-sm text-[#4D4D4E]">Religion</p>
          {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='Religion' /> */}
          <TextField
            className="w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-base shadow-lg outline-none"
            placeholder="Religion"
            size="small"
            //   value={firstname}
            //   onChange={(e) => setFirstName(e.target.value)}
            // onChange={formik.handleChange}
            //   onBlur={formik.handleBlur}
            // value={formik.values.firstName}
            //   error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            //   helperText={formik.touched.firstName && formik.errors.firstName}
            //   required
          />
          <p className="text-sm text-[#4D4D4E]">State of Origin</p>
          {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='State of Origin' /> */}
          <TextField
            className="w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-base shadow-lg outline-none"
            placeholder="State of Origin"
            size="small"
            //   value={firstname}
            //   onChange={(e) => setFirstName(e.target.value)}
            // onChange={formik.handleChange}
            //   onBlur={formik.handleBlur}
            // value={formik.values.firstName}
            //   error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            //   helperText={formik.touched.firstName && formik.errors.firstName}
            //   required
          />
          <p className="text-sm text-[#4D4D4E]">Nationality</p>
          {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='Nationality' /> */}
          <TextField
            className="w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-base shadow-lg"
            placeholder="Nationality"
            size="small"
            //   value={firstname}
            //   onChange={(e) => setFirstName(e.target.value)}
            // onChange={formik.handleChange}
            //   onBlur={formik.handleBlur}
            // value={formik.values.firstName}
            //   error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            //   helperText={formik.touched.firstName && formik.errors.firstName}
            //   required
          />
          <div className="">
            <p>upload recent passport photograph</p>
            <input type="file" />
          </div>
          <Link to="/get-started/applicantcontact">
            <div className="flex flex-row-reverse">
              <button className="border bg-[#3D5EE1] text-white rounded-md w-32 cursor-pointer my-2 lgss:">
                Continue
              </button>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ApplicantReg;
