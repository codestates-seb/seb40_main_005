import axios from "axios"

const fetchIdCheck = (userid : string) => { // 요청메소드 + 요청정보
    return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/members/search?id=${userid}`);
}

export default fetchIdCheck;