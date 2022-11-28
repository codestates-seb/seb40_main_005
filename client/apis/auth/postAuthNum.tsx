import axios from "axios";

interface authNumData {
    email : string,
  }

const postAuthNum = async ( {email}:authNumData )=> {
    const data = {
        "email" : email
    }
    return await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/authentication/email`, data)
}

export default postAuthNum;