import Link from "next/link";
import ShareNoticeContainer from "./ShareNoticeContainer";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isLoginState } from "../recoil/authAtom";
import { useRouter } from "next/router";
import ShippingNoticeContainer from "./ShippingNoticeContainer";
import {
  getShareModalState,
  getShippingModalState,
  hasSharedData,
} from "../recoil/calendarAtom";
import useGetShareNotice from "../hooks/notice/useGetShareNotice";
import { useEffect } from "react";

const CalendarNav = () => {
  const router = useRouter();
  const setIsLoginState = useSetRecoilState(isLoginState);
  const [isShareOpen, setIsShareOpen] = useRecoilState(getShareModalState);
  const [isShippingOpen, setIsShippingOpen] = useRecoilState(
    getShippingModalState,
  );

  const {
    data: shareNotice,
    refetch: shareNoticeRefetch,
    isSuccess: Successed,
  } = useGetShareNotice();

  const [hasSharedNotice, setHasSharedNotice] = useRecoilState(hasSharedData);

  useEffect(() => {
    shareNoticeRefetch();
  }, []);

  useEffect(() => {
    shareNotice?.data.length > 0
      ? setHasSharedNotice(true)
      : setHasSharedNotice(false);
  }, [Successed]);

  const handleShareNotice = () => {
    setIsShareOpen(!isShareOpen);
    setIsShippingOpen(false);
  };

  const handleShippingNotice = () => {
    setIsShippingOpen(!isShippingOpen);
    setIsShareOpen(false);
  };

  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("memberId");
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
      <nav className="flex justify-between w-full px-3 space-x-2 pt-7 lg:py-7 md:px-0 md:justify-evenly lg:justify-end lg:space-x-12 font-SCDream4 text-textGray">
        <div className="relative">
          <Link href={"/mypage"}>마이페이지</Link>
          <div className="absolute w-[4.8rem] h-2 top-[0.8rem] md:top-3 lg:w-18 lg:top-[0.8rem] bg-mainOrange/40"></div>
        </div>
        <div className="relative">
          {/* 알림 스타일 */}
          <div className="absolute left-[-6.5em] md:left-[-10rem] z-10 top-10">
            {isShareOpen ? <ShareNoticeContainer /> : null}
          </div>

          {hasSharedNotice ? (
            <div className="absolute w-2 h-2 rounded-full top-[-4px] left-[3.8rem] bg-noticeRed"></div>
          ) : null}

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
          {/* {hasSharedNotice ? <div className="absolute w-2 h-2 rounded-full top-[-3px] left-[1.9rem] bg-noticeRed"></div> : null} */}

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
