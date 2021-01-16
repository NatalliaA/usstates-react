import React from 'react';

export const Usstate = (props)=>(    
    <div className='state-container'>
        <h2>{props.name}</h2>
        <p>{props.abbr}</p>
        <p>{props.capital}</p>
    </div>
);