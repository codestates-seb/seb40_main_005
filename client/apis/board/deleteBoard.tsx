import axios from "axios";
import client from "../../client/client";

interface Props {
    boardId : number | null;
}

const deleteBoard = async ({boardId}: Props) => {
  return await client.delete(`/boards/${boardId}`);
};

export default deleteBoard;
