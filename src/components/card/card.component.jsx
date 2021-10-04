import React from 'react';
import './card.style.css';

 function Card(props) {
    
    return (
        <>
        <div className="card-container">
        <img src={`https://robohash.org/${props.mon.id}?set=set2&size=180x180`} alt={`monster-${props.mon.id}`}/>
        <h2>{props.mon.name}</h2>
        <p>{props.mon.email}</p>
        </div>
        </>
    )
}

export {
    Card
}
