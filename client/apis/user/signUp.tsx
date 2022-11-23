import axios from "axios"

const fetchIdCheck = (userid : string) => {
    return axios.get(`http://3.39.195.113:8080/members/search?id=${userid}`);
}

export default fetchIdCheck;