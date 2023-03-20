import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Card} from 'react-bootstrap';

function LyricTrivia(){
    return(
        <div>
        <h1>Lyric Trivia</h1>
        <Card>
            <Col>What song and album are these lyrics from?</Col>
            <Col>"The autumn chill that wakes me up, you loved the amber skies so much"</Col>
        </Card>
        </div>
    )
}

export default LyricTrivia;