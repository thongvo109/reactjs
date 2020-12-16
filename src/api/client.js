import axios from "axios";
import Setting from "../setting";


export default (): axios => {
  let instance: axios = axios.create({
    baseURL: Setting.REACT_APP_BASE_URL
  });
  return instance;
};
