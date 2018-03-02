import React, {Component} from 'react';
import '../App.css';
import {Collapse} from 'react-collapse';
import toffee from '../img/toffee_token.jpg';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';


import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'

const AnyReactComponent = ({text}) => <div>{text}</div>;


const text = [
    "You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.",
    "Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.",
    "Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.",
    "You see? It's curious. Ted did figure it out - time travel. And when we get back, we gonna tell everyone. How it's possible, how it's done, what the dangers are. But then why fifty years in the future when the spacecraft encounters a black hole does the computer call it an 'unknown entry event'? Why don't they know? If they don't know, that means we never told anyone. And if we never told anyone it means we never made it back. Hence we die down here. Just as a matter of deductive logic."
];

const getText = num => text.slice(0, num).map((p, i) => <p key={i}>{p}</p>);


class BandComponent extends Component {

    static defaultProps = {
        isOpened: false
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
        this.setState({isOpen: true});
    }


    render() {
        return (

            <div id="band" className="container text-center">
                <h3>Sleeping Dog</h3>
                <p>We love music!</p>
                <p>We have created a fictional band website. Lorem ipsum..</p>
                {/*<Button onClick={this.handleIsOpenCollapse()}>
                            <img className='img-circle person' src={toffee} alt="Random Name"/>
                        </Button>
                        <Collapse isOpened='true'>
                            <p>Guitarist and Lead Vocalist</p>
                            <p>Loves long walks on the beach</p>
                            <p>Member since 1988</p>
                        </Collapse >*/}
                {/* <div>
                            <div className="config">
                                <label className="label">
                                    Opened:
                                    <input className="input"
                                           type="checkbox"
                                           checked={isOpened}
                                           onChange={({target: {checked}}) => this.setState({isOpened: checked})}/>
                                </label>


                            </div>

                            <Collapse isOpened={isOpened}>
                                <div className="text">
                                    <p>{text}</p>
                                </div>
                            </Collapse>
                        </div>*/}
                <Router>
                    <div className="row">
                        <div className="col-sm-4">
                            <p><strong>Toffee</strong></p><br/>
                            <Button>
                                <img className='img-circle person' src={toffee} alt="Random Name"/>
                            </Button>
                            <Collapse isOpened='true'>
                                <p>Guitarist and Lead Vocalist</p>
                                <p>Loves long walks on the beach</p>
                                <p>Member since 1988</p>
                            </Collapse>
                        </div>
                        <div className="col-sm-4">
                            <p><strong>Toffee</strong></p><br/>
                            <Button>
                                <img className='img-circle person' src={toffee} alt="Random Name"/>
                            </Button>
                            <Collapse isOpened='false'>
                                <p>Drummer</p>
                                <p>Loves drummin'</p>
                                <p>Member since 1988</p>
                            </Collapse>
                        </div>
                        <div className="col-sm-4">
                            <p><strong>Toffee</strong></p><br/>
                            <Link to='#demo3' data-toggle="collapse">
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




