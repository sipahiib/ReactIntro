import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

import CartSummary from "./CartSummary";

// const Navi = (props) => {

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Foods</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="form1">Form Aç</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="form2">Form2 Aç</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <CartSummary
              removeFromCart={this.props.removeFromCart}
              cart={this.props.cart}
            />
          </Nav>
        </Navbar>
      </div>
    );
  }
}
