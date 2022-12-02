import { useQuery } from "react-query";
import getSharedLog from "../../apis/mypage/getSharedLog";

const useGetSharedLog = () => {
  return useQuery(["get/sharedLog"], () => getSharedLog(), {
    enabled: false,
  });
};

export default useGetSharedLog;
