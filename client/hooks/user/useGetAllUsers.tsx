import {
  useQuery,
  useQueryClient,
  useQueryErrorResetBoundary,
} from "react-query";
import getUserId from "../../apis/user/getUserId";

const useGetAllUsers = (searchInput: string) => {
  return useQuery(["get/useGetAllUser"], () => getUserId(searchInput), {
    enabled: false,
  });
};

export default useGetAllUsers;
