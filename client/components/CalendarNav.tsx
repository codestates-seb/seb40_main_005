import Link from "next/link";

const CalendarNav = () => {
  return (
    <>
      <nav className="flex justify-between w-full py-3 space-x-2 font-SCDream4 text-textGray">
        <div className="relative">
          <Link href={"/myPage"}>마이페이지</Link>
          <div className="absolute w-[4.8rem] h-2 top-[0.8rem] md:top-3 lg:w-4 lg:top-[0.8rem] bg-mainOrange/40"></div>
        </div>
        <div className="relative">
          <button type="button">공유알림</button>
          <div className="absolute w-[3.9rem] h-2 top-[0.8rem] md:top-3 lg:w-4 lg:top-[0.8rem] bg-mainOrange/40"></div>
        </div>
        <div className="relative">
          <div className="rounded-full bg-noticeRed"></div>
          <button type="button">알림</button>
          <div className="absolute w-8 h-2 top-[0.8rem] md:top-3 lg:w-4 lg:top-[0.8rem] bg-mainOrange/40"></div>
        </div>
        <div className="relative">
          <button type="button">로그아웃</button>
          <div className="absolute w-[3.8rem] h-[0.3rem] top-[0.85rem] md:top-3 lg:w-4 lg:top-[0.8rem] bg-mainOrange/40"></div>
        </div>
      </nav>
    </>
  );
};

export default CalendarNav;
