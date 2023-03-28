import { useQuery } from "react-query";
import getBoards from "../../apis/board/getBoards";

interface Props {
  curMonth: string;
  curYear: string;
}

const useGetBoards = ({ curMonth, curYear }: Props) => {
  return useQuery(["get/boards"], () => getBoards({ curMonth, curYear }), {
    enabled: false,
  });
};

export default useGetBoards;
