import client from "../../client/client";

const getShareNotice = async () => {
  return await client.get(`/notification`).catch(err => console.log(err));
};

export default getShareNotice;
