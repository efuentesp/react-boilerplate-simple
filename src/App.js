import React, { Component } from "react";
import { Grid } from "react-bootstrap";

export class App extends Component {
  render() {
    const { nombre, mensaje } = this.props;
    return (
      <Grid>
        <h1>Hola {nombre}!</h1>
        <p>{mensaje}</p>
      </Grid>
    );
  }
}

App.defaultProps = {
  nombre: "React",
  mensaje: "Mensaje por default"
};

export default App;
