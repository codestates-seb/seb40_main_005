interface Props {
  post: string;
}

const MyBoard = ({ post }: Props) => {
  return (
    <>
      <div onClick={() => {}} className="flex flex-row pt-2 cursor-pointer">
        <div className="w-5 h-2 md:w-6 md:h-[0.6rem] rounded-full lg:w-[0.18rem] lg:h-4 md:rounded-sm lg:rounded-none bg-coral"></div>
        <span className="hidden ml-2 truncate lg:w-30 lg:inline-block lg:text-sm text-textGray font-SCDream5 overflow-ellipsis">
          {post}
        </span>
      </div>
    </>
  );
};

export default MyBoard;
