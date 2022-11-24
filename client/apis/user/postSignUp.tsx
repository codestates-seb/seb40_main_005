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
    return await axios.post(`http://13.209.7.184:8080/members`, data)
}

export default postSignUp;