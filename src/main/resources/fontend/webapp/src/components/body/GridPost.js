import React, {Component} from "react";
import {Card} from "react-bootstrap";
import "../../css/GridPost.css"
import axios from "axios";


class GridPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts : []
        };
    }

    componentDidMount() {
        this.findAllPosts()
    }

    findAllPosts() {
        axios.get("http://localhost:8085/post")
            .then(res => {
                const posts = res.data;
                this.setState({posts});
            })
    }

    render() {
        return (
            <div className={"Wrapper"}>
                <div className={'GridTitle'}>
                    <h3><b>Popular Posts</b></h3>
                    <p>
                        A person such as the president canon impulse and with minimal
                        effort inject any sort of falsehood into public conversation
                        through digital media and call his own lie a correction of "fake news".
                    </p>
                </div>
                <div className={'ListCard'}>
                    {this.state.posts.map((post) => (
                        <Card key={post.id} className={'CardPost'}>
                            <a href={post.urlDetail+"-"+post.id}><Card.Img variant="top" src={post.thumbnail} className={'CardImg'}/></a>
                            <Card.Body className={'CardBody'}>
                                <Card.Title className={'CardTitle'}><b>{post.title}</b></Card.Title>
                                <Card.Text className={'CardText'}>
                                    {post.shortDes}
                                </Card.Text>
                                <a className={'CardButton'} href={post.urlDetail+"-"+post.id}>READ MORE</a>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        );
    }
}
export default GridPost;