import axios from "axios";
import client from "../../client/client";

const checkUserId = async (userid: string) => {
  // 요청메소드 + 요청정보
  return await axios
    .get(`/members/checkId/${userid}`, {
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        withCredentials: true,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": `application/json`,
      },
    })
    .catch(err => {
      return err;
    });
};

export default checkUserId;
