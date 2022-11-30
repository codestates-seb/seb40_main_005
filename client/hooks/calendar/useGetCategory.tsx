import {
  useQuery,
  // useQueryClient,
  // useQueryErrorResetBoundary,
} from "react-query";
import getCategory from "../../apis/board/getCategory";

const useGetCategory = () => {
  return useQuery(["get/categories"], () => getCategory(), {
    enabled: false,
  });
};

export default useGetCategory;
