import { useMutation } from "react-query";
import PatchBoardData from "../../apis/board/PatchBoardData";

interface boardData {
  category: string;
  content: string;
  created: string;
  music: string;
  photo: any;
  tags: any;
  title: string;
  url: string;
  boardId : number | null;
}

const usePatchBoard = ({
  category,
  content,
  created,
  music,
  photo,
  tags,
  title,
  url,
  boardId
}: boardData) => {
  return useMutation(PatchBoardData);
};

export default usePatchBoard;
