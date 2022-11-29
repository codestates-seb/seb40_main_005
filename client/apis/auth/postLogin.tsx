import axios from "axios";
import client from "../../client/client";

interface LoginValue {
  id: string;
  password: string;
}

const postLogin = async (payload: LoginValue) => {
  // 요청메소드 + 요청정보
  const { data } = await client.post(
    "/authentication",
    payload,
  );

  return data;
};

export default postLogin;
