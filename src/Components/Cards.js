import React, {Component} from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import islamabad from '../Images/islamabad.jpg';
import lahore from '../Images/lahore.jpg';
import karachi from '../Images/karachi.jpg';
import './Cards.css';

class Navbr extends Component {
    render(){
        return (
            <div>
        <Container>
            <Row>
                <Col className="card-col">
                <Card style={{ width: '18rem' }} className="Card1-Style">
                <Card.Img variant="top" src={islamabad} />
                    <Card.Body>
                        <Card.Title>ISLAMABAD CITY</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    <Button variant="primary">Explore ISLAMABAD</Button>
                    </Card.Body>
            </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }} className="Card2-Style" >
                <Card.Img variant="top" src={lahore} />
                    <Card.Body>
                        <Card.Title>LAHORE CITY</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    <Button variant="primary">Explore LAHORE</Button>
                    </Card.Body>
            </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }} className="Card3-Style">
                <Card.Img className="image-karachi" variant="top" src={karachi} />
                    <Card.Body>
                        <Card.Title>KARACHI CITY</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    <Button variant="primary">Explore KARACHI</Button>
                    </Card.Body>
            </Card>
                </Col>
            </Row>
        </Container>
            </div>
        )
    }
}
export default Navbr;