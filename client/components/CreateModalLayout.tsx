import CategoryInputContainer from "./CategoryInputContainer";
import LeftArrow from "./LeftArrow";
import AddMusicContainer from "./AddMusicContainer";
import AddPhothoContainer from "./AddPhotoContainer";
import AddTextContainer from "./AddTextContainer";
import AddShareContainer from "./AddShareContainer";
import BoardModalContainer from "./BoardModalContainer";
import BoardModalBtn from "./BoardModalBtn";
import { useEffect, useState, useRef } from "react";
import { constSelector, useRecoilState, useRecoilValue } from "recoil";
import {
  selectDayState,
  selectMonthState,
  selectYearState,
  pickDayState,
  editModeState,
  boardItemState,
  readModalOpenState,
  modalOpenState,
  getBoardState,
  getBoardItemState,
} from "../recoil/calendarAtom";
import usePostBoard from "../hooks/calendar/usePostBoard";
import usePatchBoard from "../hooks/calendar/usePatchBoard";
import useCheckDate from "../hooks/calendar/useCheckDate";
//yeowool
import SelectBar from "./SelectBar";

interface Props {
  handleCloseClick: () => void;
}
const CreateModalLayout = ({ handleCloseClick }: Props) => {
  const [editMode, setEditMode] = useRecoilState(editModeState);
  const [boardData, setBoardData] = useRecoilState(boardItemState);
  const [date, setDate] = useRecoilState(pickDayState);
  const [category, setCategory] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [music, setMusic] = useState<string>("");
  const [youtubeLink, setYoutubeLink] = useState<string>("");
  const [photo, setPhoto] = useState<any>("");
  const [showImg, setShowImg] = useState<string>("");
  const [context, setContext] = useState<string>("");
  const [share, setShare] = useState<any>([]);
  const [readOpen, setReadOpen] = useRecoilState(readModalOpenState);
  const [open, setOpen] = useRecoilState(modalOpenState);
  const [getBoard, setGetBoard] = useRecoilState(getBoardState);
  const [getBoardItem, setGetBoardItem] = useRecoilState(getBoardItemState);

  const categoryRef = useRef<HTMLInputElement>(null);
  const photoRef = useRef<HTMLInputElement | null>(null);

  const changeDate = (e: any) => {
    setDate(e.target.value);
  };

  const changeCategory = (category: string) => {
    setCategory(category);
  };

  const focus = (keyCode: Number) => {
    if (keyCode === 13) {
      categoryRef.current?.focus();
    }
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
  const changeShare = (share: string) => {
    setShare(share);
  };

  const deleteImg = () => {
    URL.revokeObjectURL(showImg);
    setShowImg("");
  };
  const {
    data: submitRes,
    mutate: submitMutate,
    isSuccess: postSuccess,
    isLoading: postLoading,
  } = usePostBoard({
    category: category,
    content: context,
    created: date,
    music: music,
    photo: photo,
    tags: share,
    title: title,
    url: youtubeLink,
  });
  let boardId: number | null = 0;
  // console.log(boardData)
  if (boardData.data !== undefined) {
    boardId = boardData.data[0].boardId;
  }
  const {
    data: EditRes,
    mutate: EditMute,
    isLoading: EditLoading,
    isSuccess: EditSuccess,
  } = usePatchBoard({
    category: category,
    content: context,
    created: date,
    music: music,
    photo: photo,
    tags: share,
    title: title,
    url: youtubeLink,
    boardId: boardId,
  });
  let splitDate = date.split("-");
  let year = splitDate[0];
  let month = splitDate[1];
  let day = splitDate[2];
  // console.log(year, month, day);
  const {
    data: checkDateData,
    refetch: checkDateRefetch,
    isLoading: checkDateLoading,
    isSuccess: checkDateSuccess,
  } = useCheckDate({
    day,
    month,
    year,
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
    const editData = {
      category: category,
      content: context,
      created: date,
      music: music,
      photo: photo,
      tags: share,
      title: title,
      url: youtubeLink,
      boardId: boardId,
    };
    if (editMode) {
      EditMute(editData);
    } else {
      submitMutate(submitData);
    }
    // console.log(submitRes)
  };
  const handleCancel = () => {

    let res = confirm("창을 닫으면 작성된 내용이 사라집니다!\n계속하시겠습니까?");
    if(res){
      handleCloseClick();
      setEditMode(false);
  
      setDate("");
      setDate("0000-00-00");
      setCategory("");
      setTitle("");
      setMusic("");
      setYoutubeLink("");
      setPhoto("");
      setShowImg("");
      setContext("");
      setShare([]);
      deleteImg();
      setCategory("");
    }
  };

  const handleUploadPhotoClick = () => {
    console.log("먹니?");

    // if (photo) {
    //   photoRef.current = null;
    // }

    photoRef.current?.click();

    console.log(photoRef.current);
  };

  useEffect(() => {
    console.log("useEffect");

    // if (photoRef.current) {
    //   console.log("먹힘");

    //   photoRef.current?.click();
    // }
  }, [photoRef]);

  useEffect(() => {
    if (postSuccess && !editMode) {
      alert("등록되었습니다");
      handleCloseClick();

      setEditMode(false);

      setDate("");
      setDate("2022-02-21");
      setCategory("");
      setTitle("");
      setMusic("");
      setYoutubeLink("");
      setPhoto("");
      setShowImg("");
      setContext("");
      setShare([]);
      deleteImg();
      // window.location.reload();
      setGetBoard(!getBoard);
      // window.location.reload();
    }

    if (EditSuccess && editMode) {
      alert("수정되었습니다");
      handleCloseClick();

      setEditMode(false);

      setDate("");
      setDate("2022-02-21");
      setCategory("");
      setTitle("");
      setMusic("");
      setYoutubeLink("");
      setPhoto("");
      setShowImg("");
      setContext("");
      setShare([]);
      deleteImg();

      setGetBoard(!getBoard);
      setGetBoardItem(!getBoardItem);
      // window.location.reload();
      // window.location.reload();
    }
  }, [postSuccess, EditSuccess]);

  useEffect(() => {
    if (editMode) {
      // console.log(boardData.data[0].category);
      setCategory(boardData.data[0].category);
      setTitle(boardData.data[0].title);
      setMusic(boardData.data[0].music);
      setYoutubeLink(boardData.data[0].url);
      setPhoto("");
      setShowImg(boardData.data[0].photo);
      setContext(boardData.data[0].content);
      setShare(boardData.data[0].tagsMembers);
    } else if (!editMode) {
      setCategory("");
      setTitle("");
      setMusic("");
      setYoutubeLink("");
      setPhoto("");
      setShowImg("");
      setContext("");
      setShare([]);
    }
  }, [editMode]);

  useEffect(() => {
    checkDateRefetch();
  }, [date]);

  useEffect(() => {
    if (open || editMode) {

      if (checkDateData?.data.status === false) {
        window.alert(
          "해당날짜는 게시글이 등록되어있습니다! \n다른 날짜를 선택해주세요",
        );
        setDate("");
      }
    }
  }, [checkDateData]);

  return (
    <>
      <div className="flex flex-col items-center justify-between min-w-[350px] w-full h-full p-5 overflow-auto">
        {EditLoading ? (
          <div className="absolute z-50 flex flex-col items-center justify-center w-1/2 text-lg rounded-lg top-60 h-1/3 bg-mainOrange/70 font-SCDream5 text-bgWhite">
            <div className="z-10 ml-0.5 text-lg md:text-lg lg:text-lg text-bgWhite font-SCDream5">
              여러분의 추억을 수정하고있습니다
            </div>
            <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-bgWhite font-SCDream5">
              잠시만 기다려주세요
            </div>
          </div>
        ) : null}
        {postLoading ? (
          <div className="absolute z-50 flex flex-col items-center justify-center w-1/2 text-lg rounded-lg top-60 h-1/3 bg-mainOrange/70 font-SCDream5 text-bgWhite">
            <div className="z-10 ml-0.5 text-lg md:text-lg lg:text-lg text-bgWhite font-SCDream5">
              여러분의 추억을 저장하고있습니다
            </div>
            <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-bgWhite font-SCDream5">
              잠시만 기다려주세요
            </div>
          </div>
        ) : null}
        <div className="flex flex-row items-center justify-around w-full h-fit">
          <div className="w-1/4 h-full">
            <LeftArrow onClick={handleCancel} />
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
            {/* yeowool */}
            <CategoryInputContainer>
              <div className="relative items-center justify-center mt-2  min-w-fit w-[3.5rem] h-7">
                <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
                  카테고리
                </div>
                <div className="absolute top-3.5 left-0.5 right-0 bottom-2  bg-mainOrange/40"></div>
              </div>
              <SelectBar
                category={category}
                setCategory={changeCategory}
                keyCode={focus}
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
                ref={categoryRef}
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
          <div className="flex flex-row justify-between w-full">
            <div className="relative items-center justify-center mt-2 ml-2 w-fit h-7">
              <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream5">
                사진
              </div>
              <div className="absolute top-3.5 left-0.5 right-0 bottom-2  bg-mainOrange/40"></div>
            </div>
            <button
              type="button"
              className="mr-2 text-xs text-mainOrange font-SCDream5"
              onClick={handleUploadPhotoClick}
            >
              다시 업로드
            </button>
          </div>
          <AddPhothoContainer
            photo={photo}
            setPhoto={setPhoto}
            showImg={showImg}
            setShowImg={setShowImg}
            photoRef={photoRef}
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
          <AddShareContainer changeShare={changeShare} />
        </div>

        <div className="flex flex-row items-center justify-center w-full h-8 mt-5">
          {category !== "" && title !== "" && photo !== "" ? (
            <BoardModalBtn onClick={handleSubmit}>저 장</BoardModalBtn>
          ) : (
            <div className="flex flex-col items-center justify-center w-full mt-3 text-sm h-fit font-SCDream5 text-mainOrange">
              카테고리와 제목과 사진은 필수 입력입니다!
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default CreateModalLayout;
