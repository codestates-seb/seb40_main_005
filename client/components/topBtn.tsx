const TopBtn = () => {
  const handleScrollUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    console.log("scrolled up!");
  };

  return (
    <>
      <button
        type="button"
        onClick={handleScrollUp}
        // className="fixed mr-2 left-[90%] w-10 h-10 text-white rounded-md md:w-12 md:h-12 md:left-[93.5%] lg:left-[96%] bottom-3 lg:w-14 lg:h-14 bg-topbtn"
        className="fixed right-5 w-10 h-10 text-white rounded md:w-12 md:h-12 bottom-3 lg:w-14 lg:h-14 bg-topbtn"
      >
        Top
      </button>
    </>
  );
};

export default TopBtn;
