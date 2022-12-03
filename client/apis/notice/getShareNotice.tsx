import axios from "axios";
import client from "../../client/client";

const getShareNotice = async () => {
  return await axios
    .get(`/notification`, {
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        withCredentials: true,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": `application/json`,
      },
    })
    .catch(err => console.log(err));
};

export default getShareNotice;
