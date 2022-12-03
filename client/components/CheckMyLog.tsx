import PenImg from "../public/images/pen.svg";
import MyPageUserBox from "./MyPageUserBox";

const MyLogBox = () => {
  return (
    <>
      <MyPageUserBox />
      <div className="relative my-3">
        <div className="z-10 text-base md:text-xl lg:text-2xl text-zinc-500 font-SCDream6">
          나의활동
        </div>
        <div className="absolute w-16 h-2 top-[0.8rem] md:w-[3.7rem] md:top-4 lg:w-[4.4rem] lg:top-5 bg-mainOrange/40"></div>
      </div>
      <div className="p-3 flex flex-col bg-white w-full h-[31rem] drop-shadow-lg	text-zinc-500 font-SCDream6">
        <div className="pl-20 flex flex-row justify-around text-sm">
          <div className="h-fit w-fit">활동내용</div>
          <div className="h-fit w-fit pl-10">알림일자</div>
        </div>

        {/* 나중에 map으로 뿌리기 */}

        <div className="flex flex-row items-center mt-2 justify-around ">
          <div className="h-full max-w-90 text-[0.1rem]">
            yeowool님이 '도망가자' 게시물을 공유하였습니다.하하하ㅏ하하
          </div>
          <div className="flex flex-col items-end w-[6rem] text-[0.1rem]">
            <div className="h-fit w-fit">2022-11-02</div>
            <div className="h-fit w-fit">오후11시58분</div>
          </div>
          <div className="pl-2 h-fit w-10 text-[0.5rem] text-red-500">삭제</div>
        </div>

        <div className="flex flex-row items-center mt-2 justify-around ">
          <div className="h-full max-w-90 text-[0.1rem]">
            yeowool님이 '도망가자' 게시물을 공유하였습니다.하하하ㅏ하하
          </div>
          <div className="flex flex-col items-end w-[6rem] text-[0.1rem]">
            <div className="h-fit w-fit">2022-11-02</div>
            <div className="h-fit w-fit">오후11시58분</div>
          </div>
          <div className="pl-2 h-fit w-10 text-[0.5rem] text-red-500">삭제</div>
        </div>
      </div>
    </>
  );
};

export default MyLogBox;
