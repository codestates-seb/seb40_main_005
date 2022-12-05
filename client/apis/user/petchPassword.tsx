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
  return await axios.patch("/members/password", data);
};

export default petchPassword;
