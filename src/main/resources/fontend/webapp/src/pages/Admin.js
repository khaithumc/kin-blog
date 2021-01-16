import React, {Component} from "react";
import {Button, Table} from "react-bootstrap";
import axios from "axios";

class Admin extends Component{

    constructor(props) {
        super(props);
        this.state = {
            posts : [],
            post : {}
        };
    }

    componentDidMount() {
        this.findAllPosts()
    }

    findAllPosts() {
        axios.get("http://localhost:8085/post")
            .then(res => {
                const posts = res.data;
                this.setState({posts : posts});
            })
    }

    deletePost = (id) => {
        axios.delete('http://localhost:8085/post/'+id)
            .then(res => {
                console.log(res.data);
                if(res.data != null) {
                    alert("Deleted Post Successfully");
                }
            })
    }

    render() {
        return(
            <div>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Short Description</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.posts.map((post) =>(
                        <tr>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.shortDes}</td>
                            <td>{post.createdAt}</td>
                            <td>{post.updatedAt}</td>
                            <td>
                                <Button onClick={this.deletePost.bind(this, post.id)}>Delete</Button>
                                <Button>Update</Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <a href="/add-post"><Button>Add new post</Button></a>
            </div>
        );
    }
}
export default Admin;