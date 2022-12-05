import {
  useQuery, useQueryClient,
  // useQueryClient,
  // useQueryErrorResetBoundary,
} from "react-query";
import getBoardItem from "../../apis/board/getBoardItem";

interface Props {
  boardItemId: number | null;
}

const useGetBoardItem = ({ boardItemId }: Props) => {
  const queryClient = useQueryClient();

  queryClient.invalidateQueries({ queryKey: ["get/boardItem"] });

  return useQuery(["get/boardItem"], () => getBoardItem({ boardItemId }), {
    enabled: false,
  });
};

export default useGetBoardItem;
