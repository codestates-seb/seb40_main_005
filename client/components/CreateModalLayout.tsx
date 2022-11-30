import CategoryInputContainer from "./CategoryInputContainer";
import LeftArrow from "./LeftArrow";
import AddMusicContainer from "./AddMusicContainer";
import AddPhothoContainer from "./AddPhotoContainer";
import AddTextContainer from "./AddTextContainer";
import AddShareContainer from "./AddShareContainer";
import BoardModalContainer from "./BoardModalContainer";
import BoardModalBtn from "./BoardModalBtn";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  selectDayState,
  selectMonthState,
  selectYearState,
  pickDayState,
} from "../recoil/calendarAtom";
import usePostBoard from "../hooks/calendar/usePostBoard";

interface Props {
  handleCloseClick: () => void;
}

const CreateModalLayout = ({ handleCloseClick }: Props) => {
  const [date, setDate] = useRecoilState(pickDayState);
  const [category, setCategory] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [music, setMusic] = useState<string>("");
  const [youtubeLink, setYoutubeLink] = useState<string>("");
  const [photo, setPhoto] = useState<any>("");
  const [showImg, setShowImg] = useState<string>("");
  const [context, setContext] = useState<string>("");
  const [share, setShare] = useState<any>([]);

  const changeDate = (e: any) => {
    setDate(e.target.value);
    console.log(date);
  };

  const changeCategory = (e: any) => {
    setCategory(e.target.value);
  };

  const changeTitle = (e: any) => {
    setTitle(e.target.value);
  };

  const changeMusic = (music: string) => {
    setMusic(music);
  };

  const changeYoutubeLink = (youtubeLink: string) => {
    setYoutubeLink(youtubeLink);
  };

  const changePhoto = (photo: File | null) => {
    setPhoto(photo);
  };

  const changeContext = (context: string) => {
    setContext(context);
  };

  const changeShare = (share: []) => {
    setShare(share);
  };

  const deleteImg = () => {
    URL.revokeObjectURL(showImg);
    setShowImg("");
  };

  const { data: submitRes, mutate: submitMutate } = usePostBoard({
    category: category,
    content: context,
    created: date,
    music: music,
    photo: photo,
    tags: share,
    title: title,
    url: youtubeLink,
  });

  const handleSubmit = () => {
    const submitData = {
      category: category,
      content: context,
      created: date,
      music: music,
      photo: photo,
      tags: share,
      title: title,
      url: youtubeLink,
    };
    submitMutate(submitData);
    // console.log(submitRes)
    alert("등록되었습니다");

    setDate("");
    setCategory("");
    setTitle("");
    setMusic("");
    setYoutubeLink("");
    setPhoto("");
    setShowImg("");
    setContext("");
    setShare([]);
    deleteImg();
  };

  return (
    <>
      <div className="flex flex-col items-center justify-between w-full h-full p-5 overflow-auto">
        <div className="flex flex-row items-center justify-around w-full h-fit">
          <div className="w-1/4 h-full">
            <LeftArrow onClick={handleCloseClick} />
          </div>

          <div className="flex flex-col items-end justify-center w-3/4 h-full">
            <CategoryInputContainer>
              <div className="relative items-center justify-center mt-2 w-fit h-7">
                <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
                  날짜
                </div>
                <div className="absolute top-3.5 left-0.5 right-0 bottom-2  bg-mainOrange/40"></div>
              </div>
              <input
                type="date"
                className="w-2/3 text-sm text-right text-gray-700 outline-none h-fit font-SCDream3 lg:text-sm"
                value={date}
                // value={date}
                onChange={changeDate}
              />
            </CategoryInputContainer>

            <CategoryInputContainer>
              <div className="relative items-center justify-center mt-2 w-fit h-7">
                <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
                  카테고리
                </div>
                <div className="absolute top-3.5 left-0.5 right-0 bottom-2  bg-mainOrange/40"></div>
              </div>
              <input
                type="text"
                value={category}
                onChange={changeCategory}
                placeholder="예) 크리스마스"
                className="w-2/3 text-sm text-right text-gray-700 outline-none h-fit font-SCDream3 lg:text-sm"
              />
            </CategoryInputContainer>

            <CategoryInputContainer>
              <div className="relative items-center justify-center mt-2 w-fit h-7">
                <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
                  제목
                </div>
                <div className="absolute top-3.5 left-0.5 right-0 bottom-2  bg-mainOrange/40"></div>
              </div>
              <input
                type="text"
                placeholder="입력하세요!"
                value={title}
                onChange={changeTitle}
                className="w-3/4 text-sm text-right text-gray-700 outline-none h-fit font-SCDream3 lg:text-sm"
              />
            </CategoryInputContainer>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center w-full h-fit">
          <div className="relative items-center justify-center mt-2 ml-2 w-fit h-7">
            <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
              음악
            </div>
            <div className="absolute top-3.5 left-0.5 right-0 bottom-2  bg-mainOrange/40"></div>
          </div>

          <AddMusicContainer
            music={music}
            youtubeLink={youtubeLink}
            changeMusic={changeMusic}
            changeYoutubeLink={changeYoutubeLink}
          />
        </div>

        <div className="flex flex-col items-start justify-center w-full mt-2 h-fit">
          <div className="relative items-center justify-center mt-2 ml-2 w-fit h-7">
            <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
              사진
            </div>
            <div className="absolute top-3.5 left-0.5 right-0 bottom-2  bg-mainOrange/40"></div>
          </div>

          <AddPhothoContainer
            photo={photo}
            setPhoto={setPhoto}
            showImg={showImg}
            setShowImg={setShowImg}
          />
          <div className="flex flex-col items-end justify-start w-full mt-3 text-xs text-left h-fit font-SCDream5 text-mainOrange">
            사진은 한 게시물당 1개만 올릴 수 있습니다
          </div>
        </div>

        <div className="flex flex-col items-start justify-center w-full h-fit">
          <div className="relative items-center justify-center mt-2 ml-2 w-fit h-7">
            <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
              게시글
            </div>
            <div className="absolute top-3.5 left-0.5 right-0 bottom-2  bg-mainOrange/40"></div>
          </div>

          <AddTextContainer context={context} changeContext={changeContext} />
        </div>

        <div className="flex flex-col items-start justify-center w-full mt-1 h-fit">
          <div className="relative items-center justify-center mt-2 ml-2 w-fit h-7">
            <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
              공유
            </div>
            <div className="absolute top-3.5 left-0.5 right-0 bottom-2  bg-mainOrange/40"></div>
          </div>

          <AddShareContainer />
        </div>

        <div className="flex flex-row items-center justify-center w-full h-8 mt-5">
          <BoardModalBtn onClick={handleSubmit}>저 장</BoardModalBtn>
        </div>
      </div>
    </>
  );
};

export default CreateModalLayout;
