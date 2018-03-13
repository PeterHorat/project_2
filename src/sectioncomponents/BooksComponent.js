import React, {Component} from 'react';

import './BooksComponent.css';
import SturmTagsBook from './SturmTagsBook.js';
import Friends from '../Friends.js';
import News from '../News.js';
import {Player} from 'video-react';
import "../video-react.css";
import toffee from '../img/toffee_token.jpg';
import holz from '../img/holz.jpg';
import toess from '../img/toess.mov';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

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
            <div id="books" className="container text-center">
                <h2>Books</h2>
                {/*                <Player
                    playsInline
                    poster={holz}
                    src={toess}
                />*/}
                <div className="bg-1">
                    <div>
                        <Router>
                            <div className="list-group">
                                <ul className="nav">
                                    <li><Link className="list-group-item" to="/sturmtags"><span
                                        class="glyphicon glyphicon-book"></span> SturmTags</Link></li>
                                    <li><Link className="list-group-item" to="/friends"><span
                                        class="glyphicon glyphicon-book"></span> Friends</Link></li>
                                    <li><Link className="list-group-item" to="/news"><span
                                        class="glyphicon glyphicon-book"></span> News</Link></li>
                                    <li><Link className="list-group-item" to="/topics"><span
                                        class="glyphicon glyphicon-book"></span> Topics</Link></li>
                                </ul>
                                <Route exact path="/" component={Home}/>
                                <Route path="/sturmtags" component={SturmTagsBook}/>
                                <Route path="/friends" component={Friends}/>
                                <Route path="/news" component={News}/>
                                <Route path="/topics" component={Topics}/>
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

export default BooksComponent;




