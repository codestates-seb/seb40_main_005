import { BuildingStorefrontIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import SidebarCategory from "./SidebarCategory";
import React, { useEffect } from "react";
import useGetCategoryTitie from "../hooks/calendar/useGetCategory";
import { useRecoilState } from "recoil";
import { categorySelectTitle, getBoardState } from "../recoil/calendarAtom";

interface CategoryValue {
  categoryTitle: string;
}
const Sidebar = () => {
  const [categoryTitle, setcategoryTitle] =
    useRecoilState<string>(categorySelectTitle);
  const [isgetBoardState, setisgetBoardState] =
    useRecoilState<boolean>(getBoardState);

  const { data: categoryDatas, refetch: categoryRefetch } =
    useGetCategoryTitie();

  const renderNotices = () => {
    const categoryListArr: any[] = [];

    if (categoryDatas) {
      let categories = categoryDatas.data;

      categoryListArr?.push(
        <SidebarCategory
          key={0}
          categoryTitle={"전체"}
          selectedTitle={categoryTitle}
          onClick={() => handleClick("전체")}
        ></SidebarCategory>,
      );

      categories.map((data: CategoryValue, idx: number) => {
        categoryListArr?.push(
          <SidebarCategory
            key={idx + 1}
            categoryTitle={data.categoryTitle}
            selectedTitle={categoryTitle}
            onClick={() => handleClick(data.categoryTitle)}
          ></SidebarCategory>,
        );
      });
    }

    return categoryListArr;
  };

  useEffect(() => {
    categoryRefetch();
    renderNotices();
  }, [isgetBoardState]);

  const handleClick = (title: string) => {
    setcategoryTitle(title);
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center w-full h-full pl-4 pr-4 lg:justify-around lg:w-1/6 lg:pr-0 pt-3 md:pt-5 lg:pt-20">
        <div className="relative items-center justify-center cursor-pointer w-fit h-7 mb-[1rem] ">
          <div className="z-10 ml-0.5 text-base lg:text-xl text-gray-700 font-SCDream4">
            카테고리
          </div>
          <div className="absolute top-4 lg:top-5 left-0.5 right-0 bottom-1.5 lg:bottom-0.5  bg-mainOrange/40"></div>
        </div>
        <div className="h-[10rem] md:h-[16rem] lg:h-[37rem] px-5 w-full scrollbar-thin scrollbar-thumb-coral scrollbar-track-bgWhite overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          {renderNotices()}
        </div>

        <Link href="/commerce">
          <div className="flex flex-row items-center justify-center mt-10 cursor-pointer w-fit h-fit lg:mt-0">
            <span className="p-1 mr-1 rounded-lg w-fit h-fit bg-mainOrange">
              <BuildingStorefrontIcon className="w-4 h-4 text-white" />
            </span>
            <div className="relative items-center justify-center w-fit h-7 mt-1.5">
              <div className="z-10 ml-0.5 text-sm md:text-sm lg:text-sm text-gray-700 font-SCDream3">
                스토어 바로가기
              </div>
              <div className="absolute top-3.5 left-0.5 right-0 bottom-2  bg-mainOrange/40"></div>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
};

export default Sidebar;
