import React, {Component} from 'react';
import logo from './sleeping_dog_blue.GIF';
import poem1 from './poem_1.jpg';
import './App.css';
import FriendsContainer from './FriendsContainer.js';

class Spielwiese extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            username: '@tylermcginnis33',
            name: 'Tyler McGinnis',
            friends: [
                'Jake Lingwall',
                'Murphy Randall',
                'Merrick Christensen'
            ],
            emails: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.addFriend = this.addFriend.bind(this);
    };

    handleChange(e) {
        this.setState({
            username: e.target.value
        });
    };

    addFriend(friend) {
        this.setState({
            friends: this.state.friends.concat([friend])
        });
    }

    render() {
        return (
            <div className="flex-container">
                <body>
                <nav className="nav">
                    <ul>
                        <li><a href="#">London</a></li>
                        <li><a href="#">Paris</a></li>
                        <li><a href="#">Tokyo</a></li>
                    </ul>
                </nav>


                <article className="article">
                    <img className="centralimg" src={poem1}/>
                    <br/>
                    Hello{this.state.username}
                    <br/>
                    <div>
                        Change Name: <input type="text" value={this.state.username} onChange={this.handleChange}/>
                        <FriendsContainer container={this.friendsContainer}/>

                    </div>
                </article>
                </body>
            </div>
        );
    }
}

export default Spielwiese;
