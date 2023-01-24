import { useMutation } from "react-query";
import checkAuthNum from "../../apis/auth/checkAuthNum";
import { useRecoilState } from "recoil";
import {
  checkCodeState,
  pwInputState,
  codeInputState,
} from "../../recoil/refacAtom";

const useCheckAuthNum = () => {
  const [checkCode, setCheckCode] = useRecoilState(checkCodeState);
  const [isViewPw, setIsViewPw] = useRecoilState(pwInputState);
  const [isViewCode, setIsViewCode] = useRecoilState(codeInputState);

  return useMutation(checkAuthNum, {
    onSuccess: () => {
      setCheckCode(true);
      setIsViewPw(true);
      setIsViewCode(false);
    },
    onError: err => {
      console.log(err);
      setCheckCode(true);
      setIsViewPw(false);
    },
  });
};

export default useCheckAuthNum;
