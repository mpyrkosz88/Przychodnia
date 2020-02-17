import React from 'react';
import './Navigation.css';


const navigation = () => {
    return (
    <nav className="container-fluid Navigation py-2 px-4">
        <div className="row">
            <ul className="nav col justify-content-start">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Lekarze</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Terminy</a>
                </li>
            </ul>
            <ul className="nav col justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Signup</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Login</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default navigation;