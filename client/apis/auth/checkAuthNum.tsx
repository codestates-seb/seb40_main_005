import axios from "axios";
import client from "../../client/client";

interface authNumData {
  authNumValue: string;
  emailValue: string;
}

const checkAuthNum = async ({ authNumValue, emailValue }: authNumData) => {
  const data = {
    authNum: authNumValue,
    email: emailValue,
  };
  return await axios.post("/authentication/emailValue/verify", data, {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      withCredentials: true,
      "Content-Type": `application/json`,
    },
  });
};

export default checkAuthNum;
