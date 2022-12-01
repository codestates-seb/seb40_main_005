import client from "../../client/client";

interface Props {
  boardId: number | null;
}

const getBoardItem = async ({ boardId }: Props) => {
  return await client.get(`/boards/${boardId}`).catch(err => console.log(err));
};

export default getBoardItem;
