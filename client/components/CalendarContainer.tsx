import { formatDistance, subDays, getYear, getMonth } from "date-fns";
import { format } from "date-fns";
import { useState } from "react";
import TodayBtn from "./TodayBtn";
import LeftBtn from "./LeftBtn";
import RightBtn from "./RightBtn";
import DayInput from "./DayInput";

const CalendarContainer = () => {
  const [currMonth, setCurrMonth] = useState(getMonth(new Date()) + 1);
  const [currYear, setCurrYear] = useState(getYear(new Date()));

  const changeMonth = (month: number) => {
    setCurrMonth(month);
  };

  const changeYear = (year: number) => {
    setCurrYear(year);
  };

  const handleLeftClick = () => {
    if (currMonth === 1) {
      setCurrMonth(12);
      setCurrYear(currYear - 1);
    } else {
      setCurrMonth(currMonth - 1);
    }
  };

  const handleRightClick = () => {
    if (currMonth === 12) {
      setCurrMonth(1);
      setCurrYear(currYear + 1);
    } else {
      setCurrMonth(currMonth + 1);
    }
  };

  return (
    <>
      <div className="w-full h-fit p-8 rounded-lg md:px-14 lg:w-full lg:h-[90%] lg:drop-shadow-2xl bg-bgGray lg:bg-bgWhite">
        {/* calendar header */}
        <div className="w-full h-fit flex flex-col justify-center items-center">
          <TodayBtn setMonth={changeMonth} setYear={changeYear} />
          <div className="w-full h-fit flex flex-row justify-center items-center mt-3">
            <LeftBtn onClick={handleLeftClick} />
            <DayInput
              year={currYear}
              month={currMonth}
              setMonth={changeMonth}
              setYear={changeYear}
            />
            <RightBtn onClick={handleRightClick} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarContainer;
