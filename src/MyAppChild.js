import React from 'react';

class MyAppChild extends React.Component {
    render() {
        return <li>{this.props.email}</li>;
    }
}

export default MyAppChild;