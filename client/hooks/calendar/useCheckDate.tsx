import {
    useQuery, useQueryClient,
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
    let realDay = Number(day);
    let realMonth = Number(month);
    let realYear = Number(year);

    const queryClient = useQueryClient();

    queryClient.invalidateQueries({ queryKey : ["get/checkDate"]})

    // console.log(day, month, year);
    return useQuery(["get/checkDate"], () => getCheckDate({ realDay, realMonth, realYear }), {
      enabled: false,
      // onSuccess : res => {
      //   console.log(res);
      // }
    });
  };
  
  export default useCheckDate;
  