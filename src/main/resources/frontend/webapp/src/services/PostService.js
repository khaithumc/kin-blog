import axios from "axios";
import authHeader from "./AuthHeader";

const API_URL = "http://localhost:8085/post/";

class PostService {
    findAllPost() {
        return axios.get(API_URL, {
            headers : authHeader()
        });
    }

    addPost(post) {
        return axios.post(API_URL, post, {
            headers: authHeader()
        })
    }

    deletePost(id) {
        return axios.delete('http://localhost:8085/post/'+id, {
            headers : authHeader()
        })
    }
}
export default new PostService;