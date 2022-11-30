import {
  useQuery,
  // useQueryClient,
  // useQueryErrorResetBoundary,
} from "react-query";
import getBoards from "../../apis/board/getBoards";

interface Props {
  currMonth: number;
  currYear: number;
}

const useGetBoards = ({ currMonth, currYear }: Props) => {
  return useQuery(["get/boards"], () => getBoards({ currMonth, currYear }), {
    enabled: false,
  });
};

export default useGetBoards;
