import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import './Info.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Info = (props) => {
   // console.log(props);
   const {image, name, Club, Nationality, salary} = props.info;
    return (
        <div className="player-info">
            <img src={image} alt=""/>
        <div>    
            <h2 className="player-name">{name}</h2>
            <h3>Club: {Club}</h3>
            <h4>Nationality: {Nationality}</h4>
        
            <h4>Salary: ${salary}</h4>
            <br/>
            <button className="btn btn-warning btn-lg cursor" onClick={() => props.handleAddInfo(props.info)}>
                 <FontAwesomeIcon icon={faFutbol} /> Hire Super Player</button>
        </div>    
        </div>
    );
};

export default Info;