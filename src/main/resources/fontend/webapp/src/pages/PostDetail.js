import React, {Component} from "react";
import axios from "axios";

class PostDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post : {}
        };
    }

    componentDidMount() {
        this.findAllPosts()
    }

    findAllPosts() {

        const id =this.getId();

        axios.get('http://localhost:8085/post/' + this.getId())
            .then(res => {
                const post = res.data;
                this.setState({post});
                console.log(this.state)
            })
    }

    getId() {
        let s = window.location.pathname;
        return s.substring(s.length, s.length-1);
    }

    render() {
        return(
            <div>
                <h1>THIS IS POST DETAIL</h1>
                <p>{this.state.post.title}</p>
            </div>
        );
    }
}
export default PostDetail;