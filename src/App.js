import React, {Component} from 'react';
import logo from './img/sleeping_dog_blue.GIF';
import './App.css';
import SturmTags from './SturmTags.js';
import Friends from './Friends.js';
import News from './News.js';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Player} from 'video-react';
import "./video-react.css";
import { Carousel } from 'react-bootstrap';
import toffee from './img/toffee_token.jpg';
import toffee_sw from './img/toffee_sw.jpg';
import geiss from './img/geiss_sw.jpg';
import wald from './img/wald_sw.jpg';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const Home = () => (
    <div>
        <h2>Home</h2>
        <Player
            playsInline
            poster="./img/holz.jpg"
            src="./img/toess.mov"
        />
    </div>
)


const Topic = ({match}) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

const Topics = ({match}) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.path}/:topicId`} component={Topic}/>
        <Route exact path={match.path} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)


class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null
        };
    }

    handleSelect(selectedIndex, e) {
        alert(`selected=${selectedIndex}, direction=${e.direction}`);
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    render() {
        const { index, direction } = this.state;
        return (
            <div>
                <head>
                    <title>Sleeping Dog</title>
                </head>
                <body>
                <Carousel activeIndex={index}
                          direction={direction}
                          onSelect={this.handleSelect}>
                    <Carousel.Item>
                        <img width={1200} height={900} alt="1200x900" src={toffee_sw} />
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
                </Carousel>;


                <div className="container text-center">
                    <h3>Sleeping Dog</h3>
                    <p>We love music!</p>
                    <p>We have created a fictional band website. Lorem ipsum..</p>
                    <Router>
                        <div className="row">
                            <div className="col-sm-4">
                                <p><strong>Toffee</strong></p><br/>
                                <Link to='#demo' data-toggle="collapse">
                                    <img className='img-circle person' src={toffee} alt="Random Name"/>
                                </Link>
                                <div id='demo'>
                                    <p>Guitarist and Lead Vocalist</p>
                                    <p>Loves long walks on the beach</p>
                                    <p>Member since 1988</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <p><strong>Toffee</strong></p><br/>
                                <Link to='#demo2' data-toggle="collapse">
                                    <img className='img-circle person' src={toffee} alt="Random Name"/>
                                </Link>
                                <div id="demo2">
                                    <p>Drummer</p>
                                    <p>Loves drummin'</p>
                                    <p>Member since 1988</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <p><strong>Toffee</strong></p><br/>
                                <Link to='#demo3' data-toggle="collapse">
                                    <img className='img-circle person' src={toffee} alt="Random Name"/>
                                </Link>
                                <div id="demo3">
                                    <p>Bass player</p>
                                    <p>Loves math</p>
                                    <p>Member since 2005</p>
                                </div>
                            </div>
                        </div>
                    </Router>
                </div>
                </body>
            </div>
        )
    }
}

export default App;




