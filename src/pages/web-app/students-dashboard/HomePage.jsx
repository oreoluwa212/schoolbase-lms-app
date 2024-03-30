import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import SideBar from "../../../components/students-dashboard/Sidebar";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  let newUser = {};
  let location = useLocation();
  if (location.state) {
    newUser = location.state.user;
  }

  return (
    <div className="flex flex-row h-screen w-full">
      <SideBar isOpen={isOpen} />
      <div className="lgss:w-4/5 w-full lgss:overflow-auto">
        <div className="lgss:w-full lgss:h-full lgss:flex-1 lgss:overflow lgss:px-[4%] flex flex-col ">
          {/* {loggedInUser && (
            <Header
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              currentUser={loggedInUser}
            />
          )} */}
          <h1 className="text-[28px] pt-[20px] text-[#4488AC]">
            Dashboard
          </h1>
          {/* {loggedInUser && <DetailsCard loggedInUser={loggedInUser} />} */}
          <div className="">
            <div className="flex flex-col justify-center lgss:items-start lgss:pt-14 pt-4">
              {/* <div className=" flex flex-col lgss:grid lgss:grid-cols-3 gap-8">
                <Link to={"/dashboard/profile"}>
                  <DashboardCard
                    title="Manage Profile"
                    icon={<PiUserCircleFill />}
                  />
                </Link>
                <Link to={"/dashboard/points"}>
                  <DashboardCard
                    title="Points & Badges"
                    icon={<PiShieldCheckFill />}
                  />
                </Link>
                <DashboardCard
                  title="News & Updates"
                  icon={<PiArticleFill />}
                />
                <Link to={"/dashboard/health-summary"}>
                  <DashboardCard
                    title="Health Summary"
                    icon={<PiCrownSimpleBold />}
                  />
                </Link>
                <Link to={"/dashboard/leader-board"}>
                  <DashboardCard title="Leaderboard" icon={<FaStethoscope />} />
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
