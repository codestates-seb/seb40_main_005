import CalendarContainer from "./CalendarContainer";
import CalendarNav from "./CalendarNav";
import Sidebar from "./Sidebar";
import BoardContainer from "./BoardContainer";
import { useRef, useState } from "react";

const CalendarPageLayout = () => {
  const boardModal = useRef<HTMLDivElement>(null);

  const handleOpenBtnClick = () => {
    const { current } = boardModal;

    if (current?.style.transform !== undefined) {
      window.innerWidth < 376
        ? (current.style.transform = "translateY(0)")
        : (current.style.transform = "translateX(0)");
    }
  };

  const handleCloseBtnClick = () => {
    const { current } = boardModal;

    if (current?.style.transform !== undefined) {
      window.innerWidth < 376
        ? (current.style.transform = "translateY(100%)")
        : (current.style.transform = "translateX(100%)");
    }
  };

  return (
    <>
      <div className="flex flex-col-reverse h-screen lg:flex-row bg-bgGray">
        {/* <section className="w-1/6 h-full border-2 lg:block">Sidebar</section> */}
        <button
          className="font-SCDream3 bg-mainOrange text-bgWhite fixed w-[100px] h-10 rounded-lg z-50"
          onClick={handleOpenBtnClick}
        >
          모달나와라
        </button>

        <button
          className="left-28 font-SCDream3 bg-mainOrange text-bgWhite fixed w-[100px] h-10 rounded-lg z-50"
          onClick={handleCloseBtnClick}
        >
          모달사라져라
        </button>

        <BoardContainer boardRef={boardModal}>hello</BoardContainer>
        <Sidebar />
        <div className="w-full p-4 lg:pr-20">
          <CalendarNav />
          <CalendarContainer></CalendarContainer>
        </div>
      </div>
    </>
  );
};

export default CalendarPageLayout;
