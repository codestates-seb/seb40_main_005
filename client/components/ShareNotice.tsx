import useGetAcceptNotice from "../hooks/notice/useGetAcceptNotice";
import useGetDenyNotice from "../hooks/notice/useGetDenyNotice";
import { useRecoilState } from "recoil";
import { getBoardState, getShareNoticeState } from "../recoil/calendarAtom";

interface Props {
  shareId: string;
  title: string;
  boardId: string;
}

const ShareNotice = ({ shareId, title, boardId }: Props) => {
  const { refetch: acceptNoticeRefetch } = useGetAcceptNotice(boardId);
  const { refetch: denyNoticeRefetch } = useGetDenyNotice(boardId);

  const [getBoard, setGetBoard] = useRecoilState(getBoardState);
  const [getShareNotice, setGetShareNotice] =
    useRecoilState(getShareNoticeState);

  const approveShareNotice = () => {
    acceptNoticeRefetch();
    setGetShareNotice(!getShareNotice);
    setGetBoard(!getBoard);
  };

  const denyShareNotice = () => {
    denyNoticeRefetch();
    setGetShareNotice(!getShareNotice);
    setGetBoard(!getBoard);
  };

  return (
    <>
      <div className="font-SCDream4 bg-[#FEFEFE] my-1">
        <div className="mb-1 text-[10px] md:text-xs">
          {shareId}님이 공유하셨습니다
        </div>
        <div className="flex flex-row items-center justify-between md:px-4">
          <strong className="text-[0.9rem] md:text-[1rem] font-SCDream5 w-[7.5rem] md:w-32 truncate overflow-ellipsis">
            {title}
          </strong>

          <div>
            {/* 체크버튼 */}
            <button onClick={approveShareNotice} type="button" className="px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5 md:w-6 md:h-6 text-[#FFAD8A]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            {/* 엑스버튼 */}
            <button onClick={denyShareNotice} type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5 md:w-6 md:h-6 text-[#FF6868]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareNotice;
