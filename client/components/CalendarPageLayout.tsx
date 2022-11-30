import CalendarContainer from "./CalendarContainer";
import CalendarNav from "./CalendarNav";
import Sidebar from "./Sidebar";
import BoardContainer from "./BoardContainer";
import { useEffect, useRef, useState } from "react";
import CreateModalLayout from "./CreateModalLayout";
import { useRecoilState } from "recoil";
import { modalOpenState, pickDayState } from "../recoil/calendarAtom";

const CalendarPageLayout = () => {
  const boardModal = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useRecoilState(modalOpenState);
  const [date, setDate] = useRecoilState(pickDayState);

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
    setOpen(false);
    setDate("");
  };

  useEffect(() => {
    if (open) {
      handleOpenBtnClick();
    }
  }, [open]);

  return (
    <>
      <div className="flex flex-col-reverse h-full lg:flex-row bg-bgGray">
        <BoardContainer boardRef={boardModal}>
          <CreateModalLayout handleCloseClick={handleCloseBtnClick} />
        </BoardContainer>
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
