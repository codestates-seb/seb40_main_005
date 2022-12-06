import { useQuery } from "react-query";
import getSharedLog from "../../apis/mypage/getSharedLog";

interface Props {
  page : number
}

const useGetSharedLog = (page:Props) => {
  return useQuery(["get/sharedLog"], () => getSharedLog(page), {
    enabled: false,
  });
};

export default useGetSharedLog;
