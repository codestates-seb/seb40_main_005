import BoardModalContainer from "./BoardModalContainer";
import AddPhoto from "./AddPhoto";
import React, { useRef, useState } from "react";

type UploadImg = {
  file: File;
  thumbnail: string;
  type: string;
};

const AddPhotoContainer = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [imgFile, setImgFile] = useState<UploadImg | null>(null);

  // const handleClickFile = () => {
  //   fileRef.current?.click();
  // };

  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    const length = fileList?.length;
    if (fileList && fileList[0]) {
      const url = URL.createObjectURL(fileList[0]);

      setImgFile({
        file: fileList[0],
        thumbnail: url,
        type: fileList[0].type.slice(0, 5),
      });
    }
  };

  // const showImg = useMemo(() => {
  //   if (!imgFile && imgFile === null) {
  //     // 이미지 파일이 빈 경우?..
  //     return <img src="/" alt="비어있는 이미지" />;
  //   }
  //   return (
  //     <img
  //       src={imgFile.thumbnail}
  //       alt={imgFile.type}
  //       onClick={handleClickFile}
  //     />
  //   );
  // }, [imgFile]);
  return (
    <>
      <BoardModalContainer>
        <div className="flex flex-col items-center justify-center w-full p-2 cursor-pointer h-fit">
          <form>
            <input
              ref={fileRef}
              id="file"
              type="file"
              accept="image/*"
              className="hidden"
            />
            <label
              // onClick={handleClickFile}
              htmlFor="file"
              className="flex flex-col items-center"
            >
              <AddPhoto />
              <div className="mt-2 text-sm text-left text-gray-400 font-SCDream5 md:text-sm lg:text-sm">
                클릭하여 이미지를 첨부하세요!
              </div>
            </label>
          </form>
        </div>
      </BoardModalContainer>
    </>
  );
};

export default AddPhotoContainer;
