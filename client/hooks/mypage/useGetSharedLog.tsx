import { useQuery, QueryClient } from "react-query";
import getSharedLog from "../../apis/mypage/getSharedLog";

const useGetSharedLog = () => {
  const queryClient = new QueryClient();
  queryClient.invalidateQueries("get/sharedLog");

  return useQuery(["get/sharedLog"], () => getSharedLog(), {
    enabled: false,
  });
};

export default useGetSharedLog;
