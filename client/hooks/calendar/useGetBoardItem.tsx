import {
  useQuery,
  // useQueryClient,
  // useQueryErrorResetBoundary,
} from "react-query";
import getBoardItem from "../../apis/board/getBoardItem";

interface Props {
  boardId: number | null;
}

const useGetBoardItem = ({ boardId }: Props) => {
  return useQuery(["get/boardItem"], () => getBoardItem({ boardId }), {
    enabled: false,
  });
};

export default useGetBoardItem;
