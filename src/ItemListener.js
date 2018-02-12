import React from 'react';
import MyAppChild from './MyAppChild.js';

class ItemLister extends React.Component {
    constructor() {
        super();
        this.state = {
            emails: []
        };
    }

    validateResponse(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    logError(error) {
        console.log('Looks like there was a problem: \n', error);
    }

    componentDidMount() {
        fetch('http://localhost:8080/SampleApp/api/users/all', {
            mode: 'cors' // 'cors' by default
        })
            .then(this.validateResponse)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({emails: json})
            })
            .catch(this.logError);
    }

    render() {
        var json = this.state.emails;
        var arr = [];
        Object.keys(json).forEach(function (key) {
            arr.push(json[key]);
        });
        return (
            <div>
                <h3> Emails </h3>
                <ul>{arr.map(item => <MyAppChild key={item.email} email={item.email}/>)}</ul>
            </div>
        );


    }
}

export default ItemLister;
