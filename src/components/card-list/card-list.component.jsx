import React from 'react'
import  './card-list.style.css';
import { Card } from '../card/card.component'; 

 function CardList(props) {
    let monsters = props.mons.map(mon => (<Card key={mon.id} mon={mon}/>))

    return (
        <>
        <div className="card-list">{monsters}</div>
        </>
    )
}

export{
    CardList
}