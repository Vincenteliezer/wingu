import Axios from "axios";

const axios = Axios.create({
  baseURL: process.env.EXPO_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default axios;
// export const setAuthorizationHeader = (token: string) => {
//   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// };
