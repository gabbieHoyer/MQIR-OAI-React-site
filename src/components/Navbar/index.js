import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Dropdown, Container, NavItem, NavLink } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import style from './style.css'
import '../../App.css'
import ucsf from '../../assets/logo.png'


const Navigation = () => {
    // const navbar = {backgroundColor: '#052049 !important'};


    return  (
        <>
        {/* fixed='top' */}
            <Navbar collapseOnSelect position='sticky' expand='sm' className='color-nav' style={{width:'100%'}}>
                             {/* <a className="navbar-brand"> 
                    UCSF
                    <img src="src/assets/ucsf_logo.svg" width="30" height="30" alt=""/> 
                 </a>  */}
                <span > UCSF </span>
                <Container className="ms-auto">
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' className='link-color'/>
                    <Navbar.Collapse id='responsive-navbar-nav' className='link-color'>
                        <Nav>
                            <Nav.Link href='/' className='link-color'> Login </Nav.Link>
                            <Nav.Link href='/OAI-Info' className='link-color'> OAI Info </Nav.Link>
                            {/* <Nav.Link href='/Interpreter'> Interpreter </Nav.Link> */}
                            <Dropdown as={NavItem} style={{color:'white'}}>
                                <Dropdown.Toggle as={NavLink}/>
                                <Dropdown.Menu className="large-dropdown-menu">
                                    <div className='dropdown-menu-wrapper'>
                                        <div>
                                            <u1>
                                                <li className='dropdown-header'>
                                                    <div className='menu-icon-wrapper'>
                                                        <div><i className='col-2 fa fa-2x fa-graduation-cap main-theme-color'/></div>
                                                        <div><NavDropdown.Item href="#schools"><b>Schools</b></NavDropdown.Item></div>
                                                    </div>
                                                </li>
                                                <li className="job-sub-tabs"><NavDropdown.Item href="#example-1">Example-1</NavDropdown.Item></li>
                                                <li className="job-sub-tabs"><NavDropdown.Item href="#example-2">Example-2</NavDropdown.Item></li>
                                            </u1>
                                        </div>

                                        <div>
                                            <u1>
                                                <li className='dropdown-header'>
                                                    <div className='menu-icon-wrapper'>
                                                        <div><i className='col-2 fa fa-2x fa-graduation-cap main-theme-color'/></div>
                                                        <div><NavDropdown.Item href="#science"><b>Science</b></NavDropdown.Item></div>
                                                    </div>
                                                </li>
                                                <li className="job-sub-tabs"><NavDropdown.Item href="#example-1">Example-1</NavDropdown.Item></li>
                                                <li className="job-sub-tabs"><NavDropdown.Item href="#example-2">Example-2</NavDropdown.Item></li>
                                            </u1>
                                        </div>
                                    </div>

                                </Dropdown.Menu>
                            </Dropdown>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;