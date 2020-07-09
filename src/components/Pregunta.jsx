import React, { Fragment, useState } from "react";
import Error from "./Error";

const Pregunta = ({guardarPresupuesto, guardarRestante, guardarPregunta}) => {
  // Definir el state
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  //funcion que lee el presupuesto
  const definirPresupuesto = (e) => {
    setCantidad(parseInt(e.target.value, 10));
  };

  // Submit para definir el presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    // Validar
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    // Si se pasa la validación
    setError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    guardarPregunta(false);
  };

  return (
    <Fragment>
      <h2>Indica tu presupuesto</h2>
      {error ? <Error mensaje="El presupuesto es incorrecto." /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <button className="button-primary u-full-width">
          {" "}
          Definir presupuesto
        </button>
      </form>
    </Fragment>
  );
};
 
export default Pregunta;