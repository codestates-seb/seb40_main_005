import client from "../../client/client";
import axios from "axios";

interface Props {
  curMonth: string;
  curYear: string;
}

const getBoards = async ({ curMonth, curYear }: Props) => {
  return await axios
    .get(`/boards?category=&month=${curMonth}&year=${curYear}`, {
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        withCredentials: true,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": `application/json`,
      },
    })
    .catch(err => console.log(err));
};

export default getBoards;
