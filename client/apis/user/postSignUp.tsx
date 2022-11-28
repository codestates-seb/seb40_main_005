import axios from "axios";

interface SignUpData {
    id : string,
    email : string,
    password : string
  }

const postSignUp = async ( {id, email, password}:SignUpData )=> {
    const data = {
        "id" : id,
        "email" : email,
        "password" : password
    }
    return await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/members`, data)
}

export default postSignUp;