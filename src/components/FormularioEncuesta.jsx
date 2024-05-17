import React, { useState } from 'react';

const FormularioEncuesta = () => {
    const [preguntaActual, setPreguntaActual] = useState(1);

    const handleSiguiente = () => {
        // Lógica para cambiar a la siguiente pregunta
        setPreguntaActual(preguntaActual + 1);
    }

    return (
        <div className="container mt-5">
            <h1>Nombre del Formulario</h1>
            <form>
                {preguntaActual === 1 && (
                    <div className="mb-3">
                        <label className="form-label">Pregunta 1</label>
                        <input type="text" className="form-control" />
                    </div>
                )}
                {preguntaActual === 2 && (
                    <div className="mb-3">
                        <label className="form-label">Pregunta 2</label>
                        <input type="text" className="form-control" />
                    </div>
                )}
                <button type="button" className="btn btn-primary" onClick={handleSiguiente}>Siguiente</button>
            </form>
        </div>
    );
}

export default FormularioEncuesta;
