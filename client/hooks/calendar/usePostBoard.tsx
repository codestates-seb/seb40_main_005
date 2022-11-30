import { useMutation } from "react-query";
import checkAuthNum from "../../apis/auth/checkAuthNum";

const usePostBoard = (dataObj:object) => {
  return useMutation(checkAuthNum);
};

export default usePostBoard;
