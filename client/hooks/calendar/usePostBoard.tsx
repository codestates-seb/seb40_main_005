import { useMutation } from "react-query";
import postBoardData from "../../apis/board/postBoardData";

interface boardData {
  category : string,
  content : string,
  created : string,
  music : string,
  photo : any,
  tags : any,
  title : string,
  url : string
}

const usePostBoard = ({category, content, created, music, photo, tags, title, url}:boardData) => {
  return useMutation(postBoardData);
};

export default usePostBoard;
