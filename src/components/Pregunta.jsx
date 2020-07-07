import React, {Fragment} from 'react';


const Pregunta = () => {
    return (
      <Fragment>
        <h2>Indica tu presupuesto</h2>
        <form>
          <input
            type="number"
            className="u-full-width"
            placeholder="Coloca tu presupuesto"
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