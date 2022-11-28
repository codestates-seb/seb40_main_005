import BoardModalContainer from "./BoardModalContainer";
import Search from "./Search";

const AddShareContainer = () => {
  return (
    <>
      <BoardModalContainer>
        <div className="flex flex-row w-full h-fit justify-between items-center p-0.5">
          <Search />
          <input
            type="text"
            placeholder="공유하고 싶은 사람을 검색하세요!"
            className="ml-1 w-full font-SCDream3 text-left text-sm md:text-sm lg:text-sm p-1 rounded-md text-gray-700 outline-none"
          />
        </div>
      </BoardModalContainer>
    </>
  );
};

export default AddShareContainer;
