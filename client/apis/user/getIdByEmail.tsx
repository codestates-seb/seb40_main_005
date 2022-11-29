import axios from "axios";

/**
 * @author yeowool
 * @description userEmail을 props로 받아서 id를 return
 **/

const fetchIdByEmail = (userEmail: string) => {
  // 요청메소드 + 요청정보
  return axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/members/find-id?email=${userEmail}`,
  );
};

export default fetchIdByEmail;
