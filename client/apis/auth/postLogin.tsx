import axios from "axios";

interface LoginValue {
  id: number;
  todo: string;
}

const postLogin = async (payload: LoginValue) => {
  // 요청메소드 + 요청정보
  const { data } = await axios.post(
    `http://13.209.7.184:8080/authentication`,
    payload,
  );

  return data;
};

export default postLogin;
