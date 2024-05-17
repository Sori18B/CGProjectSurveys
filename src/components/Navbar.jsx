import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FormularioVacio from './FormularioVacio';
import FormularioRegistro from './FormularioRegistro';
import FormularioEncuesta from './FormularioEncuesta';
import Principal from  './Index';

const Navbar = () => {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container">
                        <Link className="navbar-brand" to="/">Inicio</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/vacio">Formulario vacio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/registro">Formulario de Registro</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/encuesta">Formulario de Encuesta</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/vacio" element={<FormularioVacio />} />
                    <Route path="/registro" element={<FormularioRegistro />} />
                    <Route path="/encuesta" element={<FormularioEncuesta />} />

                    <Route path="/" element={<Principal />} />
                </Routes>
            </div>
        </Router>
    );
}

export default Navbar;
