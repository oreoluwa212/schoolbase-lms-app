import React from 'react';
import Sidebar from '../../../components/teachers-dashboard/Sidebar';
import { Dashboard } from '../../../components/teachers-dashboard/Dashboard';

const TeacherDashboard = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='md:w-[75%] w-full'>
        <Dashboard />
      </div>
    </div>
  );
};

export default TeacherDashboard;
