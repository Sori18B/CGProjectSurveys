import React, { useState } from 'react';
import { submitRespuestasCues } from '../Functions/fbFunctions'; 

const FormularioEncuesta = () => {
    const [usuarioID, setUsuarioID] = useState('');
    const [respuestas, setRespuestas] = useState(Array(5).fill(''));
    const [mostrarAlerta, setMostrarAlerta] = useState(false);

    const preguntas = [
        'Pregunta 1: ¿Cuál es el animal más grande de la Tierra?',
        'Pregunta 2: ¿Cuál es el animal más pequeño del mundo?',
        'Pregunta 3: ¿Qué animal tiene la lengua más larga?',
        'Pregunta 4: ¿Qué animal puede dormir parado?',
        'Pregunta 5: ¿Qué animal es considerado el más venenoso del planeta?',
    ];

    const handleChangeRespuesta = (index, value) => {
        const nuevasRespuestas = [...respuestas];
        nuevasRespuestas[index] = value;
        setRespuestas(nuevasRespuestas);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validar que todas las respuestas tengan un valor
        if (respuestas.some(respuesta => respuesta === '' || respuesta === undefined)) {
            console.error('Por favor, completa todas las respuestas antes de enviar.');
            return;
        }

        try {
            await submitRespuestasCues(usuarioID, respuestas);
            // Limpia los campos después de enviar
            setUsuarioID('');
            setRespuestas(Array(5).fill(''));
            // Muestra la alerta
            setMostrarAlerta(true);
            console.log('Respuestas del cuestionario enviadas correctamente');
        } catch (error) {
            console.error('Error al enviar respuestas del cuestionario:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Formulario de Encuesta</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <b>Instrucciones: Responde las siguientes preguntas de la encuesta.</b>
                </label>
                <div className="mb-3">
                    <label htmlFor="usuarioID" className="form-label">Ingresa tu ID de usuario:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="usuarioID"
                        value={usuarioID}
                        onChange={(e) => setUsuarioID(e.target.value)}
                        required
                    />
                </div>
                {preguntas.map((pregunta, index) => (
                    <div key={index} className="mb-3">
                        <label className="form-label">{pregunta}</label>
                        <input
                            type="text"
                            className="form-control"
                            value={respuestas[index]}
                            onChange={(e) => handleChangeRespuesta(index, e.target.value)}
                            required
                        />
                    </div>
                ))}
                {mostrarAlerta && (
                    <div className="alert alert-success" role="alert">
                        Respuestas del cuestionario enviadas correctamente
                    </div>
                )}
                <button type="submit" className="btn btn-primary">Enviar respuestas</button>
            </form>
        </div>
    );
}

export default FormularioEncuesta;
