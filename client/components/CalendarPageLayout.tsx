import CalendarContainer from "./CalendarContainer";
import CalendarNav from "./CalendarNav";
import Sidebar from "./Sidebar";
import BoardContainer from "./BoardContainer";
import { useEffect, useRef, useState } from "react";
import CreateModalLayout from "./CreateModalLayout";
import { useRecoilState } from "recoil";
import {
  modalOpenState,
  pickDayState,
  readModalOpenState,
} from "../recoil/calendarAtom";
import ReadModalLayout from "./ReadModalLayout";

const CalendarPageLayout = () => {
  const boardModal = useRef<HTMLDivElement>(null);
  const CreateBoardModal = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useRecoilState(modalOpenState);
  const [readOpen, setReadOpen] = useRecoilState(readModalOpenState);
  // const [date, setDate] = useRecoilState(pickDayState);

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
    // setDate("");
  };

  const handleReadOpenBtnClick = () => {
    const { current } = CreateBoardModal;

    if (current?.style.transform !== undefined) {
      window.innerWidth < 376
        ? (current.style.transform = "translateY(0)")
        : (current.style.transform = "translateX(0)");
    }
  };

  const handleReadCloseBtnClick = () => {
    const { current } = CreateBoardModal;

    if (current?.style.transform !== undefined) {
      window.innerWidth < 376
        ? (current.style.transform = "translateY(100%)")
        : (current.style.transform = "translateX(100%)");
    }
    setReadOpen(false);
    // setDate("");
  };

  useEffect(() => {
    if (open) {
      handleOpenBtnClick();
    } else if (readOpen) {
      handleReadOpenBtnClick();
    }
  }, [open, readOpen]);

  return (
    <>
      {/* <div className="flex flex-col-reverse w-full h-full pb-6 lg:flex-row bg-bgGray"> */}
      <BoardContainer boardRef={boardModal}>
        <CreateModalLayout handleCloseClick={handleCloseBtnClick} />
      </BoardContainer>
      <BoardContainer boardRef={CreateBoardModal}>
        <ReadModalLayout
          handleReadCloseClick={handleReadCloseBtnClick}
          handleOpenBtnClick={handleOpenBtnClick}
        />
      </BoardContainer>
      <div className="flex flex-col-reverse w-full h-full lg:flex-row mb-5 pb-3 bg-bgGray">
        <Sidebar />
        <div className="w-full h-full lg:pr-10 lg:pl-5">
          <CalendarNav />
          <CalendarContainer></CalendarContainer>
        </div>
      </div>
    </>
  );
};

export default CalendarPageLayout;
