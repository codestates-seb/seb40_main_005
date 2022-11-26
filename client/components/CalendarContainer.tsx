import { formatDistance, subDays } from "date-fns";
import { format } from "date-fns";
import { useState } from "react";
import TodayBtn from "./TodayBtn";

const CalendarContainer = () => {
  const [currMonth, setCurrMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <>
      <div className="w-full h-fit p-8 rounded-lg md:px-14 lg:w-full lg:h-[90%] lg:drop-shadow-2xl bg-bgGray lg:bg-bgWhite">
        {/* calendar header */}
        <TodayBtn />
        <div className="flex space-x-2">
          {/* <button type="button" className="border-t"></button> */}
          <div className="border-l-0 border-r-[14px] border-solid border-r-black border-y-transparent border-y-[10px]"></div>
          <div className="border-l-[14px] border-r-0 border-solid border-l-black border-y-transparent border-y-[10px]"></div>
        </div>
      </div>
    </>
  );
};

export default CalendarContainer;
