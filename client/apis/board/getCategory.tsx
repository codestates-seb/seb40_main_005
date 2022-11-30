import client from "../../client/client";

const getBoards = async () => {
  return await client.get(`/category`).catch(err => console.log(err));
};

export default getBoards;
