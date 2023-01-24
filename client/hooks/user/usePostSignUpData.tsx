import { useMutation } from "react-query";
import postSignUp from "../../apis/user/postSignUp";

const usePostSignUpData = () => {
  return useMutation(postSignUp, {
    onSuccess: res => {
      console.log(res);
    },
    onError: err => {
      console.log(err);
    },
  });
};

export default usePostSignUpData;
