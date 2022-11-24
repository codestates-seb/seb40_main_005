import {
    useQuery,
    useQueryClient,
    useQueryErrorResetBoundary,
  } from "react-query";

import checkAuthNum from "../../apis/user/checkAuthNum";
  
  const useCheckAuthNum = (authNum:string, email:string) => {
    return useQuery(["get/authAfterClick"], () => checkAuthNum(authNum, email), {
      enabled: false,
    });
  };
  
  export default useCheckAuthNum;