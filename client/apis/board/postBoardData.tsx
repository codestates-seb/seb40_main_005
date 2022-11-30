import axios from "axios";
import client from "../../client/client";

interface SignUpData {
    id : string,
    email : string,
    password : string
  }

const postBoardData = async ( {id, email, password}:SignUpData )=> {
    const data = {
        "id" : id,
        "email" : email,
        "password" : password
    }
    return await client.post("/members", data)
}

export default postBoardData;