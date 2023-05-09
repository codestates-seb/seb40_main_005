import { useRecoilValue, useRecoilState } from "recoil";
import { isLoginState } from "../recoil/authAtom";
import { isCategoryState } from "../recoil/calendarAtom";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CommerceContainer from "../components/commerceContainer";
import PhotoBookContainer from "../components/PhotoBookContainer";
import StoreSidebar from "../components/commerceSidebar";
import CommerceSidebarToggle from "../components/CommerceSidebarToggle";

const Commerce = () => {
  const loginState = useRecoilValue(isLoginState);
  const router = useRouter();

  const [isSelected, setIsSelected] = useRecoilState<boolean>(isCategoryState);

  useEffect(() => {
    if (!loginState) {
      let res = window.confirm("로그인이 필요합니다 \n로그인 하시겠습니까?");
      res ? router.push("/login") : router.push("/");
    }
  }, []);

  const [sideBar, setSideBar] = useState<boolean>(false);

  const handleChangeSideBar = () => {
    setSideBar(prevState => !prevState);
  };

  return (
    <>
      {sideBar ? <CommerceSidebarToggle onClick={handleChangeSideBar} /> : null}

      <div className="items-center justify-center w-full h-screen p-3 overflow-auto md:pt-4 bg-bgGray">
        <div className="flex flex-row items-center justify-between md:mx-8 lg:justify-center">
          <Link href="/calendar">
            <a>
              <Image
                className="cursor-pointer "
                src="/images/logo export(orange).svg"
                width={150}
                height={50}
              />
            </a>
          </Link>
          <div className="cursor-pointer lg:hidden">
            <svg
              onClick={handleChangeSideBar}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 6.75H20.25M3.75 12H20.25M3.75 17.25H20.25"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-row justify-center md:mt-10">
          <StoreSidebar onClick={handleChangeSideBar}></StoreSidebar>
          {isSelected ? <CommerceContainer /> : <PhotoBookContainer />}
        </div>
      </div>
    </>
  );
};

export default Commerce;
