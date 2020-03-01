import React from 'react'
import Form from '../Form/Form';
import Item from '../Item/Item';

import './Container.css'; 

const form = () => {
    return (

        <div>
            <button className="btn btn-primary m-3">Dodaj lekarza</button>
            <ul className="doc-item-list">
                <li className="doc-item">
                    <Form />

                </li>
                <li className="doc-item">
                   <Form />

                </li>
                <li className="doc-item">
                   <Form />

                </li>
                <li className="doc-item">
                   

                </li>
            </ul>
            <Item />
        </div>
    )
}

export default form;
