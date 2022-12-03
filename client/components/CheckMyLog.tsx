import PenImg from "../public/images/pen.svg";
import MyPageUserBox from "./MyPageUserBox";

const MyLogBox = () => {
  return (
    <>
      <div className="flex flex-col md:mx-10 h-full md:w-9/12 md:drop-shadow-2xl">
        <MyPageUserBox />
        <div className="relative mt-3 mb-3 md:mt-6 ">
          <div className="z-10 text-base md:text-xl lg:text-2xl text-zinc-500 font-SCDream6">
            나의활동
          </div>
          <div className="absolute w-16 h-2 top-[1rem] md:w-[3.7rem] md:top-4 lg:w-24 lg:top-6 bg-mainOrange/40"></div>
        </div>
        <div className="p-3 flex flex-col bg-white w-full h-[29rem]  drop-shadow-lg	text-zinc-500 font-SCDream6">
          <div className="md:text-base  flex  flex-row text-sm justify-end  mr-2 md:mr-[3rem] md:py-3 mb-2 md:mb-0 md:justify-between ">
            <div className=" flex justify-center h-fit w-5/6 min-w-1  md:min-w-[4rem]">
              활동내용
            </div>
            <div className="flex justify-end h-fit w-1/6  min-w-[4rem]">
              알림일자
            </div>
          </div>

          {/* 나중에 map으로 뿌리기 */}

          <div className="flex flex-row items-center mt-2 justify-between  px-3 md:pl-3 md:pr-10">
            <div className="h-full max-w-90 text-[0.1rem] md:text-sm items-center">
              yeowool님이 '도망가자'
            </div>

            <div className="flex flex-col items-end w-[6rem] md:justify-between  text-[0.1rem] md:text-sm pr-2 md:pr-0">
              <div className="h-fit w-fit">2022-11-02</div>
              <div className="h-fit w-fit">오후11시58분</div>
            </div>
            {/* <div className="pl-2 h-fit w-10 text-[0.5rem] text-red-500">
              삭제
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyLogBox;
