import React from 'react';
import Sidebar from '../../../components/teachers-dashboard/Sidebar';
import { Dashboard } from '../../../components/teachers-dashboard/Dashboard';

const TeacherDashboard = () => {
  return (
    <div className='flex'>
        <Sidebar />
      <div className='border w-[75%]'>
        <Dashboard />
      </div>
    </div>
  );
};

export default TeacherDashboard;