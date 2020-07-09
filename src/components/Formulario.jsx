import React from 'react';

const Formulario = () => {
    return (
      <form>
        <h2>Agrega aqui tus gastos</h2>
        <div className="campo">
          <label>Nombre Gasto</label>
          <input
            type="text"
            className="u-full-width"
            placeholder="Ej. Transporte"
          />
        </div>
        <div className="campo">
          <label>Catidad Gasto</label>
          <input type="text" className="u-full-width" placeholder="Ej. 2000" />
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