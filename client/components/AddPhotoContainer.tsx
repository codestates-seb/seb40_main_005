import BoardModalContainer from "./BoardModalContainer";
import AddPhoto from "./AddPhoto";
import React, { useState } from "react";
import { extractExifTags } from "exif-parser-ts";

const AddPhotoContainer = () => {
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [showImg, setShowImg] = useState<string>("");

  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (fileList !== null) {
      setImgFile(fileList[0]);
      setShowImg(URL.createObjectURL(fileList[0]));
    }
  };

  const deleteImg = () => {
    URL.revokeObjectURL(showImg);
    setShowImg("");
  };

  return (
    <>
      <BoardModalContainer>
        <div className="flex flex-col items-center justify-center w-full p-2 cursor-pointer h-fit">
          {imgFile !== null ? (
            <img src={showImg} />
          ) : (
            <form>
              <input
                id="file"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={uploadFile}
              />
              <label htmlFor="file" className="flex flex-col items-center">
                <AddPhoto />
                <div className="mt-2 text-sm text-left text-gray-400 font-SCDream5 md:text-sm lg:text-sm">
                  클릭하여 이미지를 첨부하세요!
                </div>
              </label>
            </form>
          )}
        </div>
      </BoardModalContainer>
    </>
  );
};

export default AddPhotoContainer;
