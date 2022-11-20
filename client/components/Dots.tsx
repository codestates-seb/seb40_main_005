const Dot = ({ num, scrollIdx }: { num: number; scrollIdx: number }) => {
  return (
    <div
      className={`${
        scrollIdx === num ? "bg-orange" : "bg-lightOrange"
      } + duration-1000 w-3.5 h-3.5 border-solid rounded-full hover:cursor-pointer z-50`}
    ></div>
  );
};

function Dots({ scrollIdx }: { scrollIdx: number }) {
  return (
    <div className="fixed top-[45%] right-[30px]">
      <div className="flex flex-col items-center justify-between w-5 h-24">
        <Dot num={1} scrollIdx={scrollIdx}></Dot>
        <Dot num={2} scrollIdx={scrollIdx}></Dot>
        <Dot num={3} scrollIdx={scrollIdx}></Dot>
      </div>
    </div>
  );
}

export default Dots;
