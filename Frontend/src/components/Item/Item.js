import React from 'react'
import './Item.css';

import Button from '../UI/Button/Button';

import Foto from '../../assets/Foto.jpg'

const item = () => {
    return (
        <article className="doc-card">
            <div className="row">
                <div className="col-4">
                    <figure className="card-img">
                        <img src={Foto} />
                    </figure>
                </div>
                <div className="col-8 align-items-center">
                    <div className="row justify-content-center margin-1">
                        <p className="margin-b-1">Imię i nazwisko</p>
                        <h2 className="">Jan Kowalski</h2>
                    </div>
                    <div className="row justify-content-center margin-1">
                        <p className="margin-b-1">Specjalizacja</p>
                        <h3>Ortopeda</h3>
                    </div>
                    <div className="row justify-content-center margin-1">
                        <p className="margin-b-1">Gabinet nr:</p>
                        <h3>2</h3>
                    </div>
                </div>
                <div className="row margin-v-4">
                    <div className="col-4 justify-content-center align-items-center">
                        <p>Terminy:</p>
                    </div>
                    <div className="col-8">
                        <div className="row padding-1">
                            <p className="weekName">Pn:</p>
                            <p className="visitHour">10-18</p>
                        </div>
                        <div className="row padding-1">
                            <p className="weekName">Wt:</p>
                            <p className="visitHour">10-12</p>
                            <p className="visitHour">14-18</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <Button color="primary" type="submit">
                Edytuj
                </Button>
                <Button color="primary" type="submit">
                Usuń
                </Button>
            </div>
        </article>
    )
}

export default item;
