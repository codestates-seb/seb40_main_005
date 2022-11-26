import axios from "axios"

const checkUserId = async(userid : string) => { // 요청메소드 + 요청정보
    return await axios.get(`http://13.209.7.184:8080/members/checkId/${userid}`)
    .catch((err)=>{
        return err;
    })
}

export default checkUserId;