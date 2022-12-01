import axios from "axios";
import client from "../../client/client";

const getAllUserId = (searchInput: string) => {
  // 요청메소드 + 요청정보
  return client.get(`/members/search?id=${searchInput}`);
};

export default getAllUserId;
