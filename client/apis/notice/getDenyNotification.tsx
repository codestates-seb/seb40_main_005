import client from "../../client/client";

const getDenyNotification = async (boardId: string) => {
  return await client
    .get(`/notification/deny?boardId=${boardId}`)
    .catch(err => console.log(err));
};

export default getDenyNotification;
