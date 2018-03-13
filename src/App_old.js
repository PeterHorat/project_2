import React, {Component} from 'react';
import logo from './img/sleeping_dog_blue.GIF';
import './App.css';
import SturmTags from './sectioncomponents/SturmTags.js';
import Friends from './Friends.js';
import News from './News.js';
import {Grid, Row, Col} from 'react-flexbox-grid';
import { Player } from 'video-react';
import "./video-react.css";

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

    render() {
        return (
           <div className="flex-container">
                <header>

                    <Grid fluid>
                        <Row>
                            <Col xs={12} md={12}>
                                <img src={logo} className="App-logo" alt="logo"/>
                            </Col>
                            <Col xs={12} md={12}>
                                <h1 className="text-info">Sleeping Dog</h1>
                            </Col>
                        </Row>
                    </Grid>
                </header>


                <body>

                <Router>
                    <div>
                        <ul className="navigation">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/sturmtags">SturmTags</Link></li>
                            <li><Link to="/friends">Friends</Link></li>
                            <li><Link to="/news">News</Link></li>
                            <li><Link to="/topics">Topics</Link></li>
                        </ul>

                        <hr/>

                        <Route exact path="/" component={Home}/>
                        <Route path="/sturmtags" component={SturmTags}/>
                        <Route path="/friends" component={Friends}/>
                        <Route path="/news" component={News}/>
                        <Route path="/topics" component={Topics}/>
                    </div>
                </Router>


                </body>
                <footer>footer</footer>

            </div>
        );
    }
}

export default App;




