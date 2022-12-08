import {
  useQuery,
  useQueryClient,
  // useQueryErrorResetBoundary,
} from "react-query";
import getShareNotice from "../../apis/notice/getShareNotice";

const useGetShareNotice = () => {
  const queryClient = useQueryClient();
  // queryClient.invalidateQueries("get/shareNotifications");

  return useQuery(["get/shareNotifications"], () => getShareNotice(), {
    enabled: false,
  });
};

export default useGetShareNotice;
