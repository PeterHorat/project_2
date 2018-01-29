import React, {Component} from 'react';
import ItemListener from './ItemListener.js';

class ShowList extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            names: []
        };
    }

    render() {
        var listItems = this.props.names.map(function (friend) {
            return <li> {friend} </li>;
        });
        return (
            <div>
                <h3> Friends </h3>
                <ul>
                    {listItems}
                </ul>
                <ItemListener/>
            </div>
        )
    }
}
export default ShowList;