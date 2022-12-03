import { Dispatch, SetStateAction } from "react";

const TopBtn = () => {
  const handleScrollUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={handleScrollUp}
        className="fixed z-50 w-10 h-10 text-white rounded right-5 md:w-12 md:h-12 bottom-3 lg:w-14 lg:h-14 bg-topbtn"
      >
        Top
      </button>
    </>
  );
};

export default TopBtn;
