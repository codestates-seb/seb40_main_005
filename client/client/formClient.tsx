import axios from "axios";

const localStorage = typeof window !== "undefined" ? window.localStorage : null;

const accessToken = localStorage?.getItem("token") || "";
// import { useRecoilState, useRecoilValue } from "recoil";
// import { accessTokenState } from "../recoil/authAtom";

// const token = useRecoilValue(accessTokenState);

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    withCredentials: true,
    Authorization: `Bearer ${accessToken}`,
    // "Content-Type": `application/json`,
   "Content-Type": "multipart/form-data"
  },
});

export default client;