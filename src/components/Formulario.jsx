import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ({agregarGasto,guardarCrearGasto}) => {

    // Definir state de nombre del gasto
    const [nombre, guardarNombre ] = useState('');
    // State de la cantidad ingresada
    const [cantidad, guardarCantidad ] = useState(0);

    const [ error, guardarError] = useState(false);


    //Guardar gastos
    const agregarGastos = e => {
        e.preventDefault();

        // Validar
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim()===''){
          guardarError(true);
          return;
        }
        guardarError(false);
        // Construir gasto
        const gasto = {
          nombre,
          cantidad,
          id: shortid.generate(),
        };
        // Pasar el gasto al componente principal
        agregarGasto(gasto);
        guardarCrearGasto(true);
        
        // Resetear el formulario
        guardarNombre('');
        guardarCantidad(0);
    }

    return (
      <form
        onSubmit = {agregarGastos}
      >
        <h2>Agrega aqui tus gastos</h2>
        {error ? (<Error 
          mensaje="Error, Verifique que haya llenado correctamente los campos"  
        />) : null
        }
        <div className="campo">
          <label>Nombre Gasto</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="Ej. Transporte"
            value={nombre}
            onChange={(e) => guardarNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label>Catidad Gasto</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="Ej. 2000"
            value={cantidad}
            onChange={(e) => guardarCantidad(parseInt(e.target.value, 10))}
          />
        </div>
        <input
          type="submit"
          className="u-full-width button-primary"
          value="Agregar Gasto"
        />
      </form>
    );
}

Formulario.propTypes = {
  agregarGasto: PropTypes.func.isRequired,
  guardarCrearGasto: PropTypes.func.isRequired
}
 
export default Formulario;