import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import { MensajeSaludo } from "./MensajeSaludo";
import { FormaSaludo } from "./FormaSaludo";

export class App extends Component {
  state = {
    nombre: this.props.nombre,
    mensaje: this.props.mensaje
  };

  manejarNuevoSaludo = datos => {
    this.setState(datos);
  };

  render() {
    const { nombre, mensaje } = this.state;
    return (
      <Grid>
        <MensajeSaludo nombre={nombre} mensaje={mensaje} />
        <FormaSaludo alObtenerNuevoSaludo={this.manejarNuevoSaludo} />
      </Grid>
    );
  }
}

App.defaultProps = {
  nombre: "React",
  mensaje: "Mensaje por default"
};

export default App;
