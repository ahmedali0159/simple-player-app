import React from 'react';
import './Cart.css';

const cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, info) => total + parseInt(info.salary), 0);
    

    
    return (
        <div className="hired">
            <h4>Hire Summary</h4>
            <p>players Hired: {cart.length}</p>
            <ul>
                {
                    cart.map(player => <li>{player.name} ${player.salary}</li>)
                }
            </ul>
            <h6>Total Budget: ${total}</h6>
        </div>
    );
};

export default cart;