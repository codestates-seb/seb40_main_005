import axios from "axios";
import client from "../../client/client";

interface SignUpData {
  id: string;
  email: string;
  password: string;
}

const postSignUp = async ({ id, email, password }: SignUpData) => {
  const data = {
    id: id,
    email: email,
    password: password,
  };
  return await client.post("/members", data);
};

export default postSignUp;
