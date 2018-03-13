import React, {Component} from 'react';

import './NavbarComponent.css';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {NavItem} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {MenuItem} from 'react-bootstrap';
import logo from '../img/logo.png';

class NavbarComponent extends Component {

    constructor(props, context) {
        super(props, context);
        this.handleSelectNavigation = this.handleSelectNavigation.bind(this);
    }


    handleSelectNavigation(eventKey) {
        //event.preventDefault();
        alert(`selected ${eventKey}`);
    }

    render() {
        return (
            <div className='container'>
                <Navbar className='container-fluid' collapseOnSelect>
                    <Navbar.Brand>
                        <a href="#brand"><img src={logo} alt="Random Name"/></a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav bsStyle="tabs" activeKey="1" pullRight
                             onSelect={k => this.handleSelectNavigation(k)}>
                            <NavItem eventKey={1} href="#home">
                                HOME
                            </NavItem>
                            <NavItem eventKey={2} href="#band">
                                BAND
                            </NavItem>
                            <NavItem eventKey={3} href="#tour">
                                TOUR
                            </NavItem>
                            <NavItem eventKey={4} href="#contact">
                                CONTACT
                            </NavItem>
                            <NavItem eventKey={5} href="#books">
                                BOOKS
                            </NavItem>
                            <NavDropdown eventKey={6} title="MORE" id="nav-dropdown">
                                <MenuItem eventKey="5.1">Subitem 1</MenuItem>
                                <MenuItem eventKey="5.2">Subitem 2</MenuItem>
                                <MenuItem eventKey="5.3">Subitem 3</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey="5.4">Separated link</MenuItem>
                            </NavDropdown>
                            <NavItem eventKey="6" disabled>
                                <span className="glyphicon glyphicon-search"></span>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavbarComponent;




