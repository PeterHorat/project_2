import React, {Component} from 'react';
import AddFriend from './AddFriend.js';
import ShowList from './ShowList.js';

class FriendsContainer extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: 'Tyler McGinnis',
            friends: [
                'Jake Lingwall',
                'Murphy Randall',
                'Merrick Christensen'
            ],
        };
        this.addFriend = this.addFriend.bind(this);
    };

    getInitialState (){
        return {
            name2: 'Tyler McGinnis',
            friends: [
                'Jake Lingwall',
                'Murphy Randall',
                'Merrick Christensen'
            ],
        };
        this.addFriend = this.addFriend.bind(this);
    }
    addFriend(friend){
        this.setState({
            friends: this.state.friends.concat([friend])
        });
    }
    render (){
        return (
            <div>
                <h3> Name: {this.state.name} </h3>
                <AddFriend addNew={this.addFriend} />
                <ShowList names={this.state.friends} />
            </div>
        )
    }
}

export default FriendsContainer;