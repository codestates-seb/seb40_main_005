import axios from "axios";

interface SignUpData {
  id: string;
  email: string;
  password: string;
}

const postSignUp = async ({ id, email, password }: SignUpData) => {
  const data = {
    id: id,
    email: email,
    password: password,
  };
  return await axios.post("/members", data, {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      withCredentials: true,
      "Content-Type": `application/json`,
    },
  });
};

export default postSignUp;
