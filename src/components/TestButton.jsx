import React from 'react';
import PropTypes from 'prop-types';
import { gameWidth } from '../utils/constants';
import CurrentScore from "./CurrentScore";

const TestButton = (props) => {
    const button = {
        x: gameWidth / -2, // half width
        y: -280, // minus means up (above 0)
        width: gameWidth,
        height: 200,
        rx: 10, // border radius
        ry: 10, // border radius
        style: {
            fill: 'transparent',
            cursor: 'pointer',
        },
        onClick: props.onClick,
        intervall: props.intervall,
    };

    const text = {
        textAnchor: 'middle', // center
        x: 0, // center relative to X axis
        y: -750, // 250 up
        style: {
            fontFamily: '"Joti One", cursive',
            fontSize: 60,
            fill: '#e3e3e3',
            cursor: 'pointer',
        },
        onClick: props.onClick,
        intervall: props.intervall,
    };
    return (
        <g filter="url(#shadow)">
            <rect {...button} />
            <text {...text}>
                intervall: + {props.intervall}
            </text>
        </g>
    );
};

TestButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    intervall: PropTypes.number.isRequired,

};

export default TestButton;