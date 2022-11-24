interface Props {
  onClick: () => void;
}

const SubmitBtn = ({ onClick }: Props) => {
  return (
    <>
      <input
        type="submit"
        onClick={onClick}
        className="flex items-center justify-center w-20 md:w-28 h-8 rounded-2xl bg-btnOrange text-white font-SCDream5 text-sm hover:bg-[#fcb79a]"
      ></input>
    </>
  );
};

export default SubmitBtn;
