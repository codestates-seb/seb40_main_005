import axios from "axios";
import client from "../../client/client";

const fetchIdCheck = (userid: string) => {
  // 요청메소드 + 요청정보
  return axios.get(`/members/search?id=${userid}`);
};

export default fetchIdCheck;
