import { BuildingStorefrontIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

import SidebarCategory from "./SidebarCategory";
import React, { useEffect, useState } from "react";
import useGetCategory from "../hooks/calendar/useGetCategory";

// import useGetCategoryTitie from "../hooks/user/useGetCategoryTitle";

interface CategoryType {
  categoryTitle: string;
  isSelect: boolean;
}

const Sidebar = () => {
  const [categoryList, setCategoryList] = useState<Array<CategoryType>>([]);
  const { data: category, refetch: categoryRefetch } = useGetCategory();

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
      <section className="flex flex-col items-center justify-center w-full h-full pl-4 pr-4 lg:justify-around lg:w-1/6 lg:pr-0 pt-14">
        <div className="relative items-center justify-center cursor-pointer w-fit h-7 mb-[1rem] ">
          <div className="z-10 ml-0.5 text-base lg:text-xl text-gray-700 font-SCDream4">
            카테고리
          </div>
          <div className="absolute top-4 lg:top-5 left-0.5 right-0 bottom-1.5 lg:bottom-0.5  bg-mainOrange/40"></div>
        </div>

        <div className="grid w-full grid-cols-1 overflow-auto text-sm drop-shadow-xl lg:flex lg:flex-col h-1/3 lg:h-5/6 font-SCDream4">
          {/* {categoryList.map(data => (
            <SidebarCategory onClick={() => handleTagClick(data.categoryTitle)}>
              <div className="flex justify-center w-full">
                {data.categoryTitle}
              </div>
              <div
                className={` flex items-center pr-3 w-3 h-full aspect-square rounded-full ${
                  data.isSelect ? " bg-btnOrange" : " bg-white "
                }`}
              >
                {/* <div className="flex w-4 h-4 rounded-full bg-btnOrange aspect-square"></div> */}
              </div>
              ></div>
            </SidebarCategory>
          ))} */}
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
