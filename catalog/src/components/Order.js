import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa';

class Order extends Component {
    render() {
        const price = this.props.item.price;
        let priceDisplay;

        if (price === 'Free to play') {
            priceDisplay = price;
        } else {
            priceDisplay = `${price}$`;
        }

        return (
            <div className='item'>
                <img src={this.props.item.img} alt={this.props.item.title} />
                <h2>{this.props.item.title}</h2>
                <b>{priceDisplay}</b>
                <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)} />
            </div>
        );
    }
}

export default Order;
