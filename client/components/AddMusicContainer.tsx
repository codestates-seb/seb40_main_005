import BoardModalBtn from "./BoardModalBtn";
import HeadPhone from "./HeadPhone";
import Image from "next/image";
import BoardModalContainer from "./BoardModalContainer";
import YoutubeIcon from "./YoutubeIcon";

const AddMusicContainer = () => {
  return (
    <>
      <BoardModalContainer>
        <div className="flex flex-col w-full h-fit">
          <div className="flex flex-row w-full h-fit justify-start items-center pl-2  mb-1.5">
            <HeadPhone />
            <div className="font-SCDream5 text-left text-xs lg:text-sm mt-0.5 ml-3 text-gray-700">
              오늘의 노래는?
            </div>
          </div>
          <input
            type="text"
            placeholder="오늘의 인상적인 음악에 대해서 자유롭게 적어주세요"
            className=" w-full font-SCDream3 text-center text-xs md:text-sm lg:text-sm p-1.5 rounded-md border-[1px] border-btnOrange text-gray-700 outline-none"
          />
        </div>

        <div className="flex flex-col w-full h-fit mt-2">
          <div className="flex flex-row w-full h-fit justify-start items-center pl-2  mb-1">
            <YoutubeIcon />
            <div className="font-SCDream5 text-left text-xs lg:text-sm mt-0.5 ml-3 text-gray-700 mb-0.5">
              Youtube Link
            </div>
          </div>
          <input
            type="text"
            placeholder="오늘의 음악에 대한 youtube 링크를 적어주세요"
            className=" w-full font-SCDream3 text-center text-xs md:text-sm lg:text-sm p-1.5 rounded-md border-[1px] border-btnOrange text-gray-700 outline-none"
          />
        </div>
      </BoardModalContainer>
    </>
  );
};

export default AddMusicContainer;
