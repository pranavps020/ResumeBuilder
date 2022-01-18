
import React, { useState } from 'react'
import CreateResume from './Components/CreateResume';
import EditResume from './Components/EditResume';
import ViewResume from './Components/ViewResume';
import {

  Route,
  Routes,
  Link
} from "react-router-dom";
import {
  Input, Label, FormGroup, Row, Col, Card, CardBody, CardHeader, CardTitle, Button, CardFooter, Form,
  NavItem, Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavLink
} from 'reactstrap'


function App() {



  return (
    <div className="App">
      {/* <Link to='/' >link here</Link>  */}
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Resume Builder</NavbarBrand>
        {/* <NavbarToggler onClick={this.toggle} /> */}
        {/* <Collapse isOpen={this.state.isOpen} navbar> */}
        <Nav className='w-100 justify-content-end ' navbar>
          <NavItem>
            <NavLink> <Link style={{textDecoration:'none'}} to="/">Create</Link></NavLink>
            {/* <Link to="/">Create</Link> */}
          </NavItem>
          <NavItem>
            <NavLink><Link style={{textDecoration:'none'}} to="/edit">Edit</Link></NavLink>
            {/*  */}
          </NavItem>
          <NavItem>
            <NavLink ><Link style={{textDecoration:'none'}} to="/view">View</Link></NavLink>
          </NavItem>

        </Nav>
        {/* </Collapse> */}
      </Navbar>

      <Routes>
        <Route path="/" element={<CreateResume />} />
        <Route path="/edit" element={<EditResume />} />
        <Route path="/view" element={<ViewResume />} />
      </Routes>

    </div >

  );
}

export default App;
