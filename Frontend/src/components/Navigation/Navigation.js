import React from 'react';

const navigation = () => {
    return (
    <nav class="container-fluid">
        <div class="row">
            <ul class="nav col justify-content-start">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Dodaj termin</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Dodaj lekarza</a>
                </li>
            </ul>
            <ul class="nav col justify-content-end">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Signup</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Login</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default navigation;