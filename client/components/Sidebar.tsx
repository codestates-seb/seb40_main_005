import { BuildingStorefrontIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

import SidebarCategory from "./SidebarCategory";
import React, { useEffect, useState } from "react";

// import useGetCategoryTltie from "../hooks/user/useGetCategoryTltie";
// import { accessTokenState } from "../recoil/authAtom";

//테스트용 더미 입니다
const dummy = [
  {
    boardId: 0,
    categoryTitle: "전체",
  },
  {
    boardId: 1,
    categoryTitle: "으아아",
  },
  {
    boardId: 2,
    categoryTitle: "주..ㄱ여.. 주..ㅓ..",
  },
];

// const { data, refetch, isLoading, isFetching } = useGetCategoryTltie();
// console.log(accessTokenState);
// console.log(data);
interface CategoryType {
  boardId: number;
  categoryTitle: string;
  isSelect: boolean;
}

const Sidebar = () => {
  const [categoryList, setCategoryList] = useState<Array<CategoryType>>([]);

  useEffect(() => {
    const newCtg = dummy.map(data => ({ ...data, isSelect: false }));
    setCategoryList(newCtg);
  }, []);

  const handleTagClick = (id: number) => {
    const newCtg = categoryList.map(data =>
      id === data.boardId
        ? { ...data, isSelect: true }
        : { ...data, isSelect: false },
    );

    setCategoryList(newCtg);
  };

  return (
    <>
      <section className="flex flex-col justify-center lg:justify-around items-center w-full lg:w-1/6 h-full pr-4 lg:pr-0 pl-4 pt-14">
        <div className="relative items-center justify-center cursor-pointer w-fit h-7 mb-5 lg:mb-0">
          <div className="z-10 ml-0.5 text-base lg:text-xl text-gray-700 font-SCDream4">
            카테고리
          </div>
          <div className="absolute top-4 lg:top-5 left-0.5 right-0 bottom-1.5 lg:bottom-0.5  bg-mainOrange/40"></div>
        </div>

        <div className="grid grid-cols-1 text-sm drop-shadow-xl lg:flex lg:flex-col w-full h-1/3 lg:h-5/6 font-SCDream4 overflow-auto">
          {categoryList.map(dummy => (
            <SidebarCategory
              onClick={() => handleTagClick(dummy.boardId)}
              key={dummy.boardId}
            >
              <div className="w-full flex justify-center">
                {dummy.categoryTitle}
              </div>
              <div
                className={` flex items-center pr-3 w-3 h-full aspect-square rounded-full ${
                  dummy.isSelect ? " bg-btnOrange" : " bg-white "
                }`}
              >
                {/* <div className="flex w-4 h-4  bg-btnOrange aspect-square rounded-full"></div> */}
              </div>
            </SidebarCategory>
          ))}
        </div>

        <Link href="/commerce">
          <div className="flex flex-row justify-center items-center w-fit h-fit cursor-pointer mt-10 lg:mt-0">
            <span className="w-fit h-fit bg-mainOrange p-1 rounded-lg mr-1">
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
