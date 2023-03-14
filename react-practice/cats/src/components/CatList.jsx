// import axios from "axios";
// import {Row, Col, Card, Container} from 'react-bootstrap';
// import {useState} from 'react'; 

// const CatList = ()=>{

//     const loadData = ()=>{
//         const [cats, setCats] = useState([])

//         axios.get('https://api.thecatapi.com/v1/breeds').then(r=>{
//         console.log(r.data);
//         })
//     }

//     return(
//         <Container>
//         <button onClick={loadData}>Load Data</button>
//         <Row xs={1} md={3}>
//             {
//                 cats.map((cat)=>{
//                     <Col>
//                     <Card>
//                         <Card.Header>{cat.name}</Card.Header>
//                     </Card>
//                     </Col>
//                 })
//             }
//         </Row>
//         </Container> // react bootstrap component called container
//     )
// }

// export default CatList;

import {Row,Col,Card,Container} from 'react-bootstrap'


const CatList = ({cats})=>{
    return (
        <Container>
            <Row xs={1} md={3}>
                {
                    cats.map((cat)=>(
                        <Col>
                            <Card>
                                <Card.Header>
                                    {cat.name}
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        {cat.description}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    More Info
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default CatList;