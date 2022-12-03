import client from "../../client/client";
import axios from "axios";

const getSharedLog = async () => {
  return await axios
    .get(`/member/tag?page=0&size=7`, {
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        withCredentials: true,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": `application/json`,
      },
    })
    .catch(err => console.log(err));
};

export default getSharedLog;
