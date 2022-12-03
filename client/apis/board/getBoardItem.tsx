import client from "../../client/client";
import axios from "axios";

interface Props {
  boardId: number | null;
}

const getBoardItem = async ({ boardId }: Props) => {
  return await axios
    .get(`/boards/${boardId}`, {
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        withCredentials: true,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": `application/json`,
      },
    })
    .catch(err => console.log(err));
};

export default getBoardItem;
