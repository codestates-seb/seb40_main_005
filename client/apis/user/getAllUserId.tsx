import axios from "axios";
import client from "../../client/client";

/**
 * @author yeowool
 * @description searchInput을 props로 받아서 검색 조건에 맞는 id 배열을 return
 **/

const getAllUserId = (searchInput: string) => {
  // 요청메소드 + 요청정보
  return client.get(`/members/search?id=${searchInput}`);
};

export default getAllUserId;
