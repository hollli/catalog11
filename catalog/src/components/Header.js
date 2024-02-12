import React, {useState} from 'react';
import {Link} from 'react-router-dom'; // Додано імпорт Link
import {RiShoppingCartFill} from "react-icons/ri";
import Order from './Order';

const showOrders = (props) => {
    let summa = 0;
    props.orders.forEach(el => {
        if (el.price !== "Free to play") {
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
    );
};

const showNothing = () => {
    return (
        <div className='empty'>
            <h2>Cart is empty</h2>
        </div>
    );
};

function Header(props) {
    let [cartOpen, setCartOpen] = useState(false);

    return (
        <header>
            <div>
                <span className={'logo'}></span>
                <ul className={'nav'}>
                    <li>
                        <Link to="/">Home</Link> {/* Додано Link компонент */}
                    </li>
                    <li>
                        <Link to="/About">About</Link> {/* Додано Link компонент */}
                    </li>
                    <li>
                        <Link to="/Contacts">Contacts</Link> {/* Додано Link компонент */}
                    </li>
                    <li>
                        <Link to="/Profile">Profile</Link> {/* Додано Link компонент */}
                    </li>

                    <RiShoppingCartFill
                        onClick={() => setCartOpen(!cartOpen)}
                        className={`shop-cart-button ${cartOpen ? 'active' : ''}`}
                    />
                </ul>
                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ?
                            showOrders(props) : showNothing()}
                    </div>
                )}
            </div>
            <div className={'presentation'}></div>
        </header>
    );
};

export default Header;
