import client from "../../client/client";

const getSharedLog = async () => {
  return await axios
    .get(`/member/tag?page=0&size=8`, {
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        withCredentials: true,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": `application/json`,
      },
    })
    .catch(err => console.log(err));
};

export default getSharedLog;
