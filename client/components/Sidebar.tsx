import { BuildingStorefrontIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

import SidebarCategory from "./SidebarCategory";
import React, { useEffect, useState } from "react";

// import useGetCategoryTitie from "../hooks/user/useGetCategoryTitle";

interface CategoryType {
  categoryTitle: string;
  isSelect: boolean;
}

const Sidebar = () => {
  const [categoryList, setCategoryList] = useState<Array<CategoryType>>([]);

  // const { data: categoryTitie, refetch: categoryRefetch } =
  //   useGetCategoryTitie();

  // useEffect(() => {
  //   categoryRefetch();
  //   if (categoryTitie !== undefined) {
  //     const newCtg = categoryTitie.data.map(
  //       (el: { categoryTitle: string }) => ({
  //         ...el,
  //         isSelect: false,
  //       }),
  //     );
  //     setCategoryList(newCtg);
  //   }
  // }, []);

  const handleTagClick = (categoryTitle: string) => {
    const newCtg = categoryList.map(data =>
      categoryTitle === data.categoryTitle
        ? { ...data, isSelect: true }
        : { ...data, isSelect: false },
    );

    setCategoryList(newCtg);
  };

  return (
    <>
      <section className="flex flex-col justify-center lg:justify-around items-center w-full lg:w-1/6 h-full pr-4 lg:pr-0 pl-4 pt-14">
        <div className="relative items-center justify-center cursor-pointer w-fit h-7 mb-[1rem] ">
          <div className="z-10 ml-0.5 text-base lg:text-xl text-gray-700 font-SCDream4">
            카테고리
          </div>
          <div className="absolute top-4 lg:top-5 left-0.5 right-0 bottom-1.5 lg:bottom-0.5  bg-mainOrange/40"></div>
        </div>

        <div className="grid grid-cols-1 text-sm drop-shadow-xl lg:flex lg:flex-col w-full h-1/3 lg:h-5/6 font-SCDream4 overflow-auto">
          {/* {categoryList.map(data => (
            <SidebarCategory onClick={() => handleTagClick(data.categoryTitle)}>
              <div className="w-full flex justify-center">
                {data.categoryTitle}
              </div>
              <div
                className={` flex items-center pr-3 w-3 h-full aspect-square rounded-full ${
                  data.isSelect ? " bg-btnOrange" : " bg-white "
                }`}
              ></div>
            </SidebarCategory>
          ))} */}
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
