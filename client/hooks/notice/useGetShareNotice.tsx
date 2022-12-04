import {
  useQuery,
  useQueryClient,
  // useQueryErrorResetBoundary,
} from "react-query";
import getShareNotice from "../../apis/notice/getShareNotice";

const useGetShareNotice = () => {
  const queryClient = useQueryClient();

  return useQuery(["get/shareNotifications"], () => getShareNotice(), {
    enabled: false,
    onSuccess() {
      queryClient.invalidateQueries("get/boards");
    },
  });
};

export default useGetShareNotice;
