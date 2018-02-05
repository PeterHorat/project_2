import React, {Component} from 'react';
import logo from './sleeping_dog_blue.GIF';
import './App.css';
import FriendsContainer from './FriendsContainer.js';

class App extends Component {
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
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Sleeping Dog</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                Hello {this.state.username}
                <br/>
                Change Name: <input type="text" value={this.state.username} onChange={this.handleChange}/>
                <FriendsContainer container={this.friendsContainer}/>
            </div>

        );
    }
}

export default App;
