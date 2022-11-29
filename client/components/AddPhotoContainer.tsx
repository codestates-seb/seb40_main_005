import BoardModalContainer from "./BoardModalContainer";
import AddPhoto from "./AddPhoto";
import React, { useState } from "react";
import { extractExifTags } from "exif-parser-ts";

interface Props {
  photo: File | null;
  setPhoto: (file: File) => void;
  showImg: string;
  setShowImg: (url: string) => void;
}

const AddPhotoContainer = ({ photo, setPhoto, showImg, setShowImg }: Props) => {
  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (fileList !== null) {
      setPhoto(fileList[0]);
      setShowImg(URL.createObjectURL(fileList[0]));
    }
  };

  return (
    <>
      <BoardModalContainer>
        <div className="flex flex-col items-center justify-center w-full p-2 cursor-pointer h-fit">
          {photo !== null ? (
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
