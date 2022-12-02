import client from "../../client/client";

const getAcceptNotification = async (boardId: string) => {
  return await client
    .get(`/notification/accept?boardId=${boardId}`)
    .catch(err => console.log(err));
};

export default getAcceptNotification;
