import client from "../../client/client";
import axios from "axios";

/**
 * @author yeowool
 * @description 전체 카테고리 string배열로 return
 **/

const getBoards = async () => {
  return await client
    .get(`/category`, {
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
