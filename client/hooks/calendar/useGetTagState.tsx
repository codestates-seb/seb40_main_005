import {
  useQuery,
  // useQueryClient,
  // useQueryErrorResetBoundary,
} from "react-query";
import getTagState from "../../apis/board/getTagState";

/**
 * @author yeowool
 * @description 태그 가능 여부 boolean return
 **/

interface Props {
  id: string;
  year: string;
  month: string;
  day: string;
}

const useGetTagState = ({ id, year, month, day }: Props) => {
  return useQuery(
    ["get/tagState"],
    () => getTagState({ id, year, month, day }),
    {
      enabled: false,
    },
  );
};

export default useGetTagState;
