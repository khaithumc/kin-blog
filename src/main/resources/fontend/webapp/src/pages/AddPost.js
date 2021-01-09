import React, {Component} from 'react';
import '../css/AddPost.css'
import {Button, Form} from "react-bootstrap";
import {Editor} from "@tinymce/tinymce-react";


class AddPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title:"",
            shortDescription:"",
            content:"",
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitPost = this.submitPost.bind(this);
    }

    submitPost(event)  {
        alert(this.state.title);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleEditorChange = (content, editor) => {
        console.log('Content was updated:', content);
    }

    render() {
        return (
            <Form onSubmit={this.submitPost}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control required
                        type={'text'} name={'title'} value={this.state.title} onChange={this.handleChange}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Short Description</Form.Label>
                    <Form.Control required
                        type={'text'} name={'shortDescription'} value={this.state.shortDescription} onChange={this.handleChange}/>
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
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor | \
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help'
                        }}
                        required
                        name={'content'}
                        onEditorChange={this.handleEditorChange}
                    />

                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}
export default AddPost;