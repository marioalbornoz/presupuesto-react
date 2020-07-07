import React, {Fragment, useState} from 'react';


const Pregunta = () => {

    // Definir el state
    const [ cantidad, setCantidad ] = useState(0);

    //funcion que lee el presupuesto
    const definirPresupuesto = e => {
      setCantidad( parseInt(e.target.value, 10))
    }

    // Submit para definir el presupuesto
    const agregarPresupuesto = e => {
      e.preventDefsult();

      // Validar


      // Si se pasa la validación
    }

    return (
      <Fragment>
        <h2>Indica tu presupuesto</h2>
        <form
          onSubmit= {agregarPresupuesto}
        >
          <input
            type="number"
            className="u-full-width"
            placeholder="Coloca tu presupuesto"
            onChange = {definirPresupuesto}
          />
          <input
            type="button"
            value="Definir presupuesto"
            className="button-primary u-full-width"
          />
        </form>
      </Fragment>
    );
}
 
export default Pregunta;