import axios from "axios";
import client from "../../client/client";

/**
 * @description userEmail을 props로 받아서 id를 return하는 hook
 **/

const fetchIdByEmail = (userEmail: string) => {
  // 요청메소드 + 요청정보
  return client.get(
    `/members/find-id?email=${userEmail}`,
  );
};

export default fetchIdByEmail;
