interface Props {
    children : React.ReactNode,
    onClick: () => void;
  }
  
  const BoardModalBtn = ({ children, onClick }: Props) => {
    return (
      <>
        <button className="flex items-center justify-center w-1/6 h-full rounded-md bg-btnOrange text-white font-SCDream5 text-sm hover:bg-[#fcb79a]"
            onClick={onClick}
        >
          {children}
        </button>
      </>
    );
  };
  
  export default BoardModalBtn;
  