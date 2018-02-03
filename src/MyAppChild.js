import React from 'react';

class MyAppChild extends React.Component {
    render() {
        return <li>{this.props.title + " - " + this.props.singer}</li>;
    }
}

export default MyAppChild;