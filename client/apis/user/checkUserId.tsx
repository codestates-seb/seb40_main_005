import axios from "axios"

const checkUserId = async(userid : string) => { // 요청메소드 + 요청정보
    return await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/members/checkId/${userid}`)
    .catch((err)=>{
        return err;
    })
}

export default checkUserId;