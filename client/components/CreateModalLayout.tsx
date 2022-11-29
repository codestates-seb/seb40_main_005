import CategoryInputContainer from "./CategoryInputContainer";
import LeftArrow from "./LeftArrow";
import AddMusicContainer from "./AddMusicContainer";
import AddPhothoContainer from "./AddPhotoContainer";
import AddTextContainer from "./AddTextContainer";
import AddShareContainer from "./AddShareContainer";
import BoardModalContainer from "./BoardModalContainer";
import BoardModalBtn from "./BoardModalBtn";

interface Props {
  handleCloseClick: () => void;
}

const CreateModalLayout = ({ handleCloseClick }: Props) => {
    const handleChange = (e:any) => {
        console.log(e.target.value);
    }


  return (
    <>
      <div className="flex flex-col justify-between overflow-auto items-center p-5 w-full h-full">
        <div className="w-full h-fit flex flex-row justify-around items-center">
          <div className="w-1/4 h-full">
            <LeftArrow onClick={handleCloseClick} />
          </div>

          <div className="w-3/4 h-full flex flex-col justify-center items-end">
            <CategoryInputContainer>
              <div className="relative items-center justify-center w-fit h-7 mt-2">
                <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
                  날짜
                </div>
                <div className="absolute top-3.5 left-0.5 right-0 bottom-2  bg-mainOrange/40"></div>
              </div>
              <input
                type="date"
                value="2022-06-13"
                className="w-2/3 h-fit font-SCDream3 text-right text-sm lg:text-sm text-gray-700 outline-none"
                onChange={handleChange}
              />
            </CategoryInputContainer>

            <CategoryInputContainer>
              <div className="relative items-center justify-center w-fit h-7 mt-2">
                <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
                  카테고리
                </div>
                <div className="absolute top-3.5 left-0.5 right-0 bottom-2  bg-mainOrange/40"></div>
              </div>
              <input
                type="text"
                placeholder="예) 크리스마스"
                className="w-2/3 h-fit font-SCDream3 text-right text-sm lg:text-sm text-gray-700 outline-none"
              />
            </CategoryInputContainer>

            <CategoryInputContainer>
              <div className="relative items-center justify-center w-fit h-7 mt-2">
                <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
                  제목
                </div>
                <div className="absolute top-3.5 left-0.5 right-0 bottom-2  bg-mainOrange/40"></div>
              </div>
              <input
                type="text"
                placeholder="입력하세요!"
                className="w-3/4 h-fit font-SCDream3 text-right text-sm lg:text-sm text-gray-700 outline-none"
              />
            </CategoryInputContainer>
          </div>
        </div>

        <div className="flex flex-col w-full h-fit justify-center items-start">
          <div className="relative items-center justify-center w-fit h-7 mt-2 ml-2">
            <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
              음악
            </div>
            <div className="absolute top-3.5 left-0.5 right-0 bottom-2  bg-mainOrange/40"></div>
          </div>

          <AddMusicContainer />
        </div>

        <div className="flex flex-col w-full h-fit justify-center items-start mt-2">
          <div className="relative items-center justify-center w-fit h-7 mt-2 ml-2">
            <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
              사진
            </div>
            <div className="absolute top-3.5 left-0.5 right-0 bottom-2  bg-mainOrange/40"></div>
          </div>

          <AddPhothoContainer />
          <div className="w-full h-fit flex flex-col justify-start items-end font-SCDream5 text-left text-xs mt-3 text-mainOrange">
            사진은 한 게시물당 1개만 올릴 수 있습니다
          </div>
        </div>

        <div className="flex flex-col w-full h-fit justify-center items-start">
          <div className="relative items-center justify-center w-fit h-7 mt-2 ml-2">
            <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
              게시글
            </div>
            <div className="absolute top-3.5 left-0.5 right-0 bottom-2  bg-mainOrange/40"></div>
          </div>

          <AddTextContainer />
        </div>

        <div className="flex flex-col w-full h-fit justify-center items-start mt-1">
          <div className="relative items-center justify-center w-fit h-7 mt-2 ml-2">
            <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
              공유
            </div>
            <div className="absolute top-3.5 left-0.5 right-0 bottom-2  bg-mainOrange/40"></div>
          </div>

          <AddShareContainer />
        </div>

        <div className="w-full h-8 flex flex-row justify-center items-center mt-5">
          <BoardModalBtn onClick={() => {}}>저 장</BoardModalBtn>
        </div>
      </div>
    </>
  );
};

export default CreateModalLayout;
