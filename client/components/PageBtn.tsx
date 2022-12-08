interface Props {
  children: React.ReactNode,
  onClick : () => void;
}

const PageBtn = ({ children, onClick }: Props) => {
  return (
    <>
      <div className="SCDream-3 text-sm w-5 h-5 flex flex-row justify-center items-center p-2.5 mx-1 rounded-md cursor-pointer border-2 border-mainOrange bg-bgWhite text-mainOrange"
        onClick={onClick}
      >
        {children}
      </div>
    </>
  );
};

export default PageBtn;
