import {
  useQuery,
  useQueryClient,
  useQueryErrorResetBoundary,
} from "react-query";
import getCtegoryTitle from "../../apis/user/getCtegoryTitle";

const useGetCategoryTltie = () => {
  return useQuery(["get/userCategory"], () => getCtegoryTitle(), {
    enabled: false,
  });
};

export default useGetCategoryTltie;
