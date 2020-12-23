import axios from "axios";
import jsCookie from "js-cookie";
import { toast } from "react-toastify";
import { get } from "lodash";

axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use((config) => {
  const token = jsCookie.get("token");
  if (token) config.headers.Authorization = token;
  return config;
});

axios.interceptors.response.use(
  (config) => {
    let { data } = config;
    if (config.status == 200 && data.status_code == 404) {
      toast.error(data.message);
    }
    if (config.status == 200 && data.status_code == 401)
      jsCookie.set("token", null);

    if (config.status == 404 || config.status == 500) {
      toast.error(get(data, "message", "500 error"));
    }
    return config;
  },
  (error) => {
    toast.error(JSON.stringify(error));
    return Promise.reject(error);
  }
);

export default axios;
