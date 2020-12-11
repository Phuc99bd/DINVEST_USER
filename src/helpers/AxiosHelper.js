import axios from "axios"
import jsCookie from "js-cookie";

axios.interceptors.request.use((config)=>{
    const token = jsCookie.get("token");
    if(token)
        config.headers.Authorization = token;
})

axios.interceptors.response.use((config)=>{
    if(config.status == 401)
        jsCookie.set("token" , null);
})

export default axios;