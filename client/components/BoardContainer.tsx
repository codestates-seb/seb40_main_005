interface Props {
  children: React.ReactNode;
  boardRef: React.ForwardedRef<HTMLDivElement>;
}

const BoardContainer = ({ children, boardRef }: Props) => {
  return (
    <>
      <div
        className="rounded-xl right-0 drop-shadow-xl fixed h-full md:h-full w-full sm:w-2/3 lg:w-1/2 bg-bgWhite/90 z-10 translate-x-full transition ease-in-out duration-[700ms]"
        ref={boardRef}
      >
        {children}
      </div>
    </>
  );
};

export default BoardContainer;
