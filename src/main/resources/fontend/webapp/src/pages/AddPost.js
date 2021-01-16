import React, {Component} from 'react';
import '../css/AddPost.css'
import {Button, Form} from "react-bootstrap";
import {Editor} from "@tinymce/tinymce-react";
import axios from "axios";


class AddPost extends Component {

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    initialState = {title:"", thumbnail:"", shortDes:"",urlDetail:"", content:""}

    resetPost= () => {
        this.setState(()=> this.initialState);
    }

    submitPost = event => {
        event.preventDefault();

        const post = {
            title: this.state.title,
            thumbnail: this.state.thumbnail,
            shortDes: this.state.shortDes,
            urlDetail: this.state.urlDetail,
            content: this.initialState.content,
        };

        console.log(this.initialState.content);

        axios.post("http://localhost:8085/post", post)
            .then(res => {
                if(res.data != null) {
                    console.log(res.data)
                    alert("Saved post successfully")
                }
            });
    }

    handleChange = event => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleEditorChange = (content, editor) => {
        this.initialState.content = content;
        console.log('Content was updated:', content);
    }

    render() {
        return (
            <Form onSubmit={this.submitPost} onReset={this.resetPost}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control required
                        type={'text'} name={'title'} value={this.state.title} onChange={this.handleChange}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Thumbnail link</Form.Label>
                    <Form.Control required
                                  type={'text'} name={'thumbnail'} value={this.state.thumbnail} onChange={this.handleChange}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Short Description</Form.Label>
                    <Form.Control required
                        type={'text'} name={'shortDes'} value={this.state.shortDes} onChange={this.handleChange}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Url Detail post</Form.Label>
                    <Form.Control required
                                  type={'text'} name={'urlDetail'} value={this.state.urlDetail} onChange={this.handleChange}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Content</Form.Label>

                    <Editor
                        apiKey={'9cldwh5z8eo2beqjxj97uyiqy0cdqa1hf3g0yonu393m1ft6'}
                        init={{
                            height: 500,
                            menubar: true,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar:[
                                'undo redo | formatselect | bold italic backcolor | \
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help'],
                            selector: "textarea",
                        }}
                        required
                        name={'content'}
                        onEditorChange={this.handleEditorChange}
                    />

                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button variant="primary" type="reset">
                    Reset
                </Button>
            </Form>
        );
    }
}
export default AddPost;