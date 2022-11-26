import { formatDistance, subDays, getYear, getMonth } from "date-fns";

interface Props {
  setMonth : (month:number)=>void;
  setYear : (year:number)=>void;
}

const TodayBtn = ({setMonth, setYear}:Props) => {
  const date = new Date();
  
  const handleClick = () => {
    setMonth(getMonth(date) + 1);
    setYear(getYear(date));
  }

  return (
    <>
      <button
        type="button"
        className="text-[12px] text-white rounded-lg px-2 py-[0.2rem] bg-coral font-SCDream5"
        onClick={handleClick}
      >
        TODAY
      </button>
    </>
  );
};

export default TodayBtn;
