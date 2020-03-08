import React from 'react'
import Form from '../Form/Form';
import Item from '../Item/Item';
import AddItem from '../AddItem/AddItem';

import './Container.css'; 

const container = () => {
    return (

        <div >
            <button className="btn btn-primary m-3">Dodaj lekarza</button>
            <div className="grid">
            <AddItem/>
            {/* <Item /> */}
            </div>
        </div>
    )
}

export default container;

// <ul className="doc-item-list">
// <li className="doc-item">
//     <Form />

// 
// <Item />
// <Item />
// <Item />
// </li>
// <li className="doc-item">
//    <Form />

// </li>
// <li className="doc-item">
//    <Form />

// </li>
// <li className="doc-item">
   

// </li>
// </ul>