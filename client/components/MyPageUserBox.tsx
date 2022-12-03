import PenImg from "../public/images/pen.svg";
import useGetUserInfo from "../hooks/mypage/useGetUserInfo";
import { useEffect, useState } from "react";

const MyPageUserBox = () => {
  const { data: userInfo, refetch: requestUserInfo } = useGetUserInfo();

  useEffect(() => {
    requestUserInfo();
  }, []);

  return (
    <>
      <div className="px-4 bg-white lg:pl-12 text-zinc-500 h-28 drop-shadow-lg">
        <div className="flex flex-col w-full h-full justify-evenly lg:justify-between lg:items-center lg:ustify-between lg:flex-row lg:w-3/4">
          <div className="text-xl md:text-2xl lg:text-3xl font-SCDream6">
            {userInfo?.data.id}
            <span className="pl-2 text-sm lg:pl-4 lg:text-lg font-SCDream5">
              님
            </span>
          </div>

          <div className="flex flex-row items-center text-zinc-500">
            <div className="relative ">
              <span className="text-sm lg:font-semibold md:text-lg font-SCDream5 md:min-w-[5rem] ">
                이메일
              </span>
              <div className="absolute w-10  h-1.5 top-[1rem]  md:w-[3.3rem] md:top-4.5 lg:w-[3.3rem] lg:top-[1.2rem] bg-mainOrange/40"></div>
            </div>
            <div className="items-end ml-8 SCDream4">
              {userInfo?.data.email}
            </div>
          </div>
          {/* <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_419_2791)">
              <path
                d="M7.72842 2.05665L8.9375 3.26574M7.72842 2.05665L8.50162 1.28299C8.66281 1.1218 8.88142 1.03125 9.10937 1.03125C9.33733 1.03125 9.55594 1.1218 9.71712 1.28299C9.87831 1.44417 9.96886 1.66279 9.96886 1.89074C9.96886 2.11869 9.87831 2.3373 9.71712 2.49849L3.13133 9.08428C2.88902 9.32645 2.59021 9.50444 2.26187 9.6022L1.03125 9.96886L1.39792 8.73824C1.49567 8.4099 1.67367 8.11109 1.91583 7.86878L7.72888 2.05665H7.72842Z"
                stroke="#FF9264"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_419_2791">
                <rect width="11" height="11" fill="white" />
              </clipPath>
            </defs>
          </svg> */}
        </div>
      </div>
    </>
  );
};

export default MyPageUserBox;
