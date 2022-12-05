import client from "../../client/client";
import axios from "axios";

interface Props {
  boardItemId: number | null;
}

const getBoardItem = async ({ boardItemId }: Props) => {
  return await axios
    .get(`/boards/${boardItemId}`, {
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
