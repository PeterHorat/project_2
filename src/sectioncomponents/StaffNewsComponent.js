import React, {Component} from 'react';
import '../App.css';
import {Tabs} from 'react-bootstrap';
import {Tab} from 'react-bootstrap';

class StaffNewsComponent extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            key: 1,
        };
    }


    handleSelect(key) {
        alert(`selected ${key}`);
        this.setState({key});
    }

    render() {
        return (
            <div className='container'>
                <Tabs
                    activeKey={this.state.key}
                    onSelect={this.handleSelect}
                    id="controlled-tab-example"
                >
                    <Tab eventKey={1} title="Mike">
                        <h2>Mike Ross, Manager</h2>
                        <p>Man, we've been on the road for some time now. Looking forward to lorem
                            ipsum.</p>
                    </Tab>
                    <Tab eventKey={2} title="Chandler 2">
                        <h2>Chandler Bing, Guitarist</h2>
                        <p>Always a pleasure people! Hope you enjoyed it as much as I did. Could I BE..
                            any
                            more
                            pleased?</p>
                    </Tab>
                    <Tab eventKey={3} title="Peter 3" disabled>
                        <h2>Peter Griffin, Bass player</h2>
                        <p>I mean, sometimes I enjoy the show, but other times I enjoy other things.</p>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

export default StaffNewsComponent;




