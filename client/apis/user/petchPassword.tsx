import axios from "axios";
import client from "../../client/client";

interface ResetPwData {
  id: string;
  email: string;
  password: string;
}

const petchPassword = async ({ id, email, password }: ResetPwData) => {
  const data = {
    email: email,
    id: id,
    password: password,
  };
  return await axios.patch("/members/password", data, {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      withCredentials: true,
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": `application/json`,
    },
  });
};

export default petchPassword;
