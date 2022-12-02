import client from "../../client/client";

const deleteUser = async () => {
  return await client.delete(`/quit`).catch(err => console.log(err));
};

export default deleteUser;
