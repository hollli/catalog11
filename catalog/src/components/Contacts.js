import React, {Component} from 'react';
import Header from "./Header";
import Categories from "./Categories";
import Items from "./items";
import ShowFullItem from "./ShowFullItem";
import Footer from "./Footer";

class Contacts extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header orders={this.state.orders} onDelete={this.deleteOrder}/>

                <Footer/>
            </div>
        );
    }
}

export default Contacts;
