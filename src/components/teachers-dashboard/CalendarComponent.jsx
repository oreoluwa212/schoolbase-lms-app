import React, { useState } from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

const CalendarComponent = () => {
  const [date, setDate] = useState('');

  return (
    <div className='border h-[450px] xl:grid-col-auto'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          defaultValue={dayjs()}
          disableOpenPicker={true}
          className='w-full'
        />
        <StaticDatePicker defaultValue={dayjs()} />
      </LocalizationProvider>
    </div>
  );
};

export default CalendarComponent;
