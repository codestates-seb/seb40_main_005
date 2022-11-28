import BoardModalContainer from "./BoardModalContainer";
import AddPhoto from "./AddPhoto";

const AddPhotoContainer = () => {
  return (
    <>
      <BoardModalContainer>
        <div className="w-full h-fit flex flex-col justify-center items-center p-2 cursor-pointer">
            <AddPhoto/>
            <div className="font-SCDream5 text-left text-sm md:text-sm lg:text-sm ml-3 mt-2 text-gray-400">
              클릭하여 이미지를 첨부하세요!
            </div>
        </div>
      </BoardModalContainer>
    </>
  );
};

export default AddPhotoContainer;
