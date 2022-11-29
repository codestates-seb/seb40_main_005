import axios from "axios"
import client from "../../client/client";

const checkEmail = async(email : string) => { // 요청메소드 + 요청정보
    return await client.get(`/members/checkEmail/${email}`)
    .catch((err)=> {
        return err;
    })
}

export default checkEmail;