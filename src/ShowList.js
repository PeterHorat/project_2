import React, {Component} from 'react';

class ShowList extends Component {
    render() {
        var listItems = this.props.names.map(function(friend){
            return <li> {friend} </li>;
        });
        return (
            <div>
                <h3> Friends </h3>
                <ul>
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default ShowList;