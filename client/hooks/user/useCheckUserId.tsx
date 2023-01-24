import { useQuery } from "react-query";
import checkUserId from "../../apis/user/checkUserId";
import { useRecoilState } from "recoil";
import { checkIdState } from "../../recoil/refacAtom";

const useCheckUserId = (id: string) => {
  const [checkId, setCheckId] = useRecoilState(checkIdState);

  return useQuery(["get/userIdAfterClick"], () => checkUserId(id), {
    enabled: false,
    onSuccess: () => {
      setCheckId(true);
    },
    onError: error => {
      setCheckId(true);
      console.log(error);
    },
  });
};

export default useCheckUserId;
