import { useMutation } from "react-query";
import petchPassword from "../../apis/user/petchPassword";

interface ResetPwData {
  id: string;
  email: string;
  password: string;
}

const usePatchPwData = ({ id, email, password }: ResetPwData) => {
  return useMutation(petchPassword);
};

export default usePatchPwData;
