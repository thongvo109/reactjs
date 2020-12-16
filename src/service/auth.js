import axios from "axios";
import Setting from "../setting";

class AuthService {
  login(email, password) {
    return axios
      .post(Setting.REACT_APP_BASE_URL + "/auth/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(name, email, password) {
    return axios.post(Setting.REACT_APP_BASE_URL + "/auth/register", {
      name,
      email,
      password,
    });
  }
  getCurrentUser(){
      return JSON.parse(localStorage.getItem("user"));
  }
}
