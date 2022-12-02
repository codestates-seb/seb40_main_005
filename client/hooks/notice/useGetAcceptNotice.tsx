import {
  useQuery,
  // useQueryClient,
  // useQueryErrorResetBoundary,
} from "react-query";
import getAcceptNotification from "../../apis/notice/getAcceptNotification";

const useGetAcceptNotice = (boardId: string) => {
  return useQuery(
    ["get/acceptNotifications"],
    () => getAcceptNotification(boardId),
    {
      enabled: false,
    },
  );
};

export default useGetAcceptNotice;
