import CategoryInputContainer from "./CategoryInputContainer";
import LeftArrow from "./LeftArrow";
import AddMusicContainer from "./AddMusicContainer";
import AddPhothoContainer from "./AddPhotoContainer";
import AddTextContainer from "./AddTextContainer";
import AddShareContainer from "./AddShareContainer";
import BoardModalContainer from "./BoardModalContainer";
import BoardModalBtn from "./BoardModalBtn";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectDayState, selectMonthState, selectYearState, pickDayState } from "../recoil/calendarAtom";


interface Props {
  handleCloseClick: () => void;
}

const CreateModalLayout = ({ handleCloseClick }: Props) => {
  const currYear = useRecoilValue(selectYearState);
  const currMonth = useRecoilValue(selectMonthState);
  let realMonth = currMonth;
  if(currMonth.length < 2){
    realMonth = "0" + currMonth
  }
  const currDay= useRecoilValue(selectDayState);
  let realDay = currDay;
  if(currDay.length < 2){
    realDay = "0" + currDay
  }

  const [date, setDate] = useRecoilState(pickDayState);
  const [category, setCategory] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [music, setMusic] = useState<string>("");
  const [youtubeLink, setYoutubeLink] = useState<string>("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [context, setContext] = useState<string>("");
  const [share, setShare] = useState([]);


  const changeDate = (e:any) => {
    setDate(e.target.value);
  }

  const changeCategory = (e:any) => {
    setCategory(e.target.value);
  }

  const changeTitle = (e:any) => {
    setTitle(e.target.value);
  }

  const changeMusic = (music:string) => {
    setMusic(music);
  }

  const changeYoutubeLink = (youtubeLink:string) => {
    setYoutubeLink(youtubeLink);
  }

  const changePhoto = (photo:File | null) => {
    setPhoto(photo);
  }

  const changeContext = (context:string) => {
    setContext(context);
  }

  const changeShare = (share:[]) => {
    setShare(share);
  }

  return (
    <>
      <div className="flex flex-col justify-between overflow-auto items-center p-5 w-full h-full">
        <div className="w-full h-fit flex flex-row justify-around items-center">
          <div className="w-1/4 h-full">
            <LeftArrow onClick={handleCloseClick} />
          </div>

          <div className="w-3/4 h-full flex flex-col justify-center items-end">
            <CategoryInputContainer>
              <div className="relative items-center justify-center w-fit h-7 mt-2">
                <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
                  날짜
                </div>
                <div className="absolute top-3.5 left-0.5 right-0 bottom-2  bg-mainOrange/40"></div>
              </div>
              <input
                type="date"
                className="w-2/3 h-fit font-SCDream3 text-right text-sm lg:text-sm text-gray-700 outline-none"
                value={date === "" ? `${currYear}-${realMonth}-${realDay}` : date}
                onChange={changeDate}
              />
            </CategoryInputContainer>

            <CategoryInputContainer>
              <div className="relative items-center justify-center w-fit h-7 mt-2">
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
                className="w-2/3 h-fit font-SCDream3 text-right text-sm lg:text-sm text-gray-700 outline-none"
              />
            </CategoryInputContainer>

            <CategoryInputContainer>
              <div className="relative items-center justify-center w-fit h-7 mt-2">
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
                className="w-3/4 h-fit font-SCDream3 text-right text-sm lg:text-sm text-gray-700 outline-none"
              />
            </CategoryInputContainer>
          </div>
        </div>

        <div className="flex flex-col w-full h-fit justify-center items-start">
          <div className="relative items-center justify-center w-fit h-7 mt-2 ml-2">
            <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
              음악
            </div>
            <div className="absolute top-3.5 left-0.5 right-0 bottom-2  bg-mainOrange/40"></div>
          </div>

          <AddMusicContainer music={music} youtubeLink={youtubeLink} changeMusic={changeMusic} changeYoutubeLink={changeYoutubeLink}/>
        </div>

        <div className="flex flex-col w-full h-fit justify-center items-start mt-2">
          <div className="relative items-center justify-center w-fit h-7 mt-2 ml-2">
            <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
              사진
            </div>
            <div className="absolute top-3.5 left-0.5 right-0 bottom-2  bg-mainOrange/40"></div>
          </div>

          <AddPhothoContainer />
          <div className="w-full h-fit flex flex-col justify-start items-end font-SCDream5 text-left text-xs mt-3 text-mainOrange">
            사진은 한 게시물당 1개만 올릴 수 있습니다
          </div>
        </div>

        <div className="flex flex-col w-full h-fit justify-center items-start">
          <div className="relative items-center justify-center w-fit h-7 mt-2 ml-2">
            <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
              게시글
            </div>
            <div className="absolute top-3.5 left-0.5 right-0 bottom-2  bg-mainOrange/40"></div>
          </div>

          <AddTextContainer context={context} changeContext={changeContext} />
        </div>

        <div className="flex flex-col w-full h-fit justify-center items-start mt-1">
          <div className="relative items-center justify-center w-fit h-7 mt-2 ml-2">
            <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
              공유
            </div>
            <div className="absolute top-3.5 left-0.5 right-0 bottom-2  bg-mainOrange/40"></div>
          </div>

          <AddShareContainer />
        </div>

        <div className="w-full h-8 flex flex-row justify-center items-center mt-5">
          <BoardModalBtn onClick={() => {}}>저 장</BoardModalBtn>
        </div>
      </div>
    </>
  );
};

export default CreateModalLayout;
