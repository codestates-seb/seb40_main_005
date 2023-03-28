import MySidebarCategory from "./MySidebarCategory";
import { useState } from "react";
import { isCategoryState } from "../recoil/calendarAtom";
import { useRecoilState } from "recoil";

interface Props {
  onClick: () => void;
}

interface CategoryValue {
  mtCategory: string;
}

const CommerceSidebarToggle = ({ onClick }: Props) => {
  const [isSelected, setIsSelected] = useRecoilState<boolean>(isCategoryState);
  const myCategory = [
    {
      mtCategory: "테마",
    },
    {
      mtCategory: "앨범",
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
    if ("테마" === title) {
      setIsSelected(true);
    } else if ("앨범" === title) {
      setIsSelected(false);
    }
  };

  return (
    <>
      <div className="absolute right-0 z-50 flex flex-col justify-between w-2/3 h-full p-3 pb-8 bg-white md:flex lg:hidden md:w-2/6 drop-shadow-lg">
        <div className="flex flex-col justify-between ">
          <svg
            onClick={onClick}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            className="w-5 h-5 mt-3 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

          <div className="relative flex justify-center w-full h-5 my-3">
            <div className="z-10 text-xl text-zinc-500 font-SCDream6 ">
              스토어
            </div>
            <div className="absolute w-16 h-2 top-[1.1rem]  md:w-[4rem] md:top-4 bg-mainOrange/40"></div>
          </div>
          <div className="grid w-full grid-cols-1 mt-5 text-sm lg:flex lg:flex-col h-fit lg:h-5/6 font-SCDream4">
            {renderNotices()}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommerceSidebarToggle;
