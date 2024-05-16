import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8091/signin?email=thanh1596315963@gmail.com&password=123456789",

})

export default instance;