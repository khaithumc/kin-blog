import React from "react";
import {Button, Container, Jumbotron, Row} from "react-bootstrap";
import '../../css/JumbotronHanding.css'

function JumbotronHanding() {
    return(
            <Jumbotron>
                <div className={'contentJum'}>
                    <h1><b>Fake news NOT Good news</b></h1>
                    <p>
                        “The human brain has not evolved to perceive reality, it has evolved to create an illusion of reality.<br/>
                        That's why an exciting lie gains more attention than a boring truth.”
                    </p>
                    <p>
                        <Button href={'https://www.facebook.com/khaithudang'} className={'jumButton'}>See Us On Facebook</Button>
                    </p>
                </div>
            </Jumbotron>
    );
}

export default JumbotronHanding