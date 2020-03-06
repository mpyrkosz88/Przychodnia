import React from 'react'
import './Item.css';

import Foto from '../../assets/Foto.jpg'

const item = () => {
    return (
        <article className="doc-card">
            <div>
                <div className="row">
                    <div className="col-4">
                        <figure className="card-img">
                            <img src={Foto}/>
                        </figure>
                    </div>
                    <div className="col-8">
                        <div>
                            <p className="name">Imię i nazwisko</p>
                            <h2 className="text-nowrap">Jan Kowalski</h2>
                        </div>
                        <div className="mt-2">
                            <p className="name">Specjalizacja</p>
                            <h3>Ortopeda</h3>
                        </div>
                        <div>
                            <p className="name">Gabinet nr:</p>
                            <h5>2</h5>
                        </div>
                    </div>

                </div>
                <div className="row mx-0 my-1 border-top border-primary align-items-center py-2">
                    <div className="col-4">
                        Terminy:
                </div>
                    <div className="col-8">
                        <div className="row">
                            <p className="weekName">Pn:</p>
                            <p className="visitHour">10-18</p>
                        </div>
                        <div className="row">
                            <p className="weekName">Wt:</p>
                            <p className="visitHour">10-12</p>
                            <p className="visitHour">14-18</p>
                        </div>
                </div>
                </div>
            </div>
            <button type="submit" className="btn btn-primary mr-3">Edytuj</button>
            <button type="submit" className="btn btn-primary ml-3">Usuń</button>
        </article>
    )
}

export default item;
