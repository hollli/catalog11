import React, {useState} from 'react';
import {RiShoppingCartFill} from "react-icons/ri";
import Order from './Order';

const showOrders = (props) => {
    let summa = 0
    props.orders.forEach(el => {
        if (el.price !== "Free-to-play") {
            summa += Number.parseFloat(el.price);
        }
    });
    return (
        <div>
            {props.orders.map(el => (
                <Order key={el.id} item={el} onDelete={props.onDelete}/>
            ))}
            <p className='summa'>Price: {new Intl.NumberFormat().format(summa)}$</p>
        </div>
    )
}
const showNothing = () => {
    return (
        <div className='empty'>
            <h2>Cart is empty</h2>
        </div>
    )
}


function Header(props) {
    let [cartOpen, setCartOpen] = useState(false);

    return (
        <header>
            <div>
                <span className={'logo'}></span>
                <ul className={'nav'}>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Profile</li>
                    <RiShoppingCartFill
                        onClick={() => setCartOpen(!cartOpen)}
                        className={`shop-cart-button ${cartOpen ? 'active' : ''}`}
                    />
                    {cartOpen && (
                        <div className='shop-cart'>
                            {props.orders.length > 0 ?
                                showOrders(props) : showNothing()}
                        </div>
                    )}
                </ul>
            </div>
            <div className={'presentation'}></div>
        </header>
    );
};

export default Header;
