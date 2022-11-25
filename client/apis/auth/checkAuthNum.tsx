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
    return await axios.post(`http://13.209.7.184:8080/authentication/email/verify`, data)
    .catch((err)=> {
        return err;
    })
}

export default checkAuthNum;