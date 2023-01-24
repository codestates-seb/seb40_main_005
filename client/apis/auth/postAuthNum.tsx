import axios from "axios";

interface authNumData {
  email: string;
}

const postAuthNum = async ({ email }: authNumData) => {
  const data = {
    email: email,
  };
  return await axios.post("/authentication/email", data, {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      withCredentials: true,
      "Content-Type": `application/json`,
    },
  });
};

export default postAuthNum;
