import React, {Fragment, useState} from 'react';


const Pregunta = () => {

    // Definir el state
    const [ cantidad, setCantidad ] = useState(0);
    const [ error, setError] = useState(false);

    //funcion que lee el presupuesto
    const definirPresupuesto = e => {
      setCantidad( parseInt(e.target.value, 10))
    }

    // Submit para definir el presupuesto
    const agregarPresupuesto = (e) => {
      e.preventDefault();

      // Validar
      if(cantidad < 1 || cantidad === NaN) {
        setError(true);
        return;
      }
      // Si se pasa la validación
      setError(false);
    };

    return (
      <Fragment>
        <h2>Indica tu presupuesto</h2>
        { error ? 'Error' : null}
        <form
          onSubmit= {agregarPresupuesto}
        >
          <input
            type="number"
            className="u-full-width"
            placeholder="Coloca tu presupuesto"
            onChange = {definirPresupuesto}
          />
          <button
            className="button-primary u-full-width"
            > Definir presupuesto
          </button>
            
        </form>
      </Fragment>
    );
}
 
export default Pregunta;