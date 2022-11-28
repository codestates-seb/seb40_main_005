interface Props {
  children: React.ReactNode;
  boardRef: React.ForwardedRef<HTMLDivElement>;
}

const BoardContainer = ({ children, boardRef }: Props) => {
  return (
    <>
      <div
        className="p-5 rounded-xl right-0 drop-shadow-xl fixed h-[90%] md:h-screen w-full md:w-[700px] bg-bgWhite/90 z-10 md:translate-x-full transition ease-in-out duration-[700ms]"
        ref={boardRef}
      >
        {children}
      </div>
    </>
  );
};

export default BoardContainer;
