import { FaBell } from "react-icons/fa";
import { studentImg } from "../../assets";

const StudentProfile = () => {
   return (
     <div className="w-full bg-blue1 py-2 px-6 shadow-lg">
       <div className="border-b-2 h-[60px] w-full flex justify-between items-center py-2 pr-6">
         <div className="flex gap-4">
           <div className="flex flex-col gap-1 font-semibold">
             <h1>Hi</h1>
             <h2>Ada Smith</h2>
           </div>
           <div className="">
             <img src={studentImg} alt="" />
           </div>
         </div>
         <div className="text-[20px] text-secondary text-opacity-60">
           <FaBell />
         </div>
       </div>
       <div className="flex flex-col lgss:flex-wrap lgss:flex-row justify-between gap-2 w-[80%] pt-4">
         <div className="w-[35%] flex flex-col gap-3">
           <div className="flex justify-between">
             <p className="font-semibold">Year of Study:</p>
             <p className="font-medium">2024/2025</p>
           </div>
           <div className="flex justify-between">
             <p className="font-semibold">Student Number:</p>
             <p className="font-medium">0023</p>
           </div>
           <div className="flex justify-between">
             <p className="font-semibold">Class:</p>
             <p className="font-medium">SSS 3</p>
           </div>

           <div className="flex justify-between">
             <p className="font-semibold">Class Teacher:</p>
             <p className="font-medium">Mr Sam</p>
           </div>
         </div>
         <div className="w-[50%] flex flex-col gap-3">
           <div className="flex gap-4">
             <p className="font-semibold">Guardian:</p>
             <p className="font-medium">Mrs Smith</p>
           </div>
           <div className="flex gap-4">
             <p className="font-semibold">Relationship:</p>
             <p className="font-medium">Mother</p>
           </div>
           <div className="flex gap-4">
             <p className="font-semibold">Email Address:</p>
             <p className="font-medium">adasmith@schoolbase.edu.ng</p>
           </div>
           <div className="flex gap-4">
             <p className="font-semibold">Phone Number:</p>
             <p className="font-medium">+2348012341234</p>
           </div>
           <div className="flex gap-4">
             <p className="font-semibold">House Address:</p>
             <p className="font-medium">7, Smith Street, Agbowo</p>
           </div>
         </div>
       </div>
     </div>
   );
}

export default StudentProfile;
