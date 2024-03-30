import { ApplicantImg } from '../../../assets';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';



const ApplicantContact = () => {


  return (
    <div className=' font-manrope'>
      <div className='text-center text-xl border-b-4 font-extrabold py-5'>
        <h1 className=''>CONTACT INFORMATION</h1>
      </div>
      <div className='flex w-4/5 m-auto'>
        <div className='my-9'>
        <img className='md:block hidden lg: w-full mr-48 px-12' width={100}
        height={50} src={ApplicantImg} alt='' />
        </div>
        <form className='my-10 w-11/12'>
        <div className=''>
        <p className='text-sm text-[#4D4D4E]'>Parent/ Guardian name</p>
        {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='First name' /> */}
        <TextField
                  className="w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-base shadow-lg outline-none"
                  placeholder="Parent/ Guardian name"
                  size='small'
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
        <p className='text-sm mt-2 text-[#4D4D4E]'>Residential address</p>
        {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='Middle name' /> */}
        <TextField
                  className="w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-base shadow-lg outline-none"
                  placeholder="Residential address"
                  size='small'
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
       <p className='text-sm mt-2 text-[#4D4D4E]'>Status</p>
        {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='Surname' /> */}
        <TextField
                  className="w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-base shadow-lg outline-none"
                  placeholder="Status"
                  size='small'
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
        <p className='text-sm mt-2 text-[#4D4D4E]'>Phone Number</p>
        {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='Residential Address' /> */}
        <TextField
                  className="w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-base shadow-lg outline-none"
                  placeholder="Mobile Phone"
                  size='small'
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
        <p className='text-sm mt-2 text-[#4D4D4E]'>Email address</p>
        {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='Religion' /> */}
        <TextField
                  className="w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-base shadow-lg outline-none"
                  placeholder="Email address"
                  size='small'
                //   value={firstname}
                //   onChange={(e) => setFirstName(e.target.value)}
                  // onChange={formik.handleChange}
                //   onBlur={formik.handleBlur}
                  // value={formik.values.firstName}
                //   error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                //   helperText={formik.touched.firstName && formik.errors.firstName}
                //   required
                />
        <p className='text-sm mt-2 text-[#4D4D4E]'>Nationality</p>
        {/* <input className='border px-2 text-xs h-14 my-1 shadow-md rounded p-[12px] w-11/12' type='name' placeholder='State of Origin' /> */}
        <TextField
                  className="w-full border border-[#6D6D6D] rounded p-[12px] placeholder:text-base shadow-lg outline-none"
                  placeholder="State of Origin"
                  size='small'
                //   value={firstname}
                //   onChange={(e) => setFirstName(e.target.value)}
                  // onChange={formik.handleChange}
                //   onBlur={formik.handleBlur}
                  // value={formik.values.firstName}
                //   error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                //   helperText={formik.touched.firstName && formik.errors.firstName}
                //   required
                />
                <div className='flex justify-between'>
                <Link to='/get-started/applicantregistration'>
                <div className=''>
                  <button className='border bg-[#3D5EE1] text-white rounded-md w-32 cursor-pointer my-2 lgss:'>Back</button>
                </div>
                </Link>
                <Link to='/get-started/applicantacademiainfo'>
                <div className=''>
                  <button className='border bg-[#3D5EE1] text-white rounded-md w-32 cursor-pointer my-2 lgss:'>Continue</button>
                </div>
                </Link>
                </div>
        </form>
      </div>
    </div>
  )
}

export default ApplicantContact