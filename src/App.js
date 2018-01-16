import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ShowList from './ShowList.js';

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            username: '@tylermcginnis33',
            name: 'Tyler McGinnis',
            friends: ['Jake Lingwall', 'Murphy Randall', 'Merrick Christensen']
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e) {
        this.setState({
            username: e.target.value
        });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React, Peter</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                Hello {this.state.username}
                <br/>
                Change Name: <input type="text" value={this.state.username} onChange={this.handleChange}/>

                <h3> Name: {this.state.name} </h3>
                <ShowList names={this.state.friends} />

            </div>

        );
    }
}

export default App;
