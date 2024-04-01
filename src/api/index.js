import axios from "axios";
import { useUserStore } from '@/store/user';

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  timeout: Number(import.meta.env.VITE_APP_API_TIMEOUT || 3000),
});


api.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    const token = userStore.tokens.accessToken
    if (token) {
      config.headers["Authorization"] = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const userStore = useUserStore()

    // Access Token was expired
    if (err.response.status === 401) {

      try {
        // const rs = await api.post("/user/refreshtoken", {
        //   refreshToken: userStore.tokens.refreshToken,
        // });

        // const { accessToken } = rs.data;

        //  userStore.setToken(response.data.tokens)
      } catch (_error) {
        return Promise.reject(_error);
      }
    }

    return Promise.reject(err);
  }
);


export { api };