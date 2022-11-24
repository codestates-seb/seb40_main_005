import { atom } from "recoil";

export const isLoginState = atom({
  key: "isLogin",
  default: localStorage.getItem("token") ? true : false,
});

export const accessTokenState = atom({
  key: "token",
  default: localStorage.getItem("token") || "",
});

export const userNameState = atom({
  key: "userName",
  default: localStorage.getItem("userName") || "",
});
