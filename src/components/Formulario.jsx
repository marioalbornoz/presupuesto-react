import React, { useState } from 'react';

const Formulario = () => {

    // Definir state de nombre del gasto
    const [nombre, guardarNombre ] = useState('');


    //Guardar gastos
    const agregarGastos = e => {
        e.preventDefault();
        console.log("guardando gastos");

        // Validar

        // Construir gasto

        // Pasar el gasto al componente principal
        
        // Resetear el formulario
    }

    const [cantidad, guardarCantidad ] = useState(0)
    return (
      <form
        onSubmit = {agregarGastos}
      >
        <h2>Agrega aqui tus gastos</h2>
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
 
export default Formulario;