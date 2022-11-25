import { Dispatch, SetStateAction } from "react";
import { useMutation } from "react-query";
import postAuthNum from "../../apis/auth/postAuthNum";


interface authNumData {
    email : string,
  }

const useRequestAuthNum = ({email}:authNumData) => {
    return useMutation(postAuthNum);
}

export default useRequestAuthNum;