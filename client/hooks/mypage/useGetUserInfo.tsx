import { useQuery } from "react-query";
import getUserInfo from "../../apis/mypage/getUserInfo";

const useGetUserInfo = () => {
  return useQuery(["get/userInfo"], () => getUserInfo(), {
    enabled: false,
  });
};

export default useGetUserInfo;
