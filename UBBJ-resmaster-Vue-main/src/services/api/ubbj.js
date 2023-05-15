import axios from "axios";

const ubbj_api = axios.create({
    baseURL: process.env.VUE_APP_UBBJ_API_CODE
})

export default ubbj_api;
