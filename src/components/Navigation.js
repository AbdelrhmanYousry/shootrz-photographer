import React, { useState, useEffect } from "react";
import {Link} from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "../images/logoApp.svg"


import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  UncontrolledDropdown

} from "reactstrap";

import { isLoggedIn} from "../services/auth"
const Navigation = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const toggle = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    if(localStorage.getItem('photographerName'))
      setName(localStorage.getItem('photographerName'))
  },[])
  return (
    <div className="navigation">
      
      <Navbar light expand="md">
          <Link to="/app" className="navbar-brand">
              <img src={logo} alt="shootrz" />
          </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            {
              isLoggedIn() ?  <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <span className="name">{name}</span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem><Link to="/app/events/">My Events</Link></DropdownItem>
                  <DropdownItem>Edit Profile</DropdownItem>
                  <DropdownItem>Logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> :  
                <NavItem>
                  {/* <Link to="/app/login/" activeClassName="active">
                    Login
                  </Link> */}
              </NavItem>
              
            }
            
          </Nav>
        </Collapse>
      </Navbar>
      
    </div>
  );
};

export default Navigation;

