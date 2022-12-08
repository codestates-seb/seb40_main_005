import client from "../../client/client";
import axios from "axios";

interface Props {
  page : number
}

const getSharedLog = async ({page}:Props) => {
  console.log(page)
  return await axios
    .get(`/member/tag?page=${page}&size=7`, {
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
