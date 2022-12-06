import { monthsToQuarters } from "date-fns";
import { useState } from "react";

interface Props {
  year: number;
  month: number;
  setMonth: (month: number) => void;
  setYear: (year: number) => void;
}

const DayInput = ({ year, month, setMonth, setYear }: Props) => {
  const [inputMode, setInputMode] = useState(false);

  const handleClick = () => {
    setInputMode(true);
  };

  const handleYearChange = (e: any) => {
    if(Number(e.target.value) &&  e.target.value > 1950 && e.target.value < year + 10 ){
      setYear(Number(e.target.value));
    }
  };

  const handleMonthChange = (e: any) => {
    if(Number(e.target.value) && e.target.value <= 12 && e.target.value > 0){
      setMonth(Number(e.target.value));
    }
  };

  const handlePressEnter = (e: any) => {
    if (e.keyCode === 13) {
      setInputMode(false);
    }
  };

  return (
    <>
      {!inputMode ? (
        <div
          className="font-SCDream5 text-textGray text-base w-fit h-fit flex flex-row justify-center items-center cursor-pointer"
          onClick={handleClick}
        >
          {year}.{month}
        </div>
      ) : (
        <>
          <div className="flex flex-col w-fit h-fit justify-center items-center">
            <div
              className="font-SCDream5 text-textGray text-base w-3/4 lg:w-2/4 h-fit flex flex-row justify-center items-center"
              onKeyDown={handlePressEnter}
            >
              <input
                type="text"
                className="outline-none text-center font-SCDream5 text-textGray/70 text-base w-5/6 h-fit justify-center items-center"
                defaultValue={year}
                onChange={handleYearChange}
              />
              .
              <input
                type="text"
                className="outline-none text-center font-SCDream5 text-textGray/70 text-base w-1/3 h-fit justify-center items-center"
                defaultValue={month}
                onChange={handleMonthChange}
              />
            </div>
            <div className="SCDream5 text-mainOrange text-xs w-fit h-fit mt-2">
              날짜를 입력 후 Enter를 누르세요
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DayInput;
