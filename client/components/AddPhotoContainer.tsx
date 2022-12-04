import BoardModalContainer from "./BoardModalContainer";
import AddPhoto from "./AddPhoto";
import React, { useState } from "react";
import { extractExifTags } from "exif-parser-ts";

interface Props {
  photo: any;
  setPhoto: (file:any) => void;
  showImg: string;
  setShowImg: (url:any) => void;
}

const AddPhotoContainer = ({ photo, setPhoto, showImg, setShowImg }: Props) => {
  const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    // const formData = new FormData();

    
    
    // console.log(fileList);
    if (fileList !== null) {
      // formData.append("file", fileList[0])
      // console.log(fileList[0]);
      setPhoto(fileList[0]);
      setShowImg(URL.createObjectURL(fileList[0]));
    }
  };
  
  // console.log(photo?.getAll("file"));

  
  return (
    <>
      <BoardModalContainer>
        <div className="flex flex-col items-center justify-center w-full p-2 cursor-pointer h-fit">
          {photo !== "" ? (
            <img src={showImg} />
          ) : (
            <form encType="multipart/form-data">
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
                <div className="mt-2 text-xs text-left text-mainOrange font-SCDream5 md:text-xs lg:text-xs">
                  사진은 10MB 이하만 업로드 가능합니다!
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
