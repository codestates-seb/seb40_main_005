interface Props {
  children: React.ReactNode;
}

const SelectPageBtn = ({ children }: Props) => {
  return (
    <>
      <div className="SCDream-3 text-sm w-5 h-5 flex flex-row justify-center items-center p-3 mx-1 rounded-md cursor-pointer bg-mainOrange text-bgWhite">
        {children}
      </div>
    </>
  );
};

export default SelectPageBtn;
