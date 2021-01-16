import React from 'react';
import './usstate.css'

export const Usstate = (props)=>(    
    <div className='usstate-container'>
        <p className='usstate-name'>{props.name}</p>
        <p>{props.abbr}</p>
        <p>{props.nickname}</p>        
        <p>{props.capital}</p>        
        <p>{props.population}</p>       
        <p>{props.populationRank}</p>
        <p>{props.area}</p>
        <p>{props.areaRank}</p>
    </div>
);