import axios from "axios";

const checkEmail = async (email: string) => {
  // 요청메소드 + 요청정보
  return await axios.get(`/members/checkEmail/${email}`, {
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      withCredentials: true,
      "Content-Type": `application/json`,
    },
  });
};

export default checkEmail;
