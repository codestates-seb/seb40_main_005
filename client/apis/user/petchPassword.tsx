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
  return await axios.patch(`http://13.209.7.184:8080/members/password`, data);
};

export default petchPassword;
