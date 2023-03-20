import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import {Link} from 'react-router-dom';
import '../css/TaySwift.css'

function TriviaHome(){
    return(
        <Stack direction='horizontal' gap={2} className="buttonStack">
            <Link to='/lyric-trivia'>
                <Button className='lyricButton'>
                    Lyric Trivia
                </Button>
            </Link>
            <Link to='/fact-trivia'>
                <Button className='factButton'>
                    Fact Trivia
                </Button>
            </Link>
        </Stack>
    )
}

export default TriviaHome;