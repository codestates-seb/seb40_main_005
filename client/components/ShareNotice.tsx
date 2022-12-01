const ShareNotice = () => {
  return (
    <>
      <div className="text-xs font-SCDream4 bg-[#FEFEFE]">
        <div className="mb-1">여울(sharedId)님이 공유하셨습니다</div>
        <div className="flex flex-row justify-between px-4">
          <strong className="text-lg font-SCDream5">title</strong>
          {/* 체크버튼 */}
          <div>
            <button onClick={() => {}} type="button" className="px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#FFAD8A]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            {/* 엑스버튼 */}
            <button onClick={() => {}} type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#FF6868]"
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

//   [
//   {
//     "boardId": 0,
//     "shareDateTime": "2022-11-30T17:03:34.190Z",
//     "shareId": "string",
//     "title": "string"
//   }
// ]
