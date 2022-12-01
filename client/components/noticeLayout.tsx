import { useEffect } from "react";
import useGetShareNotice from "../hooks/notice/useGetShareNotice";
import ShareNotice from "./ShareNotice";

const NoticeLayout = () => {
  const { data: shareNotice, refetch: shareNoticeRefetch } =
    useGetShareNotice();

  useEffect(() => {
    shareNoticeRefetch();
  }, []);

  console.log(shareNotice);
  //   [
  //   {
  //     "boardId": 0,
  //     "shareDateTime": "2022-11-30T17:03:34.190Z",
  //     "shareId": "string",
  //     "title": "string"
  //   }
  // ]

  return (
    <>
      <div className="flex flex-col speech-bubble text-[#707070]">
        <h2 className="self-center mb-2 text-lg font-SCDream6">
          공유 신청 리스트
        </h2>
        <ShareNotice />
        <button className="relative" type="button">
          <span className="text-sm font-SCDream5">나의 활동 전체보기</span>
          <div className="absolute w-[7.2rem] h-[0.4rem] top-[0.85rem] left-[5.5rem] bg-mainOrange/40"></div>
        </button>
      </div>
    </>
  );
};

export default NoticeLayout;
