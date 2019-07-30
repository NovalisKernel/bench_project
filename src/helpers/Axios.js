import axios from "axios";

const ajax = axios.create({baseURL: "https://morning-brushlands-61529.herokuapp.com"});

export default ajax;