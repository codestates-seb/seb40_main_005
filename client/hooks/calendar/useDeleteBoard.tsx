import { useMutation } from "react-query";
import deleteBoard from "../../apis/board/deleteBoard";


interface Props {
    boardId : number | null;
}

const useDeleteBoard = ({boardId}: Props) => {
  return useMutation(deleteBoard);
};

export default useDeleteBoard;
