import React from 'react';

class MyAppChild extends React.Component {
    render() {
        return <li>{this.props.animal + " - " + this.props.name}</li>;
    }
}

export default MyAppChild;