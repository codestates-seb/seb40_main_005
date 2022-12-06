import { useQuery, QueryClient } from "react-query";
import getSharedLog from "../../apis/mypage/getSharedLog";

interface Props {
  page : number
}

const useGetSharedLog = (page:Props) => {
  const queryClient = new QueryClient();
  queryClient.invalidateQueries("get/sharedLog");

  return useQuery(["get/sharedLog"], () => getSharedLog(page), {
    enabled: false,
  });
};

export default useGetSharedLog;
