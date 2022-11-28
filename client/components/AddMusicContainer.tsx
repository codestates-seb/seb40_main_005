import BoardModalBtn from "./BoardModalBtn";
import HeadPhone from "./HeadPhone";
import Image from "next/image";
import BoardModalContainer from "./BoardModalContainer";

const MusicContainer = () => {
  return (
    <>
      <BoardModalContainer>
        <div className="flex flex-row w-full h-fit justify-between items-center">
          <input
            type="text"
            placeholder="원하는 음악을 검색하여 선택하세요!"
            className="mr-2 w-5/6 font-SCDream3 text-left text-sm md:text-sm lg:text-sm p-1.5 rounded-md border-[1px] border-btnOrange text-gray-700 outline-none"
          />
          <BoardModalBtn onClick={() => {}}>검색</BoardModalBtn>
        </div>
        <div className="flex flex-row w-full h-fit justify-start items-center border-[1px] border-btnOrange rounded-md mt-2 p-1">
          <Image
            src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/8eM/image/Oi_7RcW9KDJIvW_KNidn7CMmids.jpg"
            width={50}
            height={50}
            className="rounded-lg"
          />
          <div className="flex flex-row w-full h-full ml-1 px-3 justify-start items-center">
            <HeadPhone />
            <div className="font-SCDream5 text-left text-sm md:text-sm lg:text-sm ml-3 mt-0.5 text-gray-700">
              도망가자 - 선우정아
            </div>
          </div>
        </div>
      </BoardModalContainer>
    </>
  );
};

export default MusicContainer;
