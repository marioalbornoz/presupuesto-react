import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';

function App() {
  // Definir el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, guardarPregunta] = useState(true);
  const [gastos, guardarGasto] = useState([]);

  // Cuando agregamos un nuevo gasto
  const agregarNuevoGasto = (gasto) => {
    guardarGasto([...gastos, gasto]);
  };


  console.log(restante);
  console.log(presupuesto);
  return (
    <div className="container">
      <header className="App-header">
        <h1>Presupuesto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarpregunta ? (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              guardarPregunta={guardarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario 
                  agregarNuevoGasto = {agregarNuevoGasto}
                />
              </div>
              <div className="one-half column">2</div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
