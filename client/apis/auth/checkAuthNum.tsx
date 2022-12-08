import axios from "axios";
import client from "../../client/client";

interface authNumData {
  authNum: string;
  email: string;
}

const checkAuthNum = async ({ authNum, email }: authNumData) => {
  const data = {
    authNum: authNum,
    email: email,
  };
  return await client.post("/authentication/email/verify", data).catch(err => {
    return err;
  });
};

export default checkAuthNum;
