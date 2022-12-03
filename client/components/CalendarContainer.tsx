import {
  formatDistance,
  getDate,
  getMonth,
  startOfDay,
  startOfMonth,
  subDays,
  getYear,
} from "date-fns";
import { format } from "date-fns";
import { useState } from "react";
import TodayBtn from "../components/TodayBtn";
import LeftBtn from "./LeftBtn";
import RightBtn from "./RightBtn";
import DayInput from "./DayInput";
import CalendarBody from "./CalendarBody";

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
      <div className="flex flex-col justify-center  w-full h-fit px-4 mb-3 rounded-lg lg:py-5 md:px-6 lg:max-h-[90%] lg:px-12 lg:drop-shadow-2xl bg-bgGray lg:bg-bgWhite">
        {/* <div className="w-full px-5 pt-5 pb-5 my-3 rounded-lg h-fit lg:drop-shadow-2xl bg-bgGray lg:bg-bgWhite"> */}
        {/* calendar header */}

        <div className="flex flex-col items-center justify-center w-full h-fit">
          <TodayBtn setMonth={changeMonth} setYear={changeYear} />
          <div className="flex flex-row items-center justify-center w-full mt-3 h-fit">
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

        {/* calendar body */}
        <CalendarBody currMonth={currMonth} currYear={currYear} />
      </div>
    </>
  );
};

export default CalendarContainer;
