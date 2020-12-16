import axios from "axios";
import authHeader from "./auth-header";
import Setting from "../setting";
const API_URL = Setting.REACT_APP_BASE_URL;

const checkAuth = () => {
  return axios.get(API_URL + "/auth/login", { headers: authHeader() });
};

export default {
  checkAuth,
};
