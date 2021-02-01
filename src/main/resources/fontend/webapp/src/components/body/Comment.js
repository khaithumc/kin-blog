import React from "react";
import {Button, Form} from "react-bootstrap";
import '../../css/Comment.css'

function Comment() {
    return (
        <>
            <div>
                <h3><b>Comment</b></h3>
                <Form className={'FormComment'}>
                    <Form.Group className={'Comment'}>
                        <Form.Control as="textarea" rows={3} placeholder={'Write Your Comment Here...'}/>
                    </Form.Group>

                    <Form.Group className={'EmailAndName'}>
                        <Form.Control type="email" placeholder={'Email *'}/>
                    </Form.Group>

                    <Form.Group className={'EmailAndName'}>
                        <Form.Control type="text" placeholder={'Name *'}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Check type="checkbox" label="Save my name, email in this browser for the next time I comment." />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Post Comment
                    </Button>
                </Form>
            </div>
        </>
    )
}
export default Comment;