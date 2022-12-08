import MySidebarCategory from "./MySidebarCategory";
import { useState } from "react";
import useDeleteUser from "../hooks/user/useDeleteUser";
import Router from "next/router";
import Link from "next/link";
import { isCategoryState } from "../recoil/calendarAtom";
import { useRecoilState } from "recoil";

interface Props {
  onClick: () => void;
}

interface CategoryValue {
  mtCategory: string;
}

const MyPageSidebar = ({ onClick }: Props) => {
  const [isSelected, setIsSelected] = useRecoilState<boolean>(isCategoryState);

  const myCategory = [
    {
      mtCategory: "나의 활동",
    },
    {
      mtCategory: "테마",
    },
  ];

  const [categoryTitle, setcategoryTitle] = useState<string>(
    myCategory[0].mtCategory,
  );

  const renderNotices = () => {
    const categoryListArr: any[] = [];

    if (myCategory) {
      myCategory.map((data: CategoryValue, idx: number) => {
        categoryListArr?.push(
          <MySidebarCategory
            key={idx}
            categoryTitle={data.mtCategory}
            selectedTitle={categoryTitle}
            onClick={() => handleClick(data.mtCategory)}
          ></MySidebarCategory>,
        );
      });
    }

    return categoryListArr;
  };

  const handleClick = (title: string) => {
    setcategoryTitle(title);
    if ("나의 활동" === title) {
      setIsSelected(true);
    } else if ("테마" === title) {
      setIsSelected(false);
    }
  };

  const { mutate: deleteUser } = useDeleteUser();

  const DeleteUser = () => {
    let deleteCheck = window.confirm(
      "탈퇴 하실 경우 작성하신 모든 게시물 중 공유 된 게시글 외에는 전부 삭제됩니다. \n탈퇴를 진행하시려면 확인을 눌러 주세요.",
    );
    if (deleteCheck) {
      deleteUser();
      // handleReadCloseClick();
      Router.push("/");
      // window.location.reload();
    }
  };

  return (
    <>
      <div className="z-50 p-3 pb-8 flex lg:hidden absolute h-full flex-col bg-white w-2/3 md:w-2/6 drop-shadow-lg right-0 justify-between">
        <div className="flex flex-col justify-between ">
          <svg
            onClick={onClick}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="currentColor"
            className="mt-3 ml-2 w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

          <div className="relative my-3 h-5 w-full flex justify-center">
            <div className="z-10 text-lg md:text-xl lg:text-2xl text-zinc-500 font-SCDream6">
              마이페이지
            </div>
            <div className="absolute w-24 h-2 top-[1.1rem] md:w-[3.7rem] md:top-4 lg:w-[4.4rem] lg:top-5 bg-mainOrange/40"></div>
          </div>
          <div className="grid w-full grid-cols-1 overflow-auto text-md  lg:flex lg:flex-col h-fit lg:h-5/6 font-SCDream4 mt-5">
            {renderNotices()}
          </div>
        </div>
        <button
          onClick={DeleteUser}
          className="flex justify-end pr-4 pb-3 text-xs text-red-600 cursor-pointer"
        >
          회원탈퇴
        </button>
      </div>
    </>
  );
};

export default MyPageSidebar;
