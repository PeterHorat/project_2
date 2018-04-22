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

import * as Auth0 from 'auth0-web';

import io from 'socket.io-client';

Auth0.configure({
    domain: 'sleepingdog.eu.auth0.com',
    clientID: 'Q6hY68BMqwCii6SON7V3jKZo616qqlds',
    redirectUri: 'http://localhost:3000/',
    responseType: 'token id_token',
    scope: 'openid profile manage:points',
    audience: 'https://aliens-go-home.digituz.com.br',
});


class App extends Component {
    constructor(props) {
        super(props);
        this.shoot = this.shoot.bind(this);
    }

    componentDidMount() {
        const self = this;

        Auth0.handleAuthCallback();

        Auth0.subscribe((auth) => {
            if (!auth) return;

            const playerProfile = Auth0.getProfile();
            const currentPlayer = {
                id: playerProfile.sub,
                maxScore: 0,
                name: playerProfile.name,
                picture: playerProfile.picture,
            };

            this.props.loggedIn(currentPlayer);

            const socket = io('http://localhost:3001', {
                query: `token=${Auth0.getAccessToken()}`,
            });

            let emitted = false;
            socket.on('players', (players) => {
                this.props.leaderboardLoaded(players);

                if (emitted) return;
                socket.emit('new-max-score', {
                    id: playerProfile.sub,
                    maxScore: 120,
                    name: playerProfile.name,
                    picture: playerProfile.picture,
                });
                emitted = true;
                setTimeout(() => {
                    socket.emit('new-max-score', {
                        id: playerProfile.sub,
                        maxScore: 222,
                        name: playerProfile.name,
                        picture: playerProfile.picture,
                    });
                }, 5000);
            });
        });
        setInterval(() => {
            self.props.moveObjects(self.canvasMousePosition);
        }, 10);
        window.onresize = () => {
            const cnv = document.getElementById('aliens-go-home-canvas');
            cnv.style.width = `${window.innerWidth}px`;
            cnv.style.height = `${window.innerHeight}px`;
        };
        window.onresize();
    }

    trackMouse(event) {
        this.canvasMousePosition = getCanvasPosition(event);
    }

    shoot() {
        this.props.shoot(this.canvasMousePosition);
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
                        currentPlayer={this.props.currentPlayer}
                        gameState={this.props.gameState}
                        players={this.props.players}
                        startGame={this.props.startGame}
                        trackMouse={event => (this.trackMouse(event))}
                        shoot={this.shoot}
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
    gameState: PropTypes.shape({
        started: PropTypes.bool.isRequired,
        kills: PropTypes.number.isRequired,
        lives: PropTypes.number.isRequired,
        flyingObjects: PropTypes.arrayOf(PropTypes.shape({
            position: PropTypes.shape({
                x: PropTypes.number.isRequired,
                y: PropTypes.number.isRequired
            }).isRequired,
            id: PropTypes.number.isRequired,
        })).isRequired,
    }).isRequired,
    moveObjects: PropTypes.func.isRequired,
    startGame: PropTypes.func.isRequired,
    shoot: PropTypes.func.isRequired,
};


export default App;




