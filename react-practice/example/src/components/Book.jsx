import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Book(props){
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.book.name}</Card.Title>
          <Card.Text>
          {props.book.description}
          </Card.Text>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>        
    )
}

export default Book;