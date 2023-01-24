import { useQuery } from "react-query";
import checkEmail from "../../apis/user/checkEmail";
import { useRecoilState } from "recoil";
import { checkEmailState, codeInputState } from "../../recoil/refacAtom";

const useCheckEmail = (email: string) => {
  const [emailCheck, setEmailCheck] = useRecoilState(checkEmailState);
  const [isViewCode, setIsViewCode] = useRecoilState(codeInputState);

  return useQuery(["get/emailAfterClick"], () => checkEmail(email), {
    enabled: false,
    onSuccess: () => {
      setEmailCheck(true);
      setIsViewCode(true);
    },
    onError: error => {
      setEmailCheck(true);
      setIsViewCode(false);
      console.log(error);
    },
  });
};

export default useCheckEmail;
