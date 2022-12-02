import client from "../../client/client";

/**
 * @author yeowool
 * @description 전체 카테고리 string배열로 return
 **/

const getBoards = async () => {
  return await client.get(`/category`).catch(err => console.log(err));
};

export default getBoards;
