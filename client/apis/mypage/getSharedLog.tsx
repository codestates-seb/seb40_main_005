import client from "../../client/client";

const getSharedLog = async () => {
  return await client.get(`/member/tag`).catch(err => console.log(err));
};

export default getSharedLog;
