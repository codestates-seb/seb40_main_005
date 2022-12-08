import { Dispatch, SetStateAction } from "react";
import { useMutation } from "react-query";
import checkAuthNum from "../../apis/auth/checkAuthNum";


interface authNumData {
    authNum : string,
    email : string
  }

const useCheckAuthNum = ({authNum, email}:authNumData) => {
    return useMutation(checkAuthNum);
}

export default useCheckAuthNum;