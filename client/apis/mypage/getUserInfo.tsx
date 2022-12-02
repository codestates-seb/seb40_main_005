import client from "../../client/client";

const getUserInfo = async () => {
  return await client.get(`/member`).catch(err => console.log(err));
};

export default getUserInfo;
