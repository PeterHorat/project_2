import React, {Component} from 'react';

import './BooksComponent.css';
import '../App.css';
import SturmTagsBook from './SturmTagsBook.js';
import Friends from '../Friends.js';
import News from '../News.js';
import "../video-react.css";
import book from '../img/book_icon.gif';
import { Row, Col } from 'react-bootstrap';

import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const Home = () => (
    <div>

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


class BooksComponent extends Component {

    render() {
        return (

            <div id="books" className="books_container container text-center">
                <img src={book}/>
                <h3 className="text-center">Books</h3>
                <div className="bg-2">
                    <Router>
                        <div className="list-group">
                            <ul className="nav">
                                <Row className="show-grid">
                                    <Col xs={10} xsOffset={1}md={4} mdOffset={4}>
                                        <li><Link className="list-group-item" to="/sturmtags"><span
                                            class="glyphicon glyphicon-book"></span> Stormtags</Link>
                                        </li>
                                    </Col>
                                    <Col xs={10} xsOffset={1}md={4} mdOffset={4}>
                                        <li><Link className="list-group-item" to="/friends"><span
                                            class="glyphicon glyphicon-book"></span> Friends</Link></li>
                                    </Col>
                                    <Col xs={10} xsOffset={1}md={4} mdOffset={4}>
                                        <li><Link className="list-group-item" to="/news"><span
                                            class="glyphicon glyphicon-book"></span> News</Link></li>
                                    </Col>
                                    <Col xs={10} xsOffset={1}md={4} mdOffset={4}>
                                        <li><Link className="list-group-item" to="/topics"><span
                                            class="glyphicon glyphicon-book"></span> Topics</Link></li>
                                    </Col>
                                </Row>
                            </ul>
                            <hr/>
                            <div>
                                <Route exact path="/" component={Home}/>
                                <Route path="/sturmtags" component={SturmTagsBook}/>
                                <Route path="/friends" component={Friends}/>
                                <Route path="/news" component={News}/>
                                <Route path="/topics" component={Topics}/>
                            </div>
                        </div>
                    </Router>
                </div>
            </div>
    )
    }
    }

    export default BooksComponent;




