import { HiOutlineUserGroup } from 'react-icons/hi2';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { TbUserEdit } from 'react-icons/tb';
import { GoGraph } from 'react-icons/go';
import { CiSettings } from 'react-icons/ci';
import { FaUserGraduate } from 'react-icons/fa6';

const menu = [
  {
    id: 1,
    name: 'Dashboard',
    url: '',
    icon: FaChalkboardTeacher,
  },
  {
    id: 2,
    name: 'Class Records',
    url: '/class-records',
    icon: HiOutlineUserGroup,
  },
  {
    id: 3,
    name: 'Classes',
    url: '/classes',
    icon: FaUserGraduate,
  },
  {
    id: 4,
    name: 'Attendance',
    url: '/attendance',
    icon: TbUserEdit,
  },
  {
    id: 5,
    name: 'Exams',
    url: '/exams',
    icon: GoGraph,
  },
  {
    id: 6,
    name: 'Settings',
    url: '/settings',
    icon: CiSettings,
  },
];

export default menu;
