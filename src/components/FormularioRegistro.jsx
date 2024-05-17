import React from 'react';

const FormularioRegistro = () => {
    return (
        <div className="container mt-5">
            <h1>Nombre del Formulario</h1>
            <form>
                <div className="mb-3">
                    <label className="form-label">Pregunta 1</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Pregunta 2</label>
                    <input type="text" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
}

export default FormularioRegistro;
