import { Dispatch, SetStateAction } from "react";
import { useMutation } from "react-query";
import postSignUp from "../../apis/user/postSignUp";


interface SignUpData {
    id : string,
    email : string,
    password : string
  }

const usePostSignUpData = ({id, email, password}:SignUpData) => {
    return useMutation(postSignUp);
}

export default usePostSignUpData;