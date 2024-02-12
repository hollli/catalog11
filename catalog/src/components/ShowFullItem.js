import React, {Component} from 'react';

class ShowFullItem extends Component {
    render() {
        const price = this.props.item.price;
        let priceDisplay;

        if (price === 'Free to play') {
            priceDisplay = price;
        } else {
            priceDisplay = `${price}$`;
        }
        return (
            <div className='full-item'>
                <div>
                    <img src={this.props.item.img} onClick={() => this.props.onShowFull(this.props.item)}/>
                    <div className='categories'>
                        {this.props.item.categories.map((category, index) => (
                            <div key={index}>{category}</div>
                        ))}
                    </div>
                    <h2>{this.props.item.title}</h2>
                    <p>{this.props.item.desc}</p>
                    <b>{priceDisplay}</b>
                    <div className="add-to-cart"
                         onClick={() => this.props.onAdd(this.props.item)}>+
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowFullItem;