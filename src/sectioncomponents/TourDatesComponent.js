import React, {Component} from 'react';
import './TourDatesComponent.css';
import {Button, Modal, OverlayTrigger, Popover, Tooltip} from 'react-bootstrap';
import holz from '../img/holz.jpg';

class TourDatesComponent extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);


        this.state = {
            show: false,
        };
    }


    handleClose() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }

    render() {
        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        );
        const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
        return (
            <div id="tour" className="container">
                <div className="bg-1">
                    <div>
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
                <div>
                    <Modal  show={this.state.show} onHide={this.handleClose}>
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
                                    <label for="usrname"><span className="glyphicon glyphicon-user"></span> Send
                                        To</label>
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
                </div>
            </div>
        )
    }
}

export default TourDatesComponent;




