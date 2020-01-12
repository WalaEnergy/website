import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'

import logo from '../../resources/images/logo.png'

import './WaNav.css'

export default class WaNav extends Component {
	render() {
		return(
			<Container>
			  <Navbar collapseOnSelect expand="lg" sticky="top">
			    <Navbar.Brand href="/">WALA</Navbar.Brand>
			    <Navbar.Collapse id="responsive-navbar-nav">
			      <Nav className="mr-auto">
{/*			        <Nav.Link href="">Features</Nav.Link>
			        <Nav.Link href="">Pricing</Nav.Link>
			        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
			          <NavDropdown.Item href="">Action</NavDropdown.Item>
			          <NavDropdown.Item href="">Another action</NavDropdown.Item>
			          <NavDropdown.Item href="">Something</NavDropdown.Item>
			          <NavDropdown.Divider />
			          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
			        </NavDropdown>*/}
			      </Nav>
			      <Nav>
			        <Nav.Link href="/about">About</Nav.Link>
			        <Nav.Link eventKey={2} href="/careers">Careers</Nav.Link>
			      </Nav>
			   	</Navbar.Collapse>
  			</Navbar>
  		</Container>
  	)
	}
}
