import {
    useQuery,
    useQueryClient,
    useQueryErrorResetBoundary,
  } from "react-query";
  import checkEmail from "../../apis/user/checkEmail";
  
  const useCheckEmail = (email:string) => {
    return useQuery(["get/emailAfterClick"], () => checkEmail(email), {
      enabled: false,
    });
  };
  
  export default useCheckEmail;