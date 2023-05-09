import { useMutation } from 'react-query';
import { useRecoilState, useSetRecoilState } from 'recoil';
import postLogin from '../../apis/auth/postLogin';
import { isLoginState, failedMsg } from '../../recoil/authAtom';
import { selectMonthState, selectYearState } from '../../recoil/calendarAtom';

const usePostLogin = () => {
  const setIsLogin = useSetRecoilState(isLoginState);
  const setFailedMsg = useSetRecoilState(failedMsg);

return useMutation(postLogin,{
  onSuccess: (res) => {
  if(res !== undefined && res.data){
    const {token, memberId} = res.data;

    localStorage.setItem("token", token);
    localStorage.setItem("memberId", memberId);
    setIsLogin(true);
    setFailedMsg("");
    }
  },
  onError: (err) => {
    setFailedMsg("ID 혹은 비밀번호가 일치하지 않습니다.");
    console.log(err)
  }
})
}

export default usePostLogin;