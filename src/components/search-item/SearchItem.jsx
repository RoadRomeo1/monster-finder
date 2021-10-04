import React from 'react'
import './search-box.style.css';

export function SearchItem({placeholder, ChangeHandler}) {
    return (
        <div className="container">
                <input type="search" className="search" placeholder={placeholder} onChange={ChangeHandler} autoFocus />
        </div>
    )
}
