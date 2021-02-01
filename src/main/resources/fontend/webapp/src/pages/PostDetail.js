import React, {Component} from "react";
import axios from "axios";
import { Markup } from 'interweave';
import '../css/PostDetail.css'
import Comment from "../components/body/Comment";

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

        axios.get('http://localhost:8085/post/'+ this.getId())
            .then(res => {
                const post = res.data;
                this.setState({post});
                console.log(this.state)
            })
    }

    getId() {
        let s = window.location.pathname;
        let id = s.substring(s.lastIndexOf("-")+1, s.length);
        return id;
    }

    render() {
        return(
            <>
                <div className={'DetailPost'}>
                    <div className={'container'} id={'content'}>
                        <Markup content={this.state.post.content}/>
                    </div>
                    <div className={'SideBar'}>

                    </div>
                    <div className={'container'}>
                        <Comment/>
                    </div>
                </div>
            </>
        );
    }
}
export default PostDetail;