import {
  useQuery,
  // useQueryClient,
  // useQueryErrorResetBoundary,
} from "react-query";
import getDenyNotification from "../../apis/notice/getDenyNotification";

const useGetDenyNotice = (boardId: string) => {
  return useQuery(
    ["get/denyNotifications"],
    () => getDenyNotification(boardId),
    {
      enabled: false,
    },
  );
};

export default useGetDenyNotice;
