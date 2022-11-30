import { useEffect, useState } from "react";
import { getDate, getMonth, getYear } from "date-fns";
import AddBtn from "./AddBtn";
import { useRecoilState } from "recoil";
import { modalOpenState, selectDayState, selectMonthState, selectYearState, pickDayState } from "../recoil/calendarAtom";


interface PropsValue {
  currMonth: number;
  currYear: number;
  children: React.ReactNode;
  currDay: number;
}

const DayBlock = ({ children, currMonth, currYear, currDay }: PropsValue) => {
  const [isToay, setIsToday] = useState(false);
  const today = new Date();
  let month = getMonth(today) + 1;
  let year = getYear(today);
  let day = getDate(today);

  const [open, setOpen] = useRecoilState(modalOpenState);
  const [dayState, setDayState] = useRecoilState(selectDayState);
  const [monthState, setMonthState] = useRecoilState(selectMonthState);
  const [yearState, setYearState] = useRecoilState(selectYearState);
  const [date, setDate] = useRecoilState(pickDayState);

  useEffect(() => {
    if (month === currMonth && year === currYear && children === day) {
      setIsToday(true);
    } else setIsToday(false);
  });

  const handleBtnClick = () => {
    setOpen(true);
    setDayState(currDay.toString());
    setMonthState(currMonth.toString());
    setYearState(currYear.toString());
    
    let realMonth = currMonth.toString();
    if(realMonth.length < 2){
      realMonth = "0" + currMonth.toString()
    }
    let realDay = currDay.toString();
    if(realDay.length < 2){
      realDay = "0" + currDay.toString()
    }

    setDate(`${currYear.toString()}-${realMonth}-${realDay}`);

    console.log('active');
  }

  return (
    <>
      <div className="group w-[13%] h-16 md:h-18 lg:h-[6.3rem] pt-2 md:pt-3 lg:pt-0 text-textBlack font-SCDream5 text-xs md:text-sm lg:text-base">
        <div className="flex flex-row items-center py-1">
          <div
            className={`w-fit h-fit px-[0.3rem] py-[0.2rem] md:px-[0.58rem] md:py-[0.4rem] ${
              isToay ? "bg-btnOrange rounded-full text-white" : null
            }`}
          >
            {children}
          </div>
          <AddBtn onClick={handleBtnClick}/>
        </div>
      </div>
    </>
  );
};

export default DayBlock;
