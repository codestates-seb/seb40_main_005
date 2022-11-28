import BoardModalContainer from "./BoardModalContainer";

const AddTextContainer = () => {
  return (
    <>
      <BoardModalContainer>
        <textarea
          placeholder="게시글을 작성하세요"
          className="w-full h-full resize-none outline-none font-SCDream3 text-left text-sm text-gray-700 p-2"
        ></textarea>
      </BoardModalContainer>
    </>
  );
};

export default AddTextContainer;
