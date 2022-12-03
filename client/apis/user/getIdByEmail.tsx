import axios from "axios";
import client from "../../client/client";

/**
 * @author yeowool
 * @description userEmail을 props로 받아서 id를 return
 **/

const fetchIdByEmail = (userEmail: string) => {
  // 요청메소드 + 요청정보
  return axios.get(`/members/find-id?email=${userEmail}`, {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      withCredentials: true,
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": `application/json`,
    },
  });
};

export default fetchIdByEmail;
