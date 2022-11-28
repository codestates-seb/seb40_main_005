import axios from "axios";

interface authNumData {
    authNum : string,
    email : string
  }

const checkAuthNum = async ( {authNum, email}:authNumData )=> {
    const data = {
        authNum : authNum,
        email : email
    }
    return await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/authentication/email/verify`, data)
    .catch((err)=> {
        return err;
    })
}

export default checkAuthNum;