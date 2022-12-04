import axios from "axios";
import client from "../../client/client";

interface Props {
  boardId: number | null;
}

const deleteBoard = async ({ boardId }: Props) => {
  return await axios.delete(`/boards/${boardId}`, {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      withCredentials: true,
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": `application/json`,
    },
  });
};

export default deleteBoard;
