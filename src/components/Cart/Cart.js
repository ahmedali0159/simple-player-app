import React from 'react';
import './Cart.css';

const cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, info) => total + parseInt(info.salary), 0);
    

    
    return (
        
        <div className="hired">
              <h4>Hired Summary</h4>
            <h6>player Hired: {cart.length}</h6>
            <ul>
                {
                    cart.map(player => <li className="name-salary">{player.name} ${player.salary}</li>)
                }
            </ul>
            <h6>Total Budget: ${total}</h6>
        </div>
    );
};

export default cart;