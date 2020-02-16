import React from 'react';
import './Form.css';

const form = () => {
    return (
        <div className='form-container'>

            <form>
                <div className="form-group">
                    {/* <label for="name">Imię i nazwisko</label> */}
                    <input type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Name" />
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="form-group">
                    <label className="mr-sm-2 sr-only" for="inlineFormCustomSelect">Specjalizacja</label>
                    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                        <option selected>Internista</option>
                        <option value="1">Pediatra</option>
                        <option value="2">Ortopeda</option>
                        <option value="3">Chirurg</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary mr-3">Dodaj</button>
                <button type="submit" className="btn btn-primary ml-3">Anuluj</button>
            </form>
        </div>
    )
}

export default form;
