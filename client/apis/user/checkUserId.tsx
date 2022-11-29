import axios from "axios"
import client from "../../client/client";

const checkUserId = async(userid : string) => { // 요청메소드 + 요청정보
    return await client.get(`/members/checkId/${userid}`)
    .catch((err)=>{
        return err;
    })
}

export default checkUserId;