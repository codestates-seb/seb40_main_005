const ConfirmBtn = (props: { children: React.ReactNode }) => {
  return (
    <>
      <button
        type="button"
        className="flex items-center justify-center w-16 md:w-[4.5rem] h-9 rounded-xl bg-btnOrange hover:bg-[#fcb79a]"
      >
        <span className="text-sm text-white font-SCDream5">
          {props.children}
        </span>
      </button>
    </>
  );
};

export default ConfirmBtn;
