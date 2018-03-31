import React, {Component} from 'react';
import './App.css';
import ReactSmoothScroll from 'react-smooth-scroll';
import PropTypes from 'prop-types';
import {getCanvasPosition} from './utils/formulas';

import CarouselComponent from './sectioncomponents/CarouselComponent.js';
import NavbarComponent from './sectioncomponents/NavbarComponent.js';
import BandComponent from './sectioncomponents/BandComponent.js';
import TourDatesComponent from './sectioncomponents/TourDatesComponent.js';
import ContactComponent from "./sectioncomponents/ContactComponent.js";
import GoogleMapComponent from "./sectioncomponents/GoogleMapComponent.js";
import FooterComponent from "./sectioncomponents/FooterComponent.js";
import BooksComponent from "./sectioncomponents/BooksComponent.js";

import Canvas from './components/Canvas';


class App extends Component {
    componentDidMount() {
        const self = this;
        setInterval(() => {
            self.props.moveObjects(self.canvasMousePosition);
        }, 10);
    }

    trackMouse(event) {
        this.canvasMousePosition = getCanvasPosition(event);
    }


    render() {
        return (

            <ReactSmoothScroll>
                <div>
                    <head>
                        <title>Sleeping Dog</title>
                    </head>
                    <body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="50">
                    <NavbarComponent/>
                    <Canvas
                        angle={this.props.angle}
                        trackMouse={event => (this.trackMouse(event))}
                    />
                    <CarouselComponent/>
                    <BandComponent/>
                    <TourDatesComponent/>
                    <ContactComponent/>
                    <GoogleMapComponent/>
                    <BooksComponent/>
                    <FooterComponent/>
                    </body>
                </div>
            </ReactSmoothScroll>
        )
    }
}

App.propTypes = {
    message: PropTypes.string.isRequired,
    angle: PropTypes.number.isRequired,
    moveObjects: PropTypes.func.isRequired,
};

export default App;




