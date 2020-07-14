import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {
  // Definir el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, guardarPregunta] = useState(true);
  const [gastos, guardarGasto] = useState([]);
  const [gasto, agregarGasto] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false);

  // UseEfect que actualiza el restante
  useEffect(() => {
    if(creargasto){
      // Agrega el nuevo presupuesto
      guardarGasto([...gastos, gasto]);

      // Resta el presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      // Resetea a false el state que ejecuta el componente Gasto
      guardarCrearGasto(false);
    }
  }, [gasto, creargasto,gastos, restante]);

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
                  agregarGasto = {agregarGasto}
                  guardarCrearGasto = {guardarCrearGasto}
                />
              </div>
              <div className="one-half column">
                <Listado 
                  gastos = {gastos}
                />
                <ControlPresupuesto 
                  presupuesto = {presupuesto}
                  restante = { restante }
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
