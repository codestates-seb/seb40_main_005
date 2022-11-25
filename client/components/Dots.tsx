const Dot = ({ num, scrollIdx }: { num: number; scrollIdx: number }) => {
  const handleScroll = () => {
    window.scrollTo({
      top: (document.getElementById(`${num}`) as HTMLDivElement).offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={handleScroll}
      className={`${
        scrollIdx === num ? "bg-mainOrange" : "bg-lightOrange"
      } duration-1000 w-3.5 h-3.5 border-solid rounded-full cursor-pointer`}
    ></div>
  );
};

function Dots({ scrollIdx }: { scrollIdx: number }) {
  return (
    <div className="fixed top-[45%] right-[30px] z-50">
      <div className="flex flex-col items-center justify-between w-5 h-24">
        <Dot num={1} scrollIdx={scrollIdx}></Dot>
        <Dot num={2} scrollIdx={scrollIdx}></Dot>
        <Dot num={6} scrollIdx={scrollIdx}></Dot>
      </div>
    </div>
  );
}

export default Dots;
