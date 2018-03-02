import React, {Component} from 'react';
import './App.css';
import ReactSmoothScroll from 'react-smooth-scroll';

import CarouselComponent from './sectioncomponents/CarouselComponent.js';
import NavbarComponent from './sectioncomponents/NavbarComponent.js';
import BandComponent from './sectioncomponents/BandComponent.js';
import TourDatesComponent from './sectioncomponents/TourDatesComponent.js';
import ContactComponent from "./sectioncomponents/ContactComponent.js";
import GoogleMapComponent from "./sectioncomponents/GoogleMapComponent.js";
import FooterComponent from "./sectioncomponents/FooterComponent.js";


class App extends Component {

    constructor(props, context) {
        super(props, context);
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
                    <CarouselComponent/>
                    <BandComponent/>
                    <TourDatesComponent/>
                    <ContactComponent/>
                    <GoogleMapComponent/>
                    <FooterComponent/>
                    </body>
                </div>
            </ReactSmoothScroll>
        )
    }
}

export default App;




