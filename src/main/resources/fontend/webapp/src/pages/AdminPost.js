import React, {Component} from "react";
import {Button, Modal, Table} from "react-bootstrap";
import axios from "axios";
import '../css/Admin.css'

class AdminPost extends Component{

    constructor(props) {
        super(props);
        this.state = {
            posts : [],
            post : {},
            show:false
        };
    }

    handleClose = () => this.setState({show:false});
    handleShow = () => this.setState({show:true});


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
        this.handleClose();
    }

    render() {
        return(
            <div className={'AdminPost'}>
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
                            <td className={'Action'}>
                                <Button onClick={this.handleShow} className={'ButtonDelete'}><i
                                    className="far fa-trash-alt"></i></Button>
                                <Button className={'ButtonUpdate'}><i className="far fa-edit"></i></Button>
                                <Button className={'ButtonShowPost'} href={post.urlDetail+"-"+ post.id}><i className="far fa-eye"></i></Button>
                            </td>
                            <Modal show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Warning !!</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Delete this post ?</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={this.deletePost.bind(this, post.id)}>
                                        Delete
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <a href="/add-post"><Button>Add new post</Button></a>
            </div>
        );
    }
}
export default AdminPost;