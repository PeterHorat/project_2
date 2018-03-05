import React, {Component} from 'react';
import './BandComponent.css';
import PropTypes from 'prop-types';

import BandMemberComponent from "./BandMemberComponent.js";

import {
    BrowserRouter as Router,
} from 'react-router-dom'


class BandComponent extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <div id="band" className="container text-center">
                <h3>Sleeping Dog</h3>
                <p>We love music!</p>
                <p>We have created a fictional band website. Lorem ipsum..</p>


                <Router>
                    <div className="row">
                        <div className="col-sm-4">
                            <BandMemberComponent name='Caramel'
                                                 bandrole='Guitarist and Lead Vocalist'
                                                 hobby='Loves long walks on the beach'
                                                 membersince='Member since 1988'/>
                        </div>
                        <div className="col-sm-4">
                            <BandMemberComponent name='Caramel_1'
                                                 bandrole='Drummer'
                                                 hobby='Loves drummin'
                                                 membersince='Member since 1988'/>
                        </div>
                        <div className="col-sm-4">
                            <BandMemberComponent name='Caramel_2'
                                                 bandrole='Bass player'
                                                 hobby='Loves math'
                                                 membersince='Member since 2005'/>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}

export default BandComponent;




