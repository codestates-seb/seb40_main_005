const SharedBoard = () => {
  return (
    <>
      <div onClick={() => {}} className="flex flex-row pt-2">
        <div className="w-5 h-2 rounded-full md:w-[0.15rem] lg:w-[0.18rem] md:h-[0.85rem] lg:h-4 md:rounded-none bg-btnOrange"></div>
        <span className="truncate md:w-24 lg:w-30 hidden md:block ml-2 md:text-[0.65rem] lg:text-sm text-textGray font-SCDream5">
          제주도제주도제주도제주도제주도제주도{/* board.title */}
        </span>
      </div>
    </>
  );
};

export default SharedBoard;
