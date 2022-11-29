import CalendarPageLayout from "../components/CalendarPageLayout";
import { useRecoilState, useRecoilValue } from "recoil";
import { isLoginState } from "../recoil/authAtom";
import Login from "./login";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Calendar = () => {
  const loginState = useRecoilValue(isLoginState);
  const router = useRouter();

  useEffect(() => {
    if (!loginState) {
      let res = window.confirm("로그인이 필요합니다 \n로그인 하시겠습니까?");
      res ? router.push("/login") : router.push("/")
    }
  },[]);

  // if(loginState){
  //   return (
  //     <>
  //       <CalendarPageLayout />
  //     </>
  //   )
  // }else {
  //   return router.push("/login")
  // }

  return (
    <>
      <CalendarPageLayout />
    </>
  );
};

export default Calendar;
