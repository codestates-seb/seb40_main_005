import client from "../../client/client";
import axios from "axios";

const getAcceptNotification = async (boardId: string) => {
  return await client
    .get(`/notification/accept?boardId=${boardId}`, {
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        withCredentials: true,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": `application/json`,
      },
    })
    .catch(err => console.log(err));
};

export default getAcceptNotification;
