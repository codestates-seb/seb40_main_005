import axios from "axios";
import client from "../../client/client";

interface authNumData {
  authNumValue: string;
  email: string;
}

const checkAuthNum = async ({ authNumValue, email }: authNumData) => {
  const data = {
    authNum: authNumValue,
    email: email,
  };
  return await axios.post("/authentication/email/verify", data, {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      withCredentials: true,
      "Content-Type": `application/json`,
    },
  });
};

export default checkAuthNum;
