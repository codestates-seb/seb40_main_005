import axios from "axios"

const checkAuthNum = (authNum:string, email : string) => { // 요청메소드 + 요청정보
    return axios.get(`http://13.209.7.184:8080/authentication/${email}/${authNum}`);
}

export default checkAuthNum;