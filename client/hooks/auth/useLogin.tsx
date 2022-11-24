import { Dispatch, SetStateAction } from "react";
import { useMutation } from "react-query";
import { useSetRecoilState } from "recoil";
import postLogin from "../../apis/auth/postLogin";
import { isLoginState } from "../../recoil/authAtom";
import Link from "next/link";

interface PropsValue {
  id: string;
  password: string;
  setFailedMsg: Dispatch<SetStateAction<string>>;
}

const useLogin = ({ id, password, setFailedMsg }: PropsValue) => {
  const loginMutation = useMutation(postLogin);
  const setIsLogin = useSetRecoilState(isLoginState);

  return loginMutation
    .mutateAsync({ id, password })
    .then(res => {
      if (res.data.success) {
        localStorage.setItem("token", res.token);
        setIsLogin(true);
        <Link href={"/main"} />;
      }
    })
    .catch(err => setFailedMsg("ID 혹은 비밀번호가 일치하지 않습니다."));
};

export default useLogin;
