import React, { useState } from 'react';
import { submitRespuestas } from './fbFunctions'; // Importa la función submitRespuestas

const SubmitRespuestas = ({ formularioID, usuarioID }) => {
  const [respuestas, setRespuestas] = useState([{ preguntaID: '', respuesta: '' }]);

  const handleAddRespuesta = () => {
    setRespuestas([...respuestas, { preguntaID: '', respuesta: '' }]);
  };

  const handleSubmitRespuestas = () => {
    submitRespuestas(formularioID, usuarioID, respuestas);
  };

  return (
    <div>
      {respuestas.map((r, index) => (
        <div key={index}>
          <input type="text" placeholder="Pregunta ID" value={r.preguntaID} onChange={(e) => {
            const newRespuestas = respuestas.slice();
            newRespuestas[index].preguntaID = e.target.value;
            setRespuestas(newRespuestas);
          }} />
          <input type="text" placeholder="Respuesta" value={r.respuesta} onChange={(e) => {
            const newRespuestas = respuestas.slice();
            newRespuestas[index].respuesta = e.target.value;
            setRespuestas(newRespuestas);
          }} />
        </div>
      ))}
      <button onClick={handleAddRespuesta}>Agregar Respuesta</button>
      <button onClick={handleSubmitRespuestas}>Enviar Respuestas</button>
    </div>
  );
};

export default SubmitRespuestas;
