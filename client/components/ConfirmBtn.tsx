interface Props {
  children : React.ReactNode,
  onClick : () => void
}

const ConfirmBtn = ({ children, onClick }:Props) => {
  return (
    <>
      <button
        type="button"
        className="flex items-center justify-center w-16 md:w-[4.5rem] h-9 rounded-xl bg-btnOrange hover:bg-[#fcb79a]"
        onClick={onClick}
      >
        <span className="text-sm text-white font-SCDream5">
          {children}
        </span>
      </button>
    </>
  );
};

export default ConfirmBtn;
