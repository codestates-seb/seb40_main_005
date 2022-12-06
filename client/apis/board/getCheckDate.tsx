import client from "../../client/client";
import axios from "axios";

interface Props {
  realDay: number;
  realMonth: number;
  realYear: number;
}

const getCheckDate = async ({ realDay, realMonth, realYear }: Props) => {
  return await axios
    .get(`/boards/count?day=${realDay}&month=${realMonth}&year=${realYear}`, {
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        withCredentials: true,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": `application/json`,
      },
    })
    .catch(err => console.log(err));
};

export default getCheckDate;
