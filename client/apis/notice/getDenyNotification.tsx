import client from "../../client/client";
import axios from "axios";

const getDenyNotification = async (boardId: string) => {
  return await axios
    .get(`/notification/deny?boardId=${boardId}`, {
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        withCredentials: true,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": `application/json`,
      },
    })
    .catch(err => console.log(err));
};

export default getDenyNotification;
