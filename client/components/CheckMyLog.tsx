import PenImg from "../public/images/pen.svg";
import MyPageUserBox from "./MyPageUserBox";
import useGetSharedLog from "../hooks/mypage/useGetSharedLog";
import { ReactNode, useEffect, useState } from "react";
import LogContainer from "./LogContainer";
import LogDetail from "./LogDetail";
import Pagination from "react-js-pagination";

interface log {
  shareFrom: string;
  shareTo: string;
  status: string;
  title: string;
  time: number[];
}

const MyLogBox = () => {
  const {
    data: sharedLog,
    refetch: getSharedLog,
    isSuccess: logSuccess,
  } = useGetSharedLog();

  const [page, setPage] = useState(1);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  console.log(sharedLog);

  const renderLogs = () => {
    const Logs = sharedLog?.data.content;
    let logList: ReactNode[] = [];

    if (logSuccess) {
      Logs?.forEach((log: log) => {
        let logTime = log.time;
        let year = logTime[0];
        let month = logTime[1];
        let date = logTime[2];
        let hour =
          logTime[3] >= 12 ? `오후 ${logTime[3] - 12}` : `오전 ${logTime[3]}`;
        let minute = logTime[4] < 10 ? `0${logTime[4]}` : logTime[4];

        if (log.status === "alert") {
          logList.push(
            <LogContainer>
              <LogDetail>
                <span>{log.shareFrom}</span>님이 <span>{log.title}</span>
                게시물을 공유하였습니다.
              </LogDetail>
              <div className="font-SCDream5 flex flex-col items-end w-[6rem] text-[0.1rem] md:text-[0.2rem] lg:text-sm">
                <div className="h-fit w-fit">{`${year}-${month}-${date}`}</div>
                <div className="h-fit w-fit">{`${hour}시 ${minute}분`}</div>
              </div>
            </LogContainer>,
          );
        } else if (log.status === "accept") {
          logList.push(
            <LogContainer>
              <LogDetail>
                <span>{log.shareTo}</span>님이 <span>{log.title}</span> 게시물을
                수락하였습니다.
              </LogDetail>

              <div className="font-SCDream5 flex flex-col items-end w-[6rem] text-[0.1rem] md:text-[0.2rem] lg:text-sm">
                <div className="h-fit w-fit">{`${year}-${month}-${date}`}</div>
                <div className="h-fit w-fit">{`${hour}시${minute}분`}</div>
              </div>
            </LogContainer>,
          );
        } else if (log.status === "deny") {
          logList.push(
            <LogContainer>
              <LogDetail>
                <span>{log.shareTo}</span>님이 <span>{log.title}</span> 게시물을
                거절하였습니다.
              </LogDetail>
              <div className="font-SCDream5 flex flex-col items-end w-[6rem] text-[0.1rem] md:text-[0.2rem] lg:text-sm">
                <div className="h-fit w-fit">{`${year}-${month}-${date}`}</div>
                <div className="h-fit w-fit">{`${hour}시${minute}분`}</div>
              </div>
            </LogContainer>,
          );
        } else if (log.status === "shared") {
          logList.push(
            <LogContainer>
              <LogDetail>
                <span>{log.shareTo}</span>님이 <span>{log.shareFrom}</span>
                게시물을 공유하였습니다.
              </LogDetail>
              <div className="font-SCDream5 flex flex-col items-end w-[6rem] text-[0.1rem] md:text-[0.2rem] lg:text-sm">
                <div className="h-fit w-fit">{`${year}-${month}-${date}`}</div>
                <div className="h-fit w-fit">{`${hour}시${minute}분`}</div>
              </div>
            </LogContainer>,
          );
        }
      });
    }

    return logList;
  };

  useEffect(() => {
    getSharedLog();
  }, []);

  return (
    <>
      {/* <div className="flex flex-col h-full md:mx-10 md:w-9/12 md:drop-shadow-2xl">
        <MyPageUserBox />
        <div className="relative mt-3 mb-3 md:mt-6 ">
          <div className="z-10 text-base md:text-xl lg:text-2xl text-zinc-500 font-SCDream6">
            나의활동
          </div>
          <div className="absolute w-16 h-2 top-[1rem] md:w-[3.7rem] md:top-4 lg:w-24 lg:top-6 bg-mainOrange/40"></div> */}
      <div className="flex flex-col w-full h-full md:mx-8">
        <MyPageUserBox />
        <div className="relative my-3">
          <div className="text-base md:text-xl text-zinc-500 font-SCDream6">
            나의활동
          </div>
          <div className="absolute w-16 h-2 top-[0.8rem] md:w-20 md:top-4 lg:w-[4.9rem] lg:top-[1.1rem] bg-mainOrange/40"></div>
        </div>

        <div className="pt-4 px-3 md:px-4 lg:px-3 flex flex-col bg-white w-full h-[31rem] drop-shadow-lg	text-zinc-500 font-SCDream6">
          <div className="flex flex-row justify-between text-sm font-semibold font-SCDream5 lg:px-10 lg:text-lg">
            <div className="md:pl-28 h-fit w-fit">활동내용</div>
            <div className="h-fit w-fit">알림일자</div>
          </div>

          <div className="mt-2">{renderLogs()}</div>
          {/* <div className="pl-2 h-fit w-10 text-[0.5rem] text-red-500">삭제</div> */}
          {/* <div className="pagination-wrapper"> */}
          {/* <Pagination
              activePage={page} //현재페이지
              itemsCountPerPage={8} //한페이지당 보여줄 질문 개수 -> size -> 받아와야함
              totalItemsCount={10} //총 질문 개수 -> totalElements -> atom에 질문총개수 상태 존재
              pageRangeDisplayed={5} //페이지네이션에서 보여줄 페이지버튼 개수(범위)
              prevPageText={"prev"} // 이전 버튼
              nextPageText={"next"} // 이후 버튼
              onChange={handlePageChange} //페이지 바뀔 때 페이지상태값 변경함수
            /> */}
          {/* </div> */}

          {/* Pagination 하드코딩  */}
          <div className="flex justify-center mt-12">
            <div className="flex flex-row items-center justify-between text-lg w-80 font-SCDream5">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-btnOrange"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
              <div className="flex flex-row items-center justify-between space-x-3 w-52">
                <button type="button">1</button>
                <span className="text-btnOrange">|</span>
                <button type="button">2</button>
                <span className="text-btnOrange">|</span>
                <button
                  className="px-3 py-[0.15rem] text-white rounded-full bg-btnOrange/40"
                  type="button"
                >
                  3
                </button>
                <span className="text-btnOrange">|</span>
                <button type="button">4</button>
                <span className="text-btnOrange">|</span>
                <button type="button">5</button>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-btnOrange"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyLogBox;
