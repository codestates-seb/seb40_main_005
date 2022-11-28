interface Props {
    children : React.ReactNode
}

const BoardModalContainer = ({children}:Props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-fit bg-bgWhite drop-shadow-md rounded-xl p-2">
        {children}
      </div>
    </>
  );
};

export default BoardModalContainer;
