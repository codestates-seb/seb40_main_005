import PenImg from "../public/images/pen.svg";
import MyPageUserBox from "./MyPageUserBox";
import useGetSharedLog from "../hooks/mypage/useGetSharedLog";
import { ReactNode, useEffect } from "react";
import LogContainer from "./logContainer";
import LogDetail from "./logDetail";

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

  const renderLogs = () => {
    const Logs = sharedLog?.data;
    let logList: ReactNode[] = [];

    if (logSuccess) {
      Logs?.forEach((log: log) => {
        let logTime = log.time;
        let year = logTime[0];
        let month = logTime[1];
        let date = logTime[2];
        let hour = logTime[3];
        let minute = logTime[4];

        console.log(logTime);

        if (log.status === "alert") {
          logList.push(
            <LogContainer>
              <LogDetail>
                <span className="font-semibold">{log.shareFrom}</span>님이
                <span>{log.title}</span>
                게시물을 공유하였습니다.
              </LogDetail>
              <div className="flex flex-col items-end w-[6rem] text-[0.1rem] lg:text-sm">
                <div className="h-fit w-fit">{`${year}-${month}-${date}`}</div>
                <div className="h-fit w-fit">{`오후${hour}시${minute}분`}</div>
              </div>
            </LogContainer>,
          );
        } else if (log.status === "accept") {
          logList.push(
            <LogContainer>
              <LogDetail>
                <span>{log.shareTo}</span>님이
                <span>{log.title}</span> 게시물을 수락하였습니다.
              </LogDetail>

              <div className="flex flex-col items-end w-[6rem] text-[0.1rem]">
                <div className="h-fit w-fit">{`${year}-${month}-${date}`}</div>
                <div className="h-fit w-fit">{`오후${hour}시${minute}분`}</div>
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
              <div className="flex flex-col items-end w-[6rem] text-[0.1rem]">
                <div className="h-fit w-fit">{`${year}-${month}-${date}`}</div>
                <div className="h-fit w-fit">{`오후${hour}시${minute}분`}</div>
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
              <div className="flex flex-col items-end w-[6rem] text-[0.1rem]">
                <div className="h-fit w-fit">{`${year}-${month}-${date}`}</div>
                <div className="h-fit w-fit">{`오후${hour}시${minute}분`}</div>
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
      {/* <div className="flex flex-col md:mx-10 h-full md:w-9/12 md:drop-shadow-2xl">
        <MyPageUserBox />
        <div className="relative mt-3 mb-3 md:mt-6 ">
          <div className="z-10 text-base md:text-xl lg:text-2xl text-zinc-500 font-SCDream6">
            나의활동
          </div>
          <div className="absolute w-16 h-2 top-[1rem] md:w-[3.7rem] md:top-4 lg:w-24 lg:top-6 bg-mainOrange/40"></div> */}

      <MyPageUserBox />
      <div className="relative my-3">
        <div className="text-base md:text-xl text-zinc-500 font-SCDream6">
          나의활동
        </div>
        <div className="absolute w-16 h-2 top-[0.8rem] md:w-[3.7rem] md:top-4 lg:w-[4.9rem] lg:top-5 bg-mainOrange/40"></div>
      </div>

      <div className="p-3 flex flex-col bg-white w-full h-[31rem] drop-shadow-lg	text-zinc-500 font-SCDream6">
        <div className="flex flex-row justify-between text-sm font-semibold font-SCDream5 lg:px-6 lg:text-lg">
          <div className="h-fit w-fit">활동내용</div>
          <div className="h-fit w-fit">알림일자</div>
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

        <div className="mt-2">{renderLogs()}</div>

        {/* <div className="pl-2 h-fit w-10 text-[0.5rem] text-red-500">삭제</div> */}
      </div>
    </>
  );
};

export default MyLogBox;
