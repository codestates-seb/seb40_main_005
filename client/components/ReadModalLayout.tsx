import LeftArrow from "./LeftArrow";
import OptionBtn from "./OptionBtn";
import MapIcon from "./MapIcon";
import CategoryReadContainer from "./CategoryReadContainer";
import BoardModalContainer from "./BoardModalContainer";
import Link from "next/link";
import HeadPhone from "./HeadPhone";
import { boardItemState, pickDayState } from "../recoil/calendarAtom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import Image from "next/image";
import OptionModal from "./OptionModal";

interface Props {
  handleCloseClick: () => void;
}

const ReadModalLayout = ({ handleCloseClick }: Props) => {
  const [boardData, setBoardData] = useRecoilState(boardItemState);
  const [date, setDate] = useRecoilState(pickDayState);

  // useEffect(()=> {
  //     console.log(boardData);
  //   },[boardData])
  // console.log(date);
  let splitDate = date.split("-");
  console.log(boardData);

  return (
    <>
      <div className="flex flex-col items-center justify-start w-full h-full p-5 overflow-auto">
        <div className="flex flex-row items-center justify-around w-full h-fit">
          <div className="w-1/4 h-full flex flex-col justify-between items-start">
            <LeftArrow onClick={handleCloseClick} />
            <div className="flex flex-row w-fit h-fit justify-center items-center pb-3">
              <MapIcon />
              <div className="ml-0.5  text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
                서비스 준비중
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-center w-3/4 h-full">
            <OptionBtn onClick={() => {}} />

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
          <div className="flex flex-col justify-center items-center w-full h-fit">
            <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
              {boardData.data ? boardData.data[0].music : null}
            </div>
            <div className="flex flex-row justify-center items-start w-full h-fit mt-2">
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
            <div className="flex flex-row w-full h-fit justify-center items-center">
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
