import React, { useState } from 'react';
import { createFormulario } from './fbFunctions'; // Importa la función createFormulario

const CreateFormulario = ({ usuarioID }) => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [preguntas, setPreguntas] = useState([{ pregunta: '', tipoPregunta: '' }]);

  const handleAddPregunta = () => {
    setPreguntas([...preguntas, { pregunta: '', tipoPregunta: '' }]);
  };

  const handleCreateFormulario = () => {
    createFormulario(titulo, descripcion, usuarioID, preguntas);
  };

  return (
    <div>
      <input type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      <input type="text" placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
      {preguntas.map((p, index) => (
        <div key={index}>
          <input type="text" placeholder="Pregunta" value={p.pregunta} onChange={(e) => {
            const newPreguntas = preguntas.slice();
            newPreguntas[index].pregunta = e.target.value;
            setPreguntas(newPreguntas);
          }} />
          <input type="text" placeholder="Tipo de Pregunta" value={p.tipoPregunta} onChange={(e) => {
            const newPreguntas = preguntas.slice();
            newPreguntas[index].tipoPregunta = e.target.value;
            setPreguntas(newPreguntas);
          }} />
        </div>
      ))}
      <button onClick={handleAddPregunta}>Agregar Pregunta</button>
      <button onClick={handleCreateFormulario}>Crear Formulario</button>
    </div>
  );
};

export default CreateFormulario;
