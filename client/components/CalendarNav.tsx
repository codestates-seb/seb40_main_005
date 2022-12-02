import Link from "next/link";
import { useState } from "react";
import ShareNoticeContainer from "./ShareNoticeContainer";
import { useSetRecoilState } from "recoil";
import { isLoginState } from "../recoil/authAtom";
import { useRouter } from "next/router";
import ShippingNoticeContainer from "./ShippingNoticeContainer";

const CalendarNav = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);

  const router = useRouter();
  const setIsLoginState = useSetRecoilState(isLoginState);
  const handleShareNotice = () => {
    setIsShareOpen(!isShareOpen);
    setIsShippingOpen(false);
  };

  const handleShippingNotice = () => {
    setIsShippingOpen(!isShippingOpen);
    setIsShareOpen(false);
  };

  const onLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userName");
    setIsLoginState(false);
    router.push("/");
  };

  const confirmLogout = () => {
    if (confirm("정말 로그아웃 하시겠습니까?")) {
      onLogout();
    }
  };

  return (
    <>
      <nav className="flex justify-between w-full py-3 space-x-2 lg:py-5 md:justify-evenly lg:justify-end lg:space-x-12 font-SCDream4 text-textGray">
        <div className="relative">
          <Link href={"/mypage"}>마이페이지</Link>
          <div className="absolute w-[4.8rem] h-2 top-[0.8rem] md:top-3 lg:w-18 lg:top-[0.8rem] bg-mainOrange/40"></div>
        </div>
        <div className="relative">
          {/* 알림 스타일 */}
          <div className="absolute left-[-7.3rem] md:left-[-10rem] z-10 top-10">
            {isShareOpen ? <ShareNoticeContainer /> : null}
          </div>

          <div className="absolute w-2 h-2 rounded-full top-[-4px] left-[3.8rem] bg-noticeRed"></div>

          <button onClick={handleShareNotice} type="button">
            공유알림
          </button>
          <div className="absolute w-[3.9rem] h-2 top-[0.8rem] md:top-3 lg:w-18 lg:top-[0.8rem] bg-mainOrange/40"></div>
        </div>
        <div className="relative">
          {/* 알림 스타일 */}
          <div className="absolute left-[-8.8rem] md:left-[-12rem] z-10 top-10">
            {isShippingOpen ? <ShippingNoticeContainer /> : null}
          </div>
          <div className="absolute w-2 h-2 rounded-full top-[-3px] left-[1.9rem] bg-noticeRed"></div>

          <button onClick={handleShippingNotice} type="button">
            알림
          </button>
          <div className="absolute w-8 h-2 top-[0.8rem] md:top-3 lg:w-8 lg:top-[0.8rem] bg-mainOrange/40"></div>
        </div>
        <div className="relative">
          <button onClick={confirmLogout} type="button">
            로그아웃
          </button>
          <div className="absolute w-[3.8rem] h-[0.3rem] top-[0.85rem] md:top-3 lg:w-18 lg:top-[0.8rem] bg-mainOrange/40"></div>
        </div>
      </nav>
    </>
  );
};

export default CalendarNav;
