import { Link } from 'react-router-dom'

const GetStarted = () => {
  return (
    <div className='bg-blueBg h-[100vh] flex justify-center items-center gap-10 '>
      <Link to='applicantregistration'>
        <button className="bg-purple-400 lg:px-12 px-4 py-4 rounded-[8px] text-white lg:text-[24px] font-semibold">
          Applicants
        </button>
      </Link>
      <Link to={"/student/dashboard"}>
        <button className="bg-red-400 lg:px-12 px-4 py-4 rounded-[8px] text-white lg:text-[24px] font-semibold">
          Students
        </button>
      </Link>
      <Link to={"teacher/signup"}>
        <button className="bg-primary lg:px-12 px-4 py-4 rounded-[8px] text-white lg:text-[24px] font-semibold">
          Teachers
        </button>
      </Link>
    </div>
  );
}

export default GetStarted