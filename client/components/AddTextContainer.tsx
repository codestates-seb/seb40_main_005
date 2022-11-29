import BoardModalContainer from "./BoardModalContainer";

interface Props {
  context : string,
  changeContext : (context:string) => void;
}


const AddTextContainer = ({context, changeContext}:Props) => {

  const handleInputChange = (e:any) => {
    changeContext(e.target.value);
  }

  return (
    <>
      <BoardModalContainer>
        <textarea
          placeholder="게시글을 작성하세요"
          value={context}
          onChange={handleInputChange}
          className="w-full h-full resize-none outline-none font-SCDream3 text-left text-sm text-gray-700 p-2"
        ></textarea>
      </BoardModalContainer>
    </>
  );
};

export default AddTextContainer;
