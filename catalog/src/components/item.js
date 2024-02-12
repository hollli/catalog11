import React, {Component} from 'react';

class Item extends Component {
    render() {
        const price = this.props.item.price;
        let priceDisplay;

        if (price === 'Free to play') {
            priceDisplay = price;
        }
        else {
            priceDisplay = `${price}$`;
        }
        return (
            <div className='item'>
                <img src={this.props.item.img} onClick={() => this.props.onShowFull(this.props.item)}/>
                <h2>{this.props.item.title}</h2>
                <b>{priceDisplay}</b>
                <div className="add-to-cart"
                     onClick={() => this.props.onAdd(this.props.item)}>+
                </div>
            </div>
        );
    }
}

export default Item;