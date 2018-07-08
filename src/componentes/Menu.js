import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";

export class Menu extends Component {
  render() {
    return (
      <Navbar>
        <Nav>
          <NavItem
            componentClass={Link}
            href="/"
            to="/"
            active={window.location.pathname === "/"}
          >
            Inicio
          </NavItem>
          <NavItem
            componentClass={Link}
            href="/saludar"
            to="/saludar"
            active={window.location.pathname === "/saludar"}
          >
            Saludar
          </NavItem>
          <NavItem
            componentClass={Link}
            href="/peliculas"
            to="/peliculas"
            active={window.location.pathname === "/peliculas"}
          >
            Películas
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Menu;
