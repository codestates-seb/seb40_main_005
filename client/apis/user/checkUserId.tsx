import axios from "axios";

const checkUserId = async (id:string) => {
  // 요청메소드 + 요청정보
  console.log(id);
  return await axios
    .get(`/members/checkId/${id}`, {
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        withCredentials: true,
        "Content-Type": `application/json`,
      },
    })
};

export default checkUserId;
