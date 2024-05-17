import { useState } from 'react';
import 'bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Index.css';

function Principal() {
  return (
    <div className="bg-blue-100 min-h-screen p-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h1 className="text-xl font-bold mb-4 bg-primary text-white text-center">Formularios</h1>
            <br />
            <div className="flex items-center mb-4">
    <button className="bg-blue-500 text-white px-3 py-1 rounded-lg flex items-center mr-2">
        <i className="fa-solid fa-file-circle-plus"></i> Nuevo formulario
    </button>
    <button className="bg-blue-500 text-white px-3 py-1 rounded-lg flex items-center">
        <i className="fa-solid fa-file-circle-plus"></i> Nuevo formulario
    </button>
</div>

            <h2 className="font-semibold mb-2">Explorar plantillas</h2>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-green-200 p-4 rounded-lg">
                    <img src="https://placehold.co/100x50" alt="Empty Form Template" />
                    Formulario vacio
                </div>
                <div className="bg-purple-200 p-4 rounded-lg">
                    <img src="https://placehold.co/100x50" alt="Registration Form Template" />
                    Formularios de registro
                </div>
                <div className="bg-blue-200 p-4 rounded-lg">
                    <img src="https://placehold.co/100x50" alt="Survey and Evaluation Template" />
                    Cuestionarios y evaluaciones
                </div>
            </div>
            <div className="flex justify-around mb-4">
                <button className="bg-zinc-300 px-3 py-1 rounded-lg">Recientes</button>
                <button className="bg-zinc-300 px-3 py-1 rounded-lg">Mis formularios</button>
                <button className="bg-zinc-300 px-3 py-1 rounded-lg">Formularios contestados</button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="bg-zinc-200 p-4 rounded-lg">
                    <img src="https://placehold.co/100x50" alt="Untitled Form Preview" />
                    <p>Formulario sin titulo</p>
                    <p>0 respuestas</p>
                </div>
            </div>
        </div>
    </div>
)
}

export default Principal;
