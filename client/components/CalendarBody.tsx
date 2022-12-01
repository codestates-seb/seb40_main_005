import {
  startOfMonth,
  addDays,
  getDate,
  getDaysInMonth,
  getWeekOfMonth,
  getDay,
  endOfMonth,
} from "date-fns";
import DayBlock from "./DayBlock";
import useGetBoards from "../hooks/calendar/useGetBoards";
import { useEffect } from "react";
import MyBoard from "./MyBoard";

interface PropsValue {
  currMonth: number;
  currYear: number;
}

interface Boards {
  boardId: number | null;
  title: string;
  createdPost: string[];
  category: string;
}

const GetDayOfWeek = () => {
  // let innerWidth = typeof window !== "undefined" ? window.innerWidth : null;

  const days = [];
  const smDate = ["S", "M", "T", "W", "T", "F", "S"];
  const lgDate = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  for (let i = 0; i < 7; i++) {
    days.push(
      <div
        className="w-[13%] md:w-30 pt-4 md:pb-2 md:pt-6 font-SCDream6 text-textBlack text-[0.7rem] md:text-[0.8rem] lg:text-[0.9rem] text-center border-b-4 border-coral"
        key={i}
      >
        {/* {innerWidth < 1024 ? smDate[i] : lgDate[i]} */}
        {lgDate[i]}
      </div>,
    );
  }

  return <div className="flex justify-between">{days}</div>;
};

const CalendarBody = ({ currYear, currMonth }: PropsValue) => {
  const date = new Date(currYear, currMonth - 1); //오늘 날짜
  const monthDays = getDaysInMonth(new Date(currYear, currMonth - 1)); // 현재 달의 총 일수 /month는 0부터 시작,
  let monthStart = startOfMonth(date); //달의 시작일, Tue Nov 01 2022 00:00:00 GMT+0900 (한국 표준시)
  let monthEnd = endOfMonth(date);
  let startDate = getDate(monthStart);
  let day = getDay(monthStart); //달의 첫 요일 , 일요일 (0)부터 시작

  const rows = [];
  let days = [];

  const { data: boardsData, refetch: boardRefetch } = useGetBoards({
    currYear,
    currMonth,
  });

  useEffect(() => {
    boardRefetch();
  }, [currMonth]);

  const boardList = boardsData?.data;
  console.log(boardList);

  while (monthStart <= monthEnd) {
    //해당 달의 일 수만큼 반복
    let weekOfMonth = getWeekOfMonth(monthStart);

    for (let i = 0; i < 7; i++) {
      // 한 주씩 반복
      if (weekOfMonth === 1 && i < day) {
        days.push(
          <div key={`5${i}`} className="w-[13%] h-16 md:h-18 lg:h-[6.5rem]">
            {""}
          </div>,
        );
      } else if (monthStart > monthEnd) {
        days.push(
          <div key={`5${i}`} className="w-[13%] h-16 md:h-18 lg:h-[6.5rem]">
            {""}
          </div>,
        );
      } else {
        let hasPost = false;

        boardList?.forEach((el: Boards) => {
          let createdYear = parseInt(el.createdPost[0]);
          let createdMonth = parseInt(el.createdPost[1]);
          let createdDay = parseInt(el.createdPost[2]);

          if (
            createdYear === currYear &&
            createdMonth === currMonth &&
            startDate === createdDay
          ) {
            days.push(
              <DayBlock
                hasBoard={true}
                currMonth={currMonth}
                currYear={currYear}
                currDay={startDate}
                key={startDate}
                post={el.title}
                boardId={el.boardId}
              >
                {startDate}
              </DayBlock>,
            );

            hasPost = true;
          }
        });

        if (!hasPost) {
          days.push(
            <DayBlock
              hasBoard={false}
              currMonth={currMonth}
              currYear={currYear}
              currDay={startDate}
              key={startDate}
              post={null}
              boardId={null}
            >
              {startDate}
            </DayBlock>,
          );
        }
        monthStart = addDays(monthStart, 1);
        startDate = getDate(monthStart);
      }
    }

    rows.push(
      <div key={`week${weekOfMonth}`} className="flex flex-row justify-between">
        {days}
      </div>,
    );
    days = [];

    if (startDate === monthDays) break;
  }

  return (
    <>
      <GetDayOfWeek />
      <div>{rows}</div>
    </>
  );
};
export default CalendarBody;
