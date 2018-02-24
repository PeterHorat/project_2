import React, {Component} from 'react';
import logo from './img/sleeping_dog_blue.GIF';
import './App.css';
import SturmTags from './SturmTags.js';
import Friends from './Friends.js';
import News from './News.js';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Player} from 'video-react';
import "./video-react.css";
import {Carousel} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Popover} from 'react-bootstrap';
import {Tooltip} from 'react-bootstrap';
import {Tabs} from 'react-bootstrap';
import {Tab} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';

import {OverlayTrigger} from 'react-bootstrap';
import toffee from './img/toffee_token.jpg';
import toffee_sw from './img/toffee_sw.jpg';
import geiss from './img/geiss_sw.jpg';
import wald from './img/wald_sw.jpg';
import holz from './img/holz.jpg';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const AnyReactComponent = ({text}) => <div>{text}</div>;

const Home = () => (
    <div>
        <h2>Home</h2>
        <Player
            playsInline
            poster="./img/holz.jpg"
            src="./img/toess.mov"
        />
    </div>
)


const Topic = ({match}) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

const Topics = ({match}) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.path}/:topicId`} component={Topic}/>
        <Route exact path={match.path} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)


class App extends Component {

    static defaultProps = {
        center: {lat: 59.95, lng: 30.33},
        zoom: 11
    };

    constructor(props, context) {
        super(props, context);

        this.handleSelectCarousel = this.handleSelectCarousel.bind(this);
        this.handleSelectNavigation = this.handleSelectNavigation.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSelect = this.handleSelect.bind(this);


        this.state = {
            index: 0,
            direction: null,
            show: false,
            key: 1
        };
    }

    handleSelectCarousel(selectedIndex, e) {
        alert(`selected=${selectedIndex}, direction=${e.direction}`);
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    handleSelectNavigation(eventKey) {
        //event.preventDefault();
        alert(`selected ${eventKey}`);
    }

    handleSelect(key) {
        alert(`selected ${key}`);
        this.setState({key});
    }


    handleClose() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }


    render() {
        const {index, direction} = this.state;
        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        );
        const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

        return (

            <div>
                <head>
                    <title>Sleeping Dog</title>
                </head>
                <body>
                <Navbar className='container-fluid'>
                    <Navbar.Brand>
                        <a href="#brand">Logo</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav activeKey="1" pullRight>
                            <NavItem eventKey={1} href="#">
                                HOME
                            </NavItem>
                            <NavItem eventKey={2} href="#">
                                BAND
                            </NavItem>
                            <NavItem eventKey={3} href="#">
                                TOUR
                            </NavItem>
                            <NavItem eventKey={4} href="#">
                                CONTACT
                            </NavItem>
                            <NavDropdown eventKey={5} title="MORE" id="nav-dropdown">
                                <MenuItem eventKey={5.1}>Action</MenuItem>
                                <MenuItem eventKey={5.2}>Another action</MenuItem>
                                <MenuItem eventKey={5.3}>Something else here</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={5.3}>Separated link</MenuItem>
                            </NavDropdown>
                            <NavItem eventKey="6" disabled>
                                <span className="glyphicon glyphicon-search"></span>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {/*                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#brand">Logo</a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav bsStyle="tabs" activeKey="1" pullRight='true'
                             onSelect={k => this.handleSelectNavigation(k)}>
                            <NavItem eventKey="1" href="/home">
                                HOME
                            </NavItem>
                            <NavItem eventKey="2" title="Bnd">
                                BAND
                            </NavItem>
                            <NavItem eventKey="3" disabled>
                                TOUR
                            </NavItem>
                            <NavItem eventKey="4" disabled>
                                CONTACT
                            </NavItem>
                            <NavDropdown eventKey="5" title="MORE" id="nav-dropdown">
                                <MenuItem eventKey="5.1">Merchandise</MenuItem>
                                <MenuItem eventKey="5.2">Extras</MenuItem>
                                <MenuItem eventKey="5.3">Media</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey="5.4">Separated link</MenuItem>
                            </NavDropdown>
                            <NavItem eventKey="6" disabled>
                                <span className="glyphicon glyphicon-search"></span>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>*/}
                <div className='container'>
                    <Carousel activeIndex={index}
                              direction={direction}
                              onSelect={this.handleSelectCarousel}>
                        <Carousel.Item>
                            <img width={1200} height={900} alt="1200x900" src={toffee_sw}/>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={1200} height={900} alt="1200x900" src={geiss}/>
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width={1200} height={900} alt="1200x900" src={wald}/>
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="container text-center">
                    <h3>Sleeping Dog</h3>
                    <p>We love music!</p>
                    <p>We have created a fictional band website. Lorem ipsum..</p>
                    <Router>
                        <div className="row">
                            <div className="col-sm-4">
                                <p><strong>Toffee</strong></p><br/>
                                <Link to='#demo' data-toggle="collapse">
                                    <img className='img-circle person' src={toffee} alt="Random Name"/>
                                </Link>
                                <div id='demo'>
                                    <p>Guitarist and Lead Vocalist</p>
                                    <p>Loves long walks on the beach</p>
                                    <p>Member since 1988</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <p><strong>Toffee</strong></p><br/>
                                <Link to='#demo2' data-toggle="collapse">
                                    <img className='img-circle person' src={toffee} alt="Random Name"/>
                                </Link>
                                <div id="demo2">
                                    <p>Drummer</p>
                                    <p>Loves drummin'</p>
                                    <p>Member since 1988</p>
                                </div>
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
                <div className="bg-1">
                    <div className="container">
                        <h3 className="text-center">TOUR DATES</h3>
                        <p className="text-center">Lorem ipsum we'll play you some music.<br/> Remember to book your
                            tickets!</p>

                        <ul className="list-group">
                            <li className="list-group-item">September <span
                                className="label label-danger">Sold Out!</span>
                            </li>
                            <li className="list-group-item">October <span
                                className="label label-danger">Sold Out!</span>
                            </li>
                            <li className="list-group-item">November <span className="badge">3</span></li>
                        </ul>

                        <div className="row text-center">
                            <div className="col-sm-4">
                                <div className="thumbnail">
                                    <img src={holz} alt="Paris"/>
                                    <p><strong>Paris</strong></p>
                                    <p>Fri. 27 November 2015</p>
                                    <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                                        Buy Tickets
                                    </Button>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="thumbnail">
                                    <img src={holz} alt="New York"/>
                                    <p><strong>New York</strong></p>
                                    <p>Sat. 28 November 2015</p>
                                    <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                                        Buy Tickets
                                    </Button>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="thumbnail">
                                    <img src={holz} alt="San Francisco"/>
                                    <p><strong>San Francisco</strong></p>
                                    <p>Sun. 29 November 2015</p>
                                    <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                                        Buy Tickets
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title><span className="glyphicon glyphicon-lock"></span> Tickets</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form role="form">
                            <div className="form-group">
                                <label for="psw"><span
                                    className="glyphicon glyphicon-shopping-cart"></span> Tickets, $23 per
                                    person</label>
                                <input type="number" className="form-control" id="psw" placeholder="How many?"/>
                            </div>
                            <div className="form-group">
                                <label for="usrname"><span className="glyphicon glyphicon-user"></span> Send To</label>
                                <input type="text" className="form-control" id="usrname"
                                       placeholder="Enter email"/>
                            </div>
                            <button type="submit" className="btn btn-block">Pay
                                <span className="glyphicon glyphicon-ok"></span>
                            </button>
                        </form>
                        <h4>Text in a modal</h4>
                        <p>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </p>

                        <h4>Popover in a modal</h4>
                        <p>
                            there is a{' '}
                            <OverlayTrigger overlay={popover}>
                                <a href="#popover">popover</a>
                            </OverlayTrigger>{' '}
                            here
                        </p>

                        <h4>Tooltips in a modal</h4>
                        <p>
                            there is a{' '}
                            <OverlayTrigger overlay={tooltip}>
                                <a href="#tooltip">tooltip</a>
                            </OverlayTrigger>{' '}
                            here
                        </p>

                        <hr/>

                        <h4>Overflowing text to show scroll behavior</h4>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                            ac consectetur ac, vestibulum at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur
                            et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                            auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                            dui. Donec ullamcorper nulla non metus auctor fringilla.
                        </p>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                            ac consectetur ac, vestibulum at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur
                            et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                            auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                            dui. Donec ullamcorper nulla non metus auctor fringilla.
                        </p>
                        <p>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                            ac consectetur ac, vestibulum at eros.
                        </p>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur
                            et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                            auctor.
                        </p>
                        <p>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                            dui. Donec ullamcorper nulla non metus auctor fringilla.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn btn-danger btn-default pull-left" onClick={this.handleClose}> <span
                            className="glyphicon glyphicon-remove"></span> Cancel</Button>
                        <p>Need <a href="#">help?</a></p>
                    </Modal.Footer>
                </Modal>
                <div className="container">
                    <h3 className="text-center">Contact</h3>
                    <p className="text-center"><em>We love our fans!</em></p>
                    <div className="row test">
                        <div className="col-md-4">
                            <p>Fan? Drop a note.</p>
                            <p><span className="glyphicon glyphicon-map-marker"></span>Chicago, US</p>
                            <p><span className="glyphicon glyphicon-phone"></span>Phone: +00 1515151515</p>
                            <p><span className="glyphicon glyphicon-envelope"></span>Email: mail@mail.com</p>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-sm-6 form-group">
                                    <input className="form-control" id="name" name="name" placeholder="Name" type="text"
                                           required/>
                                </div>
                                <div className="col-sm-6 form-group">
                                    <input className="form-control" id="email" name="email" placeholder="Email"
                                           type="email" required/>
                                </div>
                            </div>
                            <textarea className="form-control" id="comments" name="comments" placeholder="Comment"
                                      rows="5"></textarea>
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <button className="btn pull-right" type="submit">Send</button>
                                </div>
                            </div>
                        </div>
                        <Tabs
                            activeKey={this.state.key}
                            onSelect={this.handleSelect}
                            id="controlled-tab-example"
                        >
                            <Tab eventKey={1} title="Mike">
                                <h2>Mike Ross, Manager</h2>
                                <p>Man, we've been on the road for some time now. Looking forward to lorem ipsum.</p>
                            </Tab>
                            <Tab eventKey={2} title="Chandler 2">
                                <h2>Chandler Bing, Guitarist</h2>
                                <p>Always a pleasure people! Hope you enjoyed it as much as I did. Could I BE.. any more
                                    pleased?</p>
                            </Tab>
                            <Tab eventKey={3} title="Peter 3" disabled>
                                <h2>Peter Griffin, Bass player</h2>
                                <p>I mean, sometimes I enjoy the show, but other times I enjoy other things.</p>
                            </Tab>
                        </Tabs>
                    </div>
                    <GoogleMapReact
                        bootstrapURLKeys=''
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        <AnyReactComponent
                            lat={41.878114}
                            lng={-87.629798}
                            text={'Textli'}
                        />
                    </GoogleMapReact>
                </div>
                <GoogleMapReact
                    bootstrapURLKeys=''
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={41.878114}
                        lng={-87.629798}
                        text={'Textli'}
                    />
                </GoogleMapReact>
                </body>
            </div>
        )
    }
}

export default App;




