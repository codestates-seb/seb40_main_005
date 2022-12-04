import axios from "axios";
// import { useRecoilValue, useSetRecoilState } from "recoil";
// import { accessTokenState } from "../recoil/authAtom";

// const accessToken = useRecoilValue(accessTokenState);

const localStorage = typeof window !== "undefined" ? window.localStorage : null;
const accessToken = localStorage?.getItem("token") || "";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    withCredentials: true,
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": `application/json`,
  },
});

export default client;
