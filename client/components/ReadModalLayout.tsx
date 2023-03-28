import LeftArrow from "./LeftArrow";
import OptionBtn from "./OptionBtn";
import MapIcon from "./MapIcon";
import CategoryReadContainer from "./CategoryReadContainer";
import BoardModalContainer from "./BoardModalContainer";
import Link from "next/link";
import HeadPhone from "./HeadPhone";
import {
  boardItemState,
  pickDayState,
  boardSharedState,
  editModeState,
  getBoardState,
  getBoardId,
} from "../recoil/calendarAtom";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import Image from "next/image";
import OptionModal from "./OptionModal";
import CrossIcon from "./CrossIcon";
import useDeleteBoard from "../hooks/calendar/useDeleteBoard";
import Router, { useRouter } from "next/router";

interface Props {
  handleReadCloseClick: () => void;
  handleOpenBtnClick: () => void;
}

const ReadModalLayout = ({
  handleReadCloseClick,
  handleOpenBtnClick,
}: Props) => {
  const [boardData, setBoardData] = useRecoilState(boardItemState);
  const [date, setDate] = useRecoilState(pickDayState);
  const [optionView, setOptionView] = useState<boolean>(false);
  const [shared, setShared] = useRecoilState(boardSharedState);
  const [editMode, setEditMode] = useRecoilState(editModeState);
  const [getBoard, setGetBoard] = useRecoilState(getBoardState);
  const [boardId, setBoardId] = useRecoilState(getBoardId);

  let splitDate = date.split("-");

  const { isSuccess: deleteSuccss, mutate: deleteMute } = useDeleteBoard({
    boardId,
  });

  const handleOptionClick = () => {
    setOptionView(true);
  };

  const handleCloseOptionClick = () => {
    setOptionView(false);
  };

  const handleDelete = () => {
    let res = window.confirm("게시글을 삭제하시겠습니까?");
    if (res) {
      deleteMute({ boardId });
      handleReadCloseClick();
    }
  };

  const handleUpdate = () => {
    let res = window.confirm("게시글을 수정하시겠습니까?");
    if (res) {
      handleReadCloseClick();
      handleOpenBtnClick();
      setOptionView(false);
      setEditMode(true);
    }
  };

  const handleCancelBtn = () => {
    handleReadCloseClick();
    setOptionView(false);
  };

  useEffect(() => {
    if (deleteSuccss) {
      alert("삭제되었습니다");
      setGetBoard(!getBoard);
      setBoardId(0);
    }
  }, [deleteSuccss]);

  return (
    <>
      <div className="flex flex-col items-center justify-between min-w-[350px] w-full h-full p-5 overflow-auto">
        <div className="flex flex-row items-center justify-around w-full h-fit">
          <div className="flex flex-col items-start justify-between w-1/4 h-full">
            <LeftArrow onClick={handleCancelBtn} />
            <div className="flex flex-row items-center justify-center pb-3 w-fit h-fit">
              <MapIcon />
              <div className="ml-0.5  text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
                서비스 준비중
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-center w-3/4 h-full">
            <OptionBtn onClick={handleOptionClick} />
            {optionView ? (
              <div className="relative w-full h-fit">
                {shared ? (
                  <OptionModal>
                    <div className="flex flex-col items-end justify-center mb-3">
                      <CrossIcon onClick={handleCloseOptionClick} />
                    </div>
                    <div
                      className="ml-0.5 mt-3 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5 cursor-pointer"
                      onClick={handleDelete}
                    >
                      삭제하기
                    </div>
                  </OptionModal>
                ) : (
                  <OptionModal>
                    <div className="flex flex-col items-end justify-center mb-3">
                      <CrossIcon onClick={handleCloseOptionClick} />
                    </div>
                    <div
                      className="ml-0.5  text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5 cursor-pointer"
                      onClick={handleUpdate}
                    >
                      수정하기
                    </div>
                    <div
                      className="ml-0.5 mt-3 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5 cursor-pointer"
                      onClick={handleDelete}
                    >
                      삭제하기
                    </div>
                  </OptionModal>
                )}
              </div>
            ) : null}

            <CategoryReadContainer>
              <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
                {boardData.data ? `#${boardData.data[0].category}` : null}
              </div>
            </CategoryReadContainer>
            <CategoryReadContainer>
              <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
                {`${splitDate[0]}년 ${splitDate[1]}월 ${splitDate[2]}일`}
              </div>
            </CategoryReadContainer>
          </div>
        </div>
        <BoardModalContainer>
          <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
            {boardData.data ? boardData.data[0].title : null}
          </div>
        </BoardModalContainer>
        <BoardModalContainer>
          <div className="flex flex-col items-center justify-center w-full h-fit">
            <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
              {boardData.data ? boardData.data[0].music : null}
            </div>
            <div className="flex flex-row items-start justify-center w-full mt-2 h-fit">
              <HeadPhone />
              <div className="z-10 ml-1 text-xs md:text-xs lg:text-xs text-mainOrange font-SCDream5">
                <Link href={boardData.data ? boardData.data[0].url : "#"}>
                  <a target="_blank">음악들으러가기</a>
                </Link>
              </div>
            </div>
          </div>
        </BoardModalContainer>
        <BoardModalContainer>
          {/* <div className="w-1/2 h-[500px] bg-amber-500 p-3">
            </div> */}
          <img src={boardData.data ? boardData.data[0].photo : null} />
        </BoardModalContainer>
        <BoardModalContainer>
          <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
            {boardData.data ? boardData.data[0].content : null}
          </div>
        </BoardModalContainer>
        <BoardModalContainer>
          {!boardData.data ? null : boardData.data[0].tagsMembers.length ===
            0 ? (
            <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-mainOrange/40 font-SCDream5">
              아직 공유한 사람이 없어요
            </div>
          ) : (
            <div className="flex flex-row items-center justify-center w-full h-fit">
              {boardData.data[0].tagsMembers.map((el: string) => {
                return (
                  <div
                    className="text-xs font-SCDream5 text-bgWhite w-fit h-fit p-1.5 mx-1 rounded-lg bg-mainOrange"
                    key={el}
                  >
                    {el}
                  </div>
                );
              })}
              <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-mainOrange font-SCDream5">
                와 함께합니다.
              </div>
            </div>
          )}
        </BoardModalContainer>
      </div>
    </>
  );
};

export default ReadModalLayout;
