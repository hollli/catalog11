import '../css/Buy.css';
import React, {Component} from 'react';

class Buy extends Component {
    render() {
        const {mainBuyVisible} = this.props;

        return (
            <div className={mainBuyVisible ? 'visible' : 'hidden'}>
                <div className="loop-wrapper">
                    <div className="mountain"/>
                    <div className="hill"/>
                    <div className="tree"/>
                    <div className="tree"/>
                    <div className="tree"/>
                    <div className="rock"/>
                    <div className="truck"/>
                    <div className="wheels"/>
                </div>
            </div>
        );
    }
}

export default Buy;