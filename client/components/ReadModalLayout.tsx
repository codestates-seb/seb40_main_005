import LeftArrow from "./LeftArrow";
import OptionBtn from "./OptionBtn";
import MapIcon from "./MapIcon";
import CategoryReadContainer from "./CategoryReadContainer";
import BoardModalContainer from "./BoardModalContainer";
import Link from "next/link";
import HeadPhone from "./HeadPhone";

interface Props {
  handleCloseClick: () => void;
}

const ReadModalLayout = ({ handleCloseClick }: Props) => {
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
                #크리스마스
              </div>
            </CategoryReadContainer>
            <CategoryReadContainer>
              <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
                2022년 11월 14일
              </div>
            </CategoryReadContainer>
          </div>
        </div>
        <BoardModalContainer>
          <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
            이것은 제목입니다
          </div>
        </BoardModalContainer>
        <BoardModalContainer>
          <div className="flex flex-col justify-center items-center w-full h-fit">
            <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
              아이유-Love Poem
            </div>
            <div className="flex flex-row justify-center items-start w-full h-fit mt-2">
              <HeadPhone />
              <div className="z-10 ml-1 text-xs md:text-xs lg:text-xs text-mainOrange font-SCDream5">
                <Link href="https://youtu.be/iOKRYIMhaDk">
                  <a target="_blank">음악들으러가기</a>
                </Link>
              </div>
            </div>
          </div>
        </BoardModalContainer>
        <BoardModalContainer>
            <div className="w-[500px] h-[500px] bg-amber-500">heloo</div>
        </BoardModalContainer>
        <BoardModalContainer>
          <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
            게시글입니다
          </div>
        </BoardModalContainer>
        <BoardModalContainer>
          <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
            님과 함께합니다.
          </div>
        </BoardModalContainer>
      </div>
    </>
  );
};

export default ReadModalLayout;
