import client from "../../client/client";
import axios from "axios";

const deleteUser = async () => {
  return await axios
    .delete(`/quit`, {
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        withCredentials: true,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": `application/json`,
      },
    })
    .catch(err => console.log(err));
};

export default deleteUser;
