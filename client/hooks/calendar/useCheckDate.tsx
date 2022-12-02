import {
    useQuery,
    // useQueryClient,
    // useQueryErrorResetBoundary,
  } from "react-query";
import getCheckDate from "../../apis/board/getCheckDate";
  
  interface Props {
    day: string;
    month : string;
    year : string;
  }
  
  const useCheckDate = ({ day, month, year }: Props) => {
    return useQuery(["get/checkDate"], () => getCheckDate({ day, month, year }), {
      enabled: false,
    });
  };
  
  export default useCheckDate;
  