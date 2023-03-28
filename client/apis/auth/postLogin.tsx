import axios from "axios";

interface LoginValue {
  id: string;
  password: string;
}

const postLogin = async (payload: LoginValue) => {
  return axios
    .post("/authentication", payload, {
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        withCredentials: true,
        "Content-Type": `application/json`,
      },
    })
    .catch(err => console.log(err));
};

export default postLogin;
