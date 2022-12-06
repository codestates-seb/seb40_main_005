import { useRecoilValue } from "recoil";
import { isLoginState } from "../recoil/authAtom";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CommerceContainer from "./commerceContainer";
import StoreSidebar from "./commerceSidebar";
import CommerceSidebarToggle from "./CommerceSidebarToggle";

const PhotoBookContainer = () => {
  const [sideBar, setSideBar] = useState<boolean>(false);

  const handleChangeSideBar = () => {
    setSideBar(prevState => !prevState);
  };

  return (
    <>
      <CommerceContainer />
    </>
  );
};

export default PhotoBookContainer;
