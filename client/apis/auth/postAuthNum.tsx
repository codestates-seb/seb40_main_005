import axios from "axios";

interface authNumData {
    email : string,
  }

const postAuthNum = async ( {email}:authNumData )=> {
    const data = {
        "email" : email
    }
    return await axios.post(`http://13.209.7.184:8080/authentication/email`, data)
}

export default postAuthNum;