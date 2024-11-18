import React from 'react';
import { Link } from "react-router-dom";
import LogoImage from '../../logo1.png';
import './Navbar.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg a navbar-light" id="Nav1">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={LogoImage} alt="Waleedcodes Logo" className="logoStyle" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse align-middle" id="navbarNav">
                    <ul className="navbar-nav ms-auto nav_ul align-items-center">
                        <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle larger-about" to="/Product" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Product
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                             <li><Link className="dropdown-item" to="/Product">InsureITPro</Link></li>
                                <li><Link className="dropdown-item" to="/Product">InvestAI</Link></li>
                                <li><Link className="dropdown-item" to="/Product">AvanceTest</Link></li>
                                <li><Link className="dropdown-item" to="/Product">AvanceEdu Pro</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle larger-about" to="/AvanceSolution" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Solution
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/AvanceSolution">Solutions</Link></li>
                                <li><Link className="dropdown-item" to="/Infrastructure">Infrastructure</Link></li>
                                <li><Link className="dropdown-item" to="/ERPSolution">Custom Software Development</Link></li>
                                <li><Link className="dropdown-item" to="/AvanceSolution">PMO Outsourcing</Link></li>
                                <li><Link className="dropdown-item" to="/AvanceSolution">Call Center Setup & Operations</Link></li>
                                <li><Link className="dropdown-item" to="/ERPSolution">Customized ERP Solutions</Link></li>
                                <li><Link className="dropdown-item" to="/AvanceSolution">Digital Marketing</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle larger-about" to="/Trainings" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Training
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/Trainings">Trainings</Link></li>
                                <li><Link className="dropdown-item" to="/Trainings">On Demand IT/Software Trainings</Link></li>
                                <li><Link className="dropdown-item" to="/Trainings">Compliance at Workplace</Link></li>
                                <li><Link className="dropdown-item" to="/Trainings">Technical Analysis for Capital Markets</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/DiscoverAvance">Discover Avance</Link>
                        </li>

                        <Link className="nav-link larger-about" to="/GetFreeQuote">
                            <button
                                type="button"
                                className="btn1 mx-2"
                                style={{
                                    borderRadius: '30px',
                                    backgroundColor: '#5da8f8',
                                    color: 'white',
                                    border: 'none',
                                    padding: '10px 20px',
                                    paddingLeft: '20px',
                                    fontSize: '18px',
                                    transition: 'background-color 0.3s ease',
                                }}
                                onMouseOver={(e) => e.target.style.backgroundColor = '#346ef6'}
                                onMouseOut={(e) => e.target.style.backgroundColor = '#5da8f8'}
                            >
                                Get Free Quotes
                            </button>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
