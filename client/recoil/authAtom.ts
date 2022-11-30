import { atom } from "recoil";

const localStorage = typeof window !== "undefined" ? window.localStorage : null;
const isLoginState = atom({
  key: "isLogin",
  default: localStorage?.getItem("token") ? true : false,
});

const accessTokenState = atom({
  key: "token",
  default: localStorage?.getItem("token") || "",
});

const userNameState = atom({
  key: "userName",
  default: localStorage?.getItem("memberId") || "",
});

export { isLoginState, accessTokenState, userNameState };