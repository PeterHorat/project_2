import React, {Component} from 'react';
import './BandComponent.css';

import BandMemberComponent from "./BandMemberComponent.js";
import toffee from '../img/toffee_token.jpg';
import caramel from '../img/caramel_token.jpg';
import grace from '../img/grace_token.jpg';

import {BrowserRouter as Router,} from 'react-router-dom'


class BandComponent extends Component {

    render() {
        return (
            <div id="band" className="band_container container text-center">
                <h3>Sleeping Dog</h3>
                <p>We love music!</p>
                <p>We have created a fictional band website. Lorem ipsum..</p>


                <Router>
                    <div className="row">
                        <div className="col-sm-4">
                            <BandMemberComponent
                                imgsource={toffee}
                                name='Toffee'
                                bandrole='Guitarist and Lead Vocalist'
                                hobby='Loves long walks on the beach'
                                membersince='Member since 1988'/>
                        </div>
                        <div className="col-sm-4">
                            <BandMemberComponent
                                imgsource={caramel}
                                name='Caramel'
                                bandrole='Drummer'
                                hobby='Loves drummin'
                                membersince='Member since 1988'/>
                        </div>
                        <div className="col-sm-4">
                            <BandMemberComponent
                                imgsource={grace}
                                name='Grace'
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




