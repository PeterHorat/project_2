import React, {Component} from 'react';
import './CarouselComponent.css';

import {Carousel} from 'react-bootstrap';

import toffee_sw from '../img/toffee_sw.jpg';
import geiss from '../img/geiss_sw.jpg';
import wald from '../img/wald_sw.jpg';





class CarouselComponent extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleSelectCarousel = this.handleSelectCarousel.bind(this);

        this.state = {
            index: 0,
            direction: null
        };
    }

    handleSelectCarousel(selectedIndex, e) {
        alert(`selected=${selectedIndex}, direction=${e.direction}`);
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }


    render() {
        const {index, direction} = this.state;

        return (
            <div className='container'>
                <Carousel activeIndex={index}
                          direction={direction}
                          onSelect={this.handleSelectCarousel}>
                    <Carousel.Item>
                        <img width={1200} height={900} alt="1200x900" src={toffee_sw}/>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1200} height={900} alt="1200x900" src={geiss}/>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1200} height={900} alt="1200x900" src={wald}/>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default CarouselComponent;




