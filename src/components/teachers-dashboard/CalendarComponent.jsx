import React, { useState } from 'react';
import Calendar from 'react-calendar';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className='border h-[450px] xl:grid-col-auto'>
      <Calendar onChange={onChange} value={date} />
    </div>
  );
};

export default CalendarComponent;
