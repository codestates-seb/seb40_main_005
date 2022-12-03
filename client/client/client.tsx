import axios from "axios";
import { useRecoilState, useSetRecoilState } from "recoil";

const localStorage = typeof window !== "undefined" ? window.localStorage : null;

const accessToken = localStorage?.getItem("token") || "";
console.log(accessToken);

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    withCredentials: true,
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": `application/json`,
  },
});

export default client;
