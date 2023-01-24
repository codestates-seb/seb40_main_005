import { useMutation } from "react-query";
import postAuthNum from "../../apis/auth/postAuthNum";

const useRequestAuthNum = () => {
  return useMutation(postAuthNum, {
    onError: err => {
      console.log(err);
    },
  });
};

export default useRequestAuthNum;
