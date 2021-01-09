import React from "react";
import PostData from "../../data/PostData";
import {Button, Card} from "react-bootstrap";
import "../../css/GridPost.css"


function GridPost() {
    const listCard = PostData.map((item) => {
        return(
            <Card key={item.idPost} className={'CardPost'}>
                <a href={'/post'}><Card.Img variant="top" src={item.thumb} className={'CardImg'}/></a>
                <Card.Body className={'CardBody'}>
                    <Card.Title className={'CardTitle'}><b>{item.title}</b></Card.Title>
                    <Card.Text className={'CardText'}>
                        {item.shortDescription}
                    </Card.Text>
                    <a className={'CardButton'} href={item.link}>READ MORE</a>
                </Card.Body>
            </Card>
        );
    });
    return(
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
                {listCard}
            </div>
        </div>
    );
}
export default GridPost;