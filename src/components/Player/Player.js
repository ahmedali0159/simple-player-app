
import React, { useState } from 'react';
import fakeData from '../../fakeData/data.json';
import Info from '../Information/Info';
import Cart from '../Cart/Cart';
import './Player.css';

const Player = () => {
    const Player = fakeData;
    const [info, setInfo] = useState(Player);
    const [cart, setCart] = useState([]);

    const handleAddInfo = (info) =>{
        const newCart = [...cart,info]
        setCart(newCart);
    }
    return (
        <div className="player-container">
            <div className="info-container">
                {
                info.map(info => <Info handleAddInfo = {handleAddInfo} info={info}></Info>)
                }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
          
        </div>
    );
};

export default Player;