import React from 'react'
import './Item.css';

const item = () => {
    return (
        <div className="grid">

        <article>
            <div className="doc-item">
                <div className="col-4 row">
                    <figure className="align-self-center border">
                        <img className="picture"/>
                    </figure>
                </div>
                <div className="col-8">
                    <div>
                        <p>Imię i nazwisko</p>
                        <h1>Jan Kowalski</h1>
                    </div>
                    <div>
                        <p>Specjalizacja</p>
                        <h2>Ortopeda</h2>
                    </div>
                    <div>
                        <p>Gabinet nr:</p>
                        <h2>2</h2>
                    </div>

                </div>
            </div>
                <button type="submit" className="btn btn-primary mr-3">Edytuj</button>
                <button type="submit" className="btn btn-primary ml-3">Usuń</button>
        </article>
        </div>
    )
}

export default item;
