import axios from "axios";

/**
 * @description userEmail을 props로 받아서 id를 return하는 hook
 **/

const fetchIdByEmail = (userEmail: string) => {
  // 요청메소드 + 요청정보
  return axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/members/find-id?email=${userEmail}`,
    // `http://13.209.7.184:8080/members/${userEmail}`,
    // "http://13.209.7.184:8080/members/find-id?email=yw1010@naver.com"
  );
};

export default fetchIdByEmail;
