import axios from "axios";

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
  return await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/members/password`, data);
};

export default petchPassword;
