import axios from "axios";
import client from "../../client/client";

interface authNumData {
  email: string;
}

const postAuthNum = async ({ email }: authNumData) => {
  const data = {
    email: email,
  };
  return await client.post("/authentication/email", data);
};

export default postAuthNum;
