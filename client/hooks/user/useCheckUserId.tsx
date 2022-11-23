import {
  useQuery,
  useQueryClient,
  useQueryErrorResetBoundary,
} from "react-query";
import checkUserId from "../../apis/user/checkUserId";

const useCheckUserId = (userId:string) => {
  return useQuery(["get/userIdAfterClick"], () => checkUserId(userId), {
    enabled: false,
  });
};

export default useCheckUserId;