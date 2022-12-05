import { ReactNode, useEffect } from "react";
import useGetShareNotice from "../hooks/notice/useGetShareNotice";
import ShareNotice from "./ShareNotice";
import { useQueryClient } from "react-query";
import { useRecoilState } from "recoil";
import { getShareNoticeState } from "../recoil/calendarAtom";

interface Shared {
  boardId: string;
  shareId: string;
  title: string;
}

const ShareNoticeContainer = () => {
  const {
    data: shareNotice,
    refetch: shareNoticeRefetch,
    isSuccess: Successed,
  } = useGetShareNotice();
  let SharedList = shareNotice?.data;
  const queryClient = useQueryClient();

  const [getShareNotice, setGetShareNotice] =
    useRecoilState(getShareNoticeState);

  const renderNotices = (): ReactNode => {
    let shareNoticeLi: any[] = [];

    SharedList?.forEach((share: Shared) => {
      shareNoticeLi.push(
        <ShareNotice
          key={share.boardId}
          shareId={share.shareId}
          title={share.title}
          boardId={share.boardId}
        />,
      );
    });

    return shareNoticeLi;
  };

  useEffect(() => {
    shareNoticeRefetch();

    if (Successed) {
      renderNotices();
      queryClient.invalidateQueries("get/boards");
    }
  }, [getShareNotice]);

  return (
    <>
      <div className="flex flex-col speech-bubble text-[#707070]">
        <h2 className="self-center mb-2 text-sm md:text-lg font-SCDream6">
          공유 신청 리스트
        </h2>
        <div>{renderNotices()}</div>
        <button className="relative" type="button">
          <span className="text-xs md:text-sm font-SCDream5">
            나의 활동 전체보기
          </span>
          <div className="absolute w-[6.3rem] md:w-[7.2rem] h-[0.4rem] top-[0.85rem] left-[2.6rem] md:left-[4rem] lg:left-16 bg-mainOrange/40"></div>
        </button>
      </div>
    </>
  );
};

export default ShareNoticeContainer;
