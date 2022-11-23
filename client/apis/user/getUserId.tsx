import axios from "axios"

const fetchIdCheck = (userid : string) => { // 요청메소드 + 요청정보
    return axios.get(`http://13.209.7.184:8080/members/search?id=${userid}`);
}

export default fetchIdCheck;