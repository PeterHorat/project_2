import React, {Component} from 'react';
import './BandComponent.css';
import {Collapse} from 'react-collapse';
import toffee from '../img/toffee_token.jpg';
import PropTypes from 'prop-types';

import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'


class BandComponent extends Component {

    static defaultProps = {
        isOpened: false,

    };

    static propTypes = {
        isOpened: PropTypes.bool
    };

    constructor(props, context) {
        super(props, context);
        this.handleIsOpenCollapse = this.handleIsOpenCollapse.bind(this);

        this.state = {
            isOpened: this.props.isOpened
        };
    }


    handleIsOpenCollapse() {
        if (this.state.isOpened === true) {
            this.setState({isOpened: false});
        } else
            this.setState({isOpened: true});
    }

    render() {

        const {isOpened} = this.state;
        return (
            <div id="band" className="container text-center">
                <h3>Sleeping Dog</h3>
                <p>We love music!</p>
                <p>We have created a fictional band website. Lorem ipsum..</p>


                <Router>
                    <div className="row">
                        <div className="col-sm-4">
                            <p><strong>Toffee</strong></p><br/>
                            <a onClick={this.handleIsOpenCollapse}>
                                <img className='img-circle person' src={toffee} alt="Random Name"/>
                            </a>
                            <Collapse isOpened={isOpened}>
                                <div className="text">
                                    <p>Guitarist and Lead Vocalist</p>
                                    <p>Loves long walks on the beach</p>
                                    <p>Member since 1988</p>
                                </div>
                            </Collapse>
                            {/*                            <div id="demo1">
                                <p>Guitarist and Lead Vocalist</p>
                                <p>Loves long walks on the beach</p>
                                <p>Member since 1988</p>
                            </div>*/}
                        </div>
                        <div className="col-sm-4">
                            <p><strong>Toffee</strong></p><br/>
                            <a>
                                <img className='img-circle person' src={toffee} alt="Random Name"/>
                            </a>
                            <Collapse isOpened='false'>
                                <p>Drummer</p>
                                <p>Loves drummin'</p>
                                <p>Member since 1988</p>
                            </Collapse>
                        </div>
                        <div className="col-sm-4">
                            <p><strong>Toffee</strong></p><br/>
                            <Link to='#demo3'>
                                <img className='img-circle person' src={toffee} alt="Random Name"/>
                            </Link>
                            <div id="demo3">
                                <p>Bass player</p>
                                <p>Loves math</p>
                                <p>Member since 2005</p>
                            </div>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}

export default BandComponent;




