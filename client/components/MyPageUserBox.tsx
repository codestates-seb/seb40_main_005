import PenImg from "../public/images/pen.svg";

const MyPageUserBox = () => {
  return (
    <>
      <div className=" flex flex-col justify-center bg-white w-full h-28 drop-shadow-lg p-3 SCDream3 ">
        <div className="flex flex-row text-zinc-500 items-end">
          <div className="z-10 text-xl md:text-xl lg:text-2xl font-SCDream6">
            박여울
          </div>
          <div className="SCDream5 text-zinc-500 items-end mx-2 text-sm">
            님
          </div>
        </div>

        <div className="flex flex-row text-zinc-500 mt-3 items-center">
          <div className="relative ">
            <div className="z-10 text-base md:text-xl lg:text-2xl text-zinc-500 font-SCDream6">
              이메일
            </div>
            <div className="absolute w-12 h-1.5 top-[1rem] md:w-[3.7rem] md:top-4 lg:w-[4.4rem] lg:top-5 bg-mainOrange/40"></div>
          </div>
          <div className="SCDream4 items-end mx-3">qyoong3579@gmail.com</div>

          <svg
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
          </svg>
        </div>
      </div>
    </>
  );
};

export default MyPageUserBox;
