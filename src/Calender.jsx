import React, { useState } from "react";
import { Link } from "react-router-dom";
import { search } from "./assets";
import "./App.css";
import Sidebar from "./components/students-dashboard/Sidebar";

class Timetable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
        { day: "Mon", time: "8:00 AM", subject: "Maths" },
        { day: "Tue", time: "10:00 AM", subject: "Geography" },
        { day: "Wed", time: "12:00 PM", subject: "English" },
        { day: "Thur", time: "2:00 PM", subject: "Biology" },
        { day: "Fri", time: "4:00 PM", subject: "Physics" },
      ],
    };
  }

  render() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const times = [
      "8:00 AM",
      "9:00 AM",
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "1:00 PM",
      "2:00 PM",
      "3:00 PM",
      "4:00 PM",
      "5:00 PM",
    ];

    const { courses } = this.state;

    return (
      <div className="flex h-screen">
        <Sidebar />
        <div className="lgss:w-4/5 w-full lgss:overflow-auto">
          <div className="lgss:w-full lgss:h-full lgss:flex-1 lgss:overflow lgss:px-[4%] flex flex-col pt-5">
            <div className="flex items-center justify-between w-[80%] m-auto">
              <p className="font-bold text-[36px]">March, 2024</p>
              <div className="flex items-center gap-3">
                <p className="font-medium text-[16px] py-[6px] px-[12px] border-[1px] border-gray-400 flex justify-center items-center rounded-lg h-[4%]">
                  Today
                </p>
                <p className="border-[1px] border-gray-400 rounded-full w-[2%] p-5"></p>
                <p className="border-[1px] border-gray-400 rounded-full w-[2%] p-5"></p>
              </div>
              <div className="flex items-center border-[1px] border-gray-400 rounded-2xl w-[40%]">
                <button className="flex items-center p-1"><img src={search} alt=""/></button>
                <input type="text" className="flex rounded-2xl outline-none py-1 w-full" />
              </div>
            </div>
            <div className="container flex flex-col w-[80%] m-auto">
              <table className="border-collapse border border-gray-400">
                <thead>
                  <tr>
                    <th className="border border-gray-400"></th>
                    {days.map((day) => (
                      <th key={day} className="border border-gray-400 p-2">
                        {day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {times.map((time, index) => {
                    return (
                      <tr key={index}>
                        <td className="border border-gray-400 p-2">{time}</td>
                        {days.map((day) => {
                          const course = courses.find(
                            (c) => c.day === day && c.time === time
                          );
                          if (course) {
                            const nextCourse = courses.find(
                              (c) =>
                                c.day === day &&
                                c.time === time &&
                                c.time !== times[times.indexOf(time) + 2]
                            );
                            console.log(
                              `Day: ${day}, Time: ${time}, Course:`,
                              course
                            );
                            const rowSpan = nextCourse ? 2 : 1;
                            const color = this.getRandomColor();
                            return (
                              <td
                                key={`${day}-${time}`}
                                // colSpan={2}
                                // rowSpan={2}
                                rowSpan={rowSpan}
                                className={`border border-gray-400 text-center ${color}`}
                              >
                                {rowSpan === 2 && time === course.time
                                ? course.subject
                                : ""}
                                {/* {course.subject} */}
                              </td>
                            );
                          } else {
                            return (
                              <td
                                key={`${day}-${time}`}
                                className="border border-gray-400"
                              ></td>
                            );
                          }
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="mt-4 flex justify-between">
             <Link to ='/student/dashboard'> <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={this.handleGoBack}
              >
                Go Back
              </button></Link>
              <button
                className=" text-gray-400 font-bold p-4 rounded-full shadow-xl"
                onClick={this.handleAddCourse}
              >
                Add
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Function to generate random color
  getRandomColor = () => {
    const colors = [
      "bg-blue-300",
      "bg-green-300",
      "bg-yellow-300",
      "bg-red-300",
      "bg-purple-300",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Event handler for adding another course
  // handleAddCourse = () => {
  //   const { courses } = this.state;
  //   // Add a new course to the state
  //   const newCourse = {
  //     day: "Monday",
  //     time: "4:00 PM",
  //     subject: "Civic Education",
  //   }; // Default values, can be changed
  //   this.setState({ courses: [...courses, newCourse] });
  // };

  // Event handler for going back
  // handleGoBack = () => {
  //   // Your code to navigate back to the previous page or perform any other action
  // };
}

export default Timetable;
