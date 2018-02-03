import React from 'react';
import MyAppChild from './MyAppChild.js';

class ItemLister extends React.Component {
    constructor() {
        super();
        this.state = {
            items: {
                "a1": {"animal": "cat", "name": "kitten"},
                "a2": {"animal": "dog", "name": "puppy"},
                "a3": {"animal": "kangaroo", "name": "joey"}

            },
            test: {
                "b1": {"title": "Enter Sandman", "singer": "Metallica"}
            }
        };

        this.componentDidMount = this.componentDidMount.bind(this);
        this.logTest = this.logTest.bind(this);
        this.setTest = this.setTest.bind(this);

    }

    validateResponse(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

    logResult(result) {
        console.log(result);
    }

    logTest(result) {
        //test: this.state.test.concat('test');
        console.log(this.state.test.toString());
    }

    logError(error) {
        console.log('Looks like there was a problem: \n', error);
    }

    readResponseAsJSON(response) {
        return response.json();
    }

    setTest(result) {
        this.setState({
            test: this.state.test.concat(result)
        });
    }


        componentDidMount()
        {
            fetch('http://localhost:8080/SampleApp/api/users/track', {
                mode: 'cors' // 'cors' by default
            })
            /*fetch('animals.json')*/ // 1
            /*.then(this.validateResponse) // 2
            .then(this.readResponseAsJSON) // 3
            .then(this.logResult)
            .then(this.setTest)//
            .then(this.logTest)//// 4
            .catch(this.logError)*/
                .then(response => response.json())
                .then(json => {
                    console.log(json);
                    /*this.setState((state) => ({test: json}));*/
                });
        }

    render() {
        var json = this.state.test;
        /*{
                    "active": {"label": "Active", "value": "12"},
                    "automatic": {"label": "Automatic", "value": "8"},
                    "waiting": {"label": "Waiting", "value": "1"},
                    "manual": {"label": "Manual", "value": "3"}
                };*/

        /* {
              "a1": {"animal": "cat", "name": "kitten"},
              "a2": {"animal": "dog", "name": "puppy"},
              "a3": {"animal": "kangaroo", "name": "joey"}

          };*/
        var arr = [];
        Object.keys(json).forEach(function (key) {
            arr.push(json[key]);
        });
        return <ul>{arr.map(item => <MyAppChild key={item.test} title={item.title} singer={item.singer}/>)}</ul>;
        /*return <ul>{arr.map(item => <MyAppChild key={item.animal} label={item.animal} value={item.name}/>)}</ul>;*/
    }
}

export default ItemLister;
