import React, {Component} from 'react';
import AddFriend from './AddFriend.js';
import ShowList from './ShowList.js';

class FriendsContainer extends Component{
    getInitialState (){
        return {
            name: 'Tyler McGinnis',
            friends: [
                'Jake Lingwall',
                'Murphy Randall',
                'Merrick Christensen'
            ],
        }
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