import React, { useState } from 'react';
import { submitRespuestas } from '../Functions/fbFunctions'; // Importa la función submitRespuestas

const FormularioRegistro = () => {
    const [usuarioID, setUsuarioID] = useState('');
    const [respuestas, setRespuestas] = useState(Array(8).fill(''));
    const [mostrarAlerta, setMostrarAlerta] = useState(false);

    const preguntas = [
        'Pregunta 1: ¿Cuál es tu nombre completo?',
        'Pregunta 2: ¿Cuál es tu fecha de nacimiento?',
        'Pregunta 3: ¿Cuál es tu dirección de correo electrónico?',
        'Pregunta 4: ¿Cuál es tu número de teléfono?',
        'Pregunta 5: ¿Cuál es tu dirección actual?',
        'Pregunta 6: ¿Cuál es tu ocupación actual?',
        'Pregunta 7: ¿Cuál es tu estado civil?',
        'Pregunta 8: ¿Cuál es tu género?',
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
            await submitRespuestas(usuarioID, respuestas);
            // Limpia los campos después de enviar
            setUsuarioID('');
            setRespuestas(Array(8).fill(''));
            // Muestra la alerta
            setMostrarAlerta(true);
            console.log('Respuestas enviadas correctamente');
        } catch (error) {
            console.error('Error al enviar respuestas:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Formulario de Registro</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <b>Instrucciones: A continuación, encontrarás una serie de preguntas. Por favor, responde cada una de ellas de manera clara y precisa.</b>
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
                        Respuestas enviadas correctamente
                    </div>
                )}
                <button type="submit" className="btn btn-primary">Enviar respuestas</button>
            </form>
        </div>
    );
};

export default FormularioRegistro;
