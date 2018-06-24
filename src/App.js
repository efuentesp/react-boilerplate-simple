import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import { MensajeSaludo } from "./MensajeSaludo";
import { FormaSaludo } from "./FormaSaludo";

export class App extends Component {
  state = {
    nombre: this.props.nombre
  };

  alOprimirBoton = e => {
    const nombre = e.target.nombre.value;
    e.preventDefault();
    if (typeof nombre === "string" && nombre.length > 0) {
      this.setState({
        nombre
      });
      e.target.nombre.value = "";
    }
  };

  manejarNuevoNombre = nombre => {
    this.setState({
      nombre
    });
  };

  render() {
    const { nombre } = this.state;
    const { mensaje } = this.props;
    return (
      <Grid>
        <MensajeSaludo nombre={nombre} mensaje={mensaje} />
        <FormaSaludo alObtenerNuevoNombre={this.manejarNuevoNombre} />
      </Grid>
    );
  }
}

App.defaultProps = {
  nombre: "React",
  mensaje: "Mensaje por default"
};

export default App;
