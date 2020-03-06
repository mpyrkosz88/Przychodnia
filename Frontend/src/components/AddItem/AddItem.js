import React from 'react'
import './Item.css';

import addImage from '../../assets/Add.jpg'

const addItem = () => {
    return (
        <article className="doc-card">
            <div>
                <div className="row">
                    <div className="col-4">
                        <figure className="card-img">
                            <input type="image" id="image" alt="addImage" src={addImage} />
                        </figure>
                    </div>
                    <div className="col-8">
                        <div>
                            <label for="name">Imię i nazwisko</label>
                            <input type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Name" />
                        </div>
                        <div>
                            <label for="inlineFormCustomSelect">Specjalizacja</label>
                            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                <option selected>Internista</option>
                                <option value="1">Pediatra</option>
                                <option value="2">Ortopeda</option>
                                <option value="3">Chirurg</option>
                            </select>
                        </div>
                        <div>
                            <label for="inlineFormCustomSelect">Gabinet nr</label>
                            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                <option selected>1</option>
                                <option value="1">2</option>
                                <option value="2">3</option>
                                <option value="3">4</option>
                            </select>
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
                    </div>
                </div>
            </div>
            <button type="submit" className="btn btn-primary mr-3">Edytuj</button>
            <button type="submit" className="btn btn-primary ml-3">Usuń</button>
        </article>
    )
}

export default addItem;
