import React, { useState } from 'react';
import { createFormulario } from '../Functions/fbFunctions'; // Asegúrate de usar la ruta correcta

const FormularioVacio = () => {
    const [tituloFormulario, setTituloFormulario] = useState('');
    const [descripcionFormulario, setDescripcionFormulario] = useState('');
    const [usuarioID, setUsuarioID] = useState('');
    const [preguntas, setPreguntas] = useState([]);
    const [nuevaPregunta, setNuevaPregunta] = useState('');
    const [nuevaRespuesta, setNuevaRespuesta] = useState('');
    const [guardado, setGuardado] = useState(false);

    const handleGuardarTitulo = (e) => {
        setTituloFormulario(e.target.value);
    };

    const agregarPregunta = () => {
        const nuevasPreguntas = [...preguntas, { pregunta: nuevaPregunta, respuesta: nuevaRespuesta }];
        setPreguntas(nuevasPreguntas);
        setNuevaPregunta('');
        setNuevaRespuesta('');
    }

    const handleEliminarPregunta = (index) => {
        const nuevasPreguntas = [...preguntas];
        nuevasPreguntas.splice(index, 1);
        setPreguntas(nuevasPreguntas);
    }

    const handleGuardarFormulario = async () => {
        await createFormulario(tituloFormulario, descripcionFormulario, usuarioID, preguntas);
        setGuardado(true);
        setTituloFormulario('');
        setDescripcionFormulario('');
        setUsuarioID('');
        setPreguntas([]);
    }

    return (
        <div className="container mt-5">
            <h3>Creación de un nuevo formulario</h3>
            <div className="mb-3">
                <label htmlFor="tituloFormulario" className="form-label">Ingresa el titulo del formulario</label>
                <input
                    type="text"
                    className="form-control"
                    value={tituloFormulario}
                    onChange={handleGuardarTitulo}
                    placeholder="Título del Formulario"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="descripcionFormulario" className="form-label">Ingresa la descripción del formulario</label>
                <input
                    type="text"
                    className="form-control"
                    id="descripcionFormulario"
                    value={descripcionFormulario}
                    onChange={(e) => setDescripcionFormulario(e.target.value)}
                    placeholder="Descripción"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="usuarioID" className="form-label">Ingresa tu matricula</label>
                <input
                    type="text"
                    className="form-control"
                    id="usuarioID"
                    value={usuarioID}
                    onChange={(e) => setUsuarioID(e.target.value)}
                    placeholder="Usuario ID"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="nuevaPregunta" className="form-label">Agregar Nueva Pregunta</label>
                <input
                    type="text"
                    className="form-control"
                    id="nuevaPregunta"
                    value={nuevaPregunta}
                    onChange={(e) => setNuevaPregunta(e.target.value)}
                    placeholder="Pregunta"
                />
                <input
                    type="text"
                    className="form-control mt-2"
                    id="nuevaRespuesta"
                    value={nuevaRespuesta}
                    onChange={(e) => setNuevaRespuesta(e.target.value)}
                    placeholder="Respuesta"
                />
                <button className="btn btn-primary mt-2" onClick={agregarPregunta}>Agregar Pregunta</button>
            </div>
            {preguntas.map((pregunta, index) => (
                <div key={index} className="mb-3">
                    <label className="form-label">Pregunta {index + 1}</label>
                    <input
                        type="text"
                        className="form-control"
                        value={pregunta.pregunta}
                        onChange={(e) => {
                            const nuevasPreguntas = [...preguntas];
                            nuevasPreguntas[index].pregunta = e.target.value;
                            setPreguntas(nuevasPreguntas);
                        }}
                    />
                    <label className="form-label mt-2">Respuesta</label>
                    <input
                        type="text"
                        className="form-control"
                        value={pregunta.respuesta}
                        onChange={(e) => {
                            const nuevasPreguntas = [...preguntas];
                            nuevasPreguntas[index].respuesta = e.target.value;
                            setPreguntas(nuevasPreguntas);
                        }}
                    />
                    <button className="btn btn-danger mt-2" onClick={() => handleEliminarPregunta(index)}>Eliminar</button>
                </div>
            ))}
            {guardado && (
                <div className="alert alert-success" role="alert">
                    Formulario guardado en Firebase
                </div>
            )}
            {!guardado && preguntas.length > 0 && (
                <button className="btn btn-success mt-2" onClick={handleGuardarFormulario}>Guardar Formulario</button>
            )}
        </div>
    );
}

export default FormularioVacio;
