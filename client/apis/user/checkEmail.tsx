import axios from "axios"

const checkEmail = async(email : string) => { // 요청메소드 + 요청정보
    return await axios.get(`http://13.209.7.184:8080/members/checkEmail/${email}`)
    .catch((err)=> {
        return err;
    })
}

export default checkEmail;