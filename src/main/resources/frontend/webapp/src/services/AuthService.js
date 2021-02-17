import axios from "axios";

const API_URL = "http://localhost:8085/authenticate/";

class AuthService {
    login(username, password) {
        return axios.post(API_URL + "login", {
            username,
            password
        })
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, email, password) {
        return axios.post(API_URL + "signup", {
            username,
            email,
            password
        })
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

}
export default new AuthService();