import axios from "axios";

interface LoginValue {
  id: string;
  password: string;
}

const postLogin = async (payload: LoginValue) => {
  // 요청메소드 + 요청정보
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/authentication`,
    payload,
  );

  return data;
};

export default postLogin;
