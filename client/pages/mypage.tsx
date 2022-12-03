import { useRecoilState, useRecoilValue } from "recoil";
import { isLoginState } from "../recoil/authAtom";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import CheckMyLog from "../components/CheckMyLog";
import Image from "next/image";
import Link from "next/link";
import MyPageSidebarToggle from "../components/MyPageSidebarToggle";
import MyPageSidebar from "../components/MyPageSidebar";

const MyPage = () => {
  const loginState = useRecoilValue(isLoginState);
  const router = useRouter();

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
      {sideBar ? <MyPageSidebarToggle onClick={handleChangeSideBar} /> : null}
      {/* <MyPageSidebarToggle onClick={handleChangeSideBar} /> */}

      <div className="justify-center items-center w-full h-screen bg-bgGray overflow-auto">
        <div className="flex flex-col p-3 md:pt-16 md:pb-14 ">
          <div className="flex flex-row  justify-between md:justify-center items-center">
            <Link href="/">
              <a>
                <Image
                  className="cursor-pointer "
                  src="/images/logo export(orange).svg"
                  width={150}
                  height={50}
                />
              </a>
            </Link>
            <div className="md:hidden cursor-pointer">
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
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-row justify-center md:mt-10">
            <MyPageSidebar onClick={handleChangeSideBar}></MyPageSidebar>
            <CheckMyLog />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPage;
