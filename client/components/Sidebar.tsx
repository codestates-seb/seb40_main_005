import { BuildingStorefrontIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { handleClientScriptLoad } from "next/script";

import SidebarCategory from "./SidebarCategory";
import React, { useEffect } from "react";
// import dummy from "../dummy";

interface Props {
  children: React.ReactNode;
}

const Sidebar = ({ children }: Props) => {
  const handleTagClick = () => {
    console.log("카테고리클릭");
    const point = document.getElementById("point");
    // point.style.display = "none";
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

        <div className="grid grid-cols-1 text-xs drop-shadow-xl lg:flex lg:flex-col w-full h-1/3 lg:h-5/6 font-SCDream4 overflow-auto">
          {/* {dummy.map(dummy => (
            <SidebarCategory onClick={handleTagClick} key={dummy.boardId}>
              <div>{dummy.content}</div>
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
