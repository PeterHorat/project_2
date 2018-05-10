import React, {Component} from 'react';

import './NavbarComponent.css';
import {Button, FormControl, FormGroup, MenuItem, Nav, Navbar, NavDropdown, NavItem} from 'react-bootstrap';
import logo from '../img/sleeping_dog_blue_2.gif';

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
                <Navbar id="band-navbar" className="band-navbar" inverse collapseOnSelect fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#brand"><img src={logo} alt="Random Name"/></a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav activeKey="1"
                             onSelect={k => this.handleSelectNavigation(k)}>
                            <NavItem className="active" eventKey={1} href="#video">
                                VIDEO
                            </NavItem>
                            <NavItem eventKey={2} href="#home">
                                HOME
                            </NavItem>
                            <NavItem eventKey={32} href="#band">
                                BAND
                            </NavItem>
                            <NavItem eventKey={4} href="#tour">
                                TOUR
                            </NavItem>
                            <NavItem eventKey={5} href="#contact">
                                CONTACT
                            </NavItem>
                            <NavItem eventKey={6} href="#books">
                                BOOKS
                            </NavItem>
                            <NavDropdown eventKey={7} title="MORE" >
                                <MenuItem className="band-dropdown-menu-item" eventKey="7.1">Subitem 1</MenuItem>
                                <MenuItem className="band-dropdown-menu-item" eventKey="7.2">Subitem 2</MenuItem>
                                <MenuItem className="band-dropdown-menu-item" eventKey="7.3">Subitem 3</MenuItem>
                                <MenuItem divider/>
                                <MenuItem className="band-dropdown-menu-item" eventKey="7.4">Separated link</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>

                            <Navbar.Form pullLeft>
                                <FormGroup>
                                    <FormControl className="band-search-input" type="text" placeholder="Search"/>
                                </FormGroup>{' '}
                                <Button eventKey={6} href="#tour" className="band-search-btn" bsStyle="primary"
                                        type="submit"><span
                                    className="glyphicon glyphicon-search"></span></Button>
                            </Navbar.Form>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavbarComponent;




