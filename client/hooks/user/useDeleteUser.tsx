import { useMutation } from "react-query";
import deleteUser from "../../apis/user/deleteUser";

const useDeleteUser = () => {
  return useMutation(deleteUser);
};

export default useDeleteUser;
