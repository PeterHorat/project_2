import React from 'react';
import PropTypes from 'prop-types';
import Sky from './Sky';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';
import CannonBall from './CannonBall';
import CurrentScore from './CurrentScore';
import FlyingObject from './FlyingObject';
import Leaderboard from './Leaderboard';
import Heart from './Heart';
import StartGame from './StartGame';
import Title from './Title';
import './Canvas.css';
import Login from './Login';
import { signIn } from 'auth0-web';



const Canvas = (props) => {
    const gameHeight = 1200;
    const viewBox = [window.innerWidth / -2, 100 - gameHeight, window.innerWidth, gameHeight + 135];

    return (
        <div id="contact" className="canvas_container">
            <svg
                id="aliens-go-home-canvas"
                preserveAspectRatio="xMaxYMax none"
                onMouseMove={props.trackMouse}
                viewBox={viewBox}
                onClick={props.shoot}
            >
                <defs>
                    <filter id="shadow">
                        <feDropShadow dx="1" dy="1" stdDeviation="2" />
                    </filter>
                </defs>
                <Sky />
                <Ground />
                {props.gameState.cannonBalls.map(cannonBall => (
                    <CannonBall
                        key={cannonBall.id}
                        position={cannonBall.position}
                    />
                ))}
                <CannonPipe rotation={props.angle} />
                <CannonBase />
                <CurrentScore score={15} />

                { ! props.gameState.started &&
                <g>
                    <StartGame onClick={() => props.startGame()} />
                    <Title />
                    <Leaderboard currentPlayer={props.currentPlayer} authenticate={signIn} leaderboard={props.players} />
                </g>
                }

                {props.gameState.flyingObjects.map(flyingObject => (
                    <FlyingObject
                        key={flyingObject.id}
                        position={flyingObject.position}
                    />
                ))}

            </svg>
        </div>
    );
};

Canvas.propTypes = {
    angle: PropTypes.number.isRequired,
    trackMouse: PropTypes.func.isRequired,
    gameState: PropTypes.shape({
        // ... other propTypes definitions ...
        flyingObjects: PropTypes.arrayOf(PropTypes.shape({
            position: PropTypes.shape({
                x: PropTypes.number.isRequired,
                y: PropTypes.number.isRequired
            }).isRequired,
            id: PropTypes.number.isRequired,
        })).isRequired,
    }).isRequired,
    shoot: PropTypes.func.isRequired,

};

export default Canvas;