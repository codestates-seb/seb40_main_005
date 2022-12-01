interface Props {
    children : React.ReactNode
}

const BoardModalContainer = ({children}:Props) => {
  return (
    <>
      <div className="mb-2 flex flex-col justify-center items-center w-full h-fit bg-bgWhite drop-shadow-md rounded-xl p-2">
        {children}
      </div>
    </>
  );
};

export default BoardModalContainer;
