import axios from "axios";

const ajax = axios.create({baseURL: process.env.REACT_APP_API});

export default ajax;