import { ReactElement, useEffect, useState } from "react";
import { getDate, getMonth, getYear } from "date-fns";
import AddBtn from "./AddBtn";
import { useRecoilState } from "recoil";
import {
  modalOpenState,
  selectDayState,
  selectMonthState,
  selectYearState,
  pickDayState,
  readModalOpenState,
  boardItemState,
  boardSharedState,
  getBoardState,
  getBoardItemState,
  getBoardId
} from "../recoil/calendarAtom";
import useGetBoardItem from "../hooks/calendar/useGetBoardItem";
import MyBoard from "./MyBoard";
import SharedBoard from "./SharedBoard";
import postSignUp from "../apis/user/postSignUp";

interface PropsValue {
  currMonth: number;
  currYear: number;
  children: React.ReactNode;
  currDay: number;
  boards: any[] | null;
  hasMine: boolean;
}

const DayBlock = ({
  children,
  currMonth,
  currYear,
  currDay,
  boards,
  hasMine,
}: PropsValue) => {
  const [isToday, setIsToday] = useState(false);
  const today = new Date();
  let month = getMonth(today) + 1;
  let year = getYear(today);
  let day = getDate(today);

  const [open, setOpen] = useRecoilState(modalOpenState);
  const [dayState, setDayState] = useRecoilState(selectDayState);
  const [monthState, setMonthState] = useRecoilState(selectMonthState);
  const [yearState, setYearState] = useRecoilState(selectYearState);
  const [date, setDate] = useRecoilState(pickDayState);
  const [readOpen, setReadOpen] = useRecoilState(readModalOpenState);
  const [boardItemValue, setBoardItemValue] = useRecoilState(boardItemState);
  const [shareValue, setShareValue] = useRecoilState(boardSharedState);
  const [getBoard, setGetBoard] = useRecoilState(getBoardState);
  const [getBoardItem, setGetBoardItem] = useRecoilState(getBoardItemState);
  const [changeState, setChangeState] = useState<boolean>(false);
  // const [boardItemId, setBoardItemId] = useState<number | null>(null);
  const [boardItemId, setBoardItemId] = useRecoilState(getBoardId);


  const {
    isSuccess: boardItemDone,
    data: boardItem,
    refetch: boardItemRefetch,
  } = useGetBoardItem({
    boardItemId,
  });

  useEffect(() => {
    // console.log("active");
    if (month === currMonth && year === currYear && children === day) {
      setIsToday(true);
    } else setIsToday(false);

    if (boardItem && boardItemDone) {
      // console.log(boardItem)
      setBoardItemValue(boardItem);
    }
  }, [currMonth, boardItem]);

  useEffect(() => {
    if (boardItemId) {
      boardItemRefetch();
    }
  }, [boardItemId, getBoardItem]);

  const handleBtnClick = () => {
    setOpen(true);
    setDayState(currDay.toString());
    setMonthState(currMonth.toString());
    setYearState(currYear.toString());

    let realMonth = currMonth.toString();
    if (realMonth.length < 2) {
      realMonth = "0" + currMonth.toString();
    }
    let realDay = currDay.toString();
    if (realDay.length < 2) {
      realDay = "0" + currDay.toString();
    }

    setDate(`${currYear.toString()}-${realMonth}-${realDay}`);
  };
  // console.log(boardItemId);
  const handleBoardClick = (boardId: number, shared: boolean) => {
    setBoardItemId(boardId);
    setReadOpen(true);
    // console.log(boardId);
    setChangeState(!changeState)

    let realMonth = currMonth.toString();
    if (realMonth.length < 2) {
      realMonth = "0" + currMonth.toString();
    }
    let realDay = currDay.toString();
    if (realDay.length < 2) {
      realDay = "0" + currDay.toString();
    }

    setDate(`${currYear.toString()}-${realMonth}-${realDay}`);
    setShareValue(shared);
  };

  const renderPosts = () => {
    let day: ReactElement[] = [];

    boards?.map(post => {
      if (post.shared) {
        day.push(
          <SharedBoard
            key={post.boardId}
            post={post.title}
            onClick={() => handleBoardClick(post.boardId, post.shared)}
          />,
        );
      } else {
        day.push(
          <MyBoard
            key={post.boardId}
            post={post.title}
            onClick={() => handleBoardClick(post.boardId, post.shared)}
          />,
        );
      }
    });

    return day;
  };

  return (
    <>
      <div className="group w-[13%] h-16 md:h-18 lg:h-[6.3rem] pt-2 md:pt-3 lg:pt-0 text-textBlack font-SCDream5 text-xs md:text-sm lg:text-base">
        <div className="flex flex-row items-center py-1">
          <div
            className={`w-fit h-fit px-[0.3rem] py-[0.2rem] md:px-[0.65rem] lg:px-[0.75rem] md:py-[0.3rem] ${
              isToday ? "bg-btnOrange rounded-full text-white" : null
            }`}
          >
            {children}
          </div>
          {hasMine ? null : <AddBtn onClick={handleBtnClick} />}
        </div>
        {boards?.length !== 0 ? <div>{renderPosts()}</div> : null}
      </div>
    </>
  );
};

export default DayBlock;

// return (
//   <>
//     <div className="group w-[13%] h-16 md:h-18 lg:h-[6.3rem] pt-2 md:pt-3 lg:pt-0 text-textBlack font-SCDream5 text-xs md:text-sm lg:text-base">
//       <div className="flex flex-row items-center py-1">
//         <div
//           className={w-fit h-fit px-[0.3rem] py-[0.2rem] md:px-[0.65rem] lg:px-[0.75rem] md:py-[0.3rem] ${isToday ? "bg-btnOrange rounded-full text-white" : null
//             }}
//         >
//           {children}
//         </div>
//         {hasMine ? null : <AddBtn onClick={handleBtnClick} />}
//       </div>
//       {boards && boards.map(post => post.shared ? (
//         <SharedBoard
//         key={post.boardId}
//         post={post.title}
//         // onClick={() => setBoardId(post.boardId)}
//         onClick={handleBoardClick(post.boardId, post.shared)}
//         />
//       ) : (
//         <MyBoard
//         key={post.boardId}
//         post={post.title}
//         // onClick={() => setBoardId(post.boardId)}
//         onClick={handleBoardClick(post.boardId, post.shared)}
//         />
//       )
//       )}
//       {/* {boards?.length !== 0 ? <div>{renderPosts()}</div> : null} */}
//     </div>
//   </>
