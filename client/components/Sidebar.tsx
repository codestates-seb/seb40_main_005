import { BuildingStorefrontIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

import SidebarCategory from "./SidebarCategory";
import React, { useEffect, useState } from "react";
import useGetCategory from "../hooks/calendar/useGetCategory";

// import useGetCategoryTltie from "../hooks/user/useGetCategoryTltie";
// import { accessTokenState } from "../recoil/authAtom";

//테스트용 더미 입니다
// const dummy = [
//   {
//     boardId: 0,
//     categoryTitle: "전체",
//   },
//   {
//     boardId: 1,
//     categoryTitle: "으아아",
//   },
//   {
//     boardId: 2,
//     categoryTitle: "주..ㄱ여.. 주..ㅓ..",
//   },
// ];

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
  const { data: category, refetch: categoryRefetch } = useGetCategory();

  useEffect(() => {
    categoryRefetch();
  }, []);

  console.log(category);

  // useEffect(() => {
  //   const newCtg = dummy.map(data => ({ ...data, isSelect: false }));
  //   setCategoryList(newCtg);
  // }, []);

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
      <section className="flex flex-col items-center justify-center w-full h-full pl-4 pr-4 lg:justify-around lg:w-1/6 lg:pr-0 pt-14">
        <div className="relative items-center justify-center mb-5 cursor-pointer w-fit h-7 lg:mb-0">
          <div className="z-10 ml-0.5 text-base lg:text-xl text-gray-700 font-SCDream4">
            카테고리
          </div>
          <div className="absolute top-4 lg:top-5 left-0.5 right-0 bottom-1.5 lg:bottom-0.5  bg-mainOrange/40"></div>
        </div>

        <div className="grid w-full grid-cols-1 overflow-auto text-sm drop-shadow-xl lg:flex lg:flex-col h-1/3 lg:h-5/6 font-SCDream4">
          {categoryList.map(dummy => (
            <SidebarCategory
              onClick={() => handleTagClick(dummy.boardId)}
              key={dummy.boardId}
            >
              <div className="flex justify-center w-full">
                {dummy.categoryTitle}
              </div>
              <div
                className={` flex items-center pr-3 w-3 h-full aspect-square rounded-full ${
                  dummy.isSelect ? " bg-btnOrange" : " bg-white "
                }`}
              >
                {/* <div className="flex w-4 h-4 rounded-full bg-btnOrange aspect-square"></div> */}
              </div>
            </SidebarCategory>
          ))}
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
