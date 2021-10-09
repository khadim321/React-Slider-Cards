import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';
import sliderpic1 from '../Images/sliderpic1.jpg';
import sliderpic2 from '../Images/sliderpic2.jpg';
import sliderpic3 from '../Images/sliderpic3.jpg';

class Slider extends Component {
    render(){
        return (
            <div>
<Carousel variant="dark">
        <Carousel.Item>
    <img
      className="First-slide"
      alt="First slide"
      src={sliderpic1}
    />
        <Carousel.Caption className="HandP1">
      <h5 className="H1">ISLAMABAD</h5>
      <p className="P1">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
    <img
      className="Second-slide"
      alt="Second slide"
      src={sliderpic2}
    />
        <Carousel.Caption>
      <h5 className="H2">LAHORE</h5>
      <p className="P2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
    <img
      className="Third-slide"
      alt="Third slide"
      src={sliderpic3}
    />
        <Carousel.Caption>
      <h5 className="H3">KARACHI</h5>
      <p className="P3">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
        </Carousel.Item>
</Carousel>
            </div>
        )
    }
}
export default Slider;