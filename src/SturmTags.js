import React, {Component} from 'react';
import poem1 from './poem_1.jpg';
import './App.css';
import FriendsContainer from './FriendsContainer.js';

class SturmTags extends Component {
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
                <article className="article">
                    <img className="centralimg" src={poem1} alt={"storm-tags"}/>
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

export default SturmTags;
