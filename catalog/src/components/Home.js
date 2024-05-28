import React, {Component} from 'react';
import Categories from "../components/Categories";
import Items from "../components/items";
import ShowFullItem from "../components/ShowFullItem";
import Header from "./Header";
import {RiShoppingCartFill} from "react-icons/ri";
import Order from "./Order";
import Buy from "./Buy";
import {auth} from "../firebase";


const showNothing = () => {
    return (
        <div style={{
            width: '450px',
            height: '350px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: 'url(https://eadn-wc04-1926448.nxedge.io/cdn/media/catalog/product/cache/ccb305b1061c785de33da9c79e0526ce/m/2/m2-missing-orders-product-image-380x410.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'multiply',
            backgroundColor: '#fae6b1'
        }}>
        </div>
    );
};



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            items: [
                {
                    id: 1,
                    title: 'The Witcher 3: Wild Hunt',
                    img: 'https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png',
                    desc: 'The Witcher 3: Wild Hunt is an open-world, action role-playing game developed by CD Projekt RED. The game has received numerous awards and is recognized as one of the best games of all time.',
                    categories: ['Story Rich', 'RPG', 'Open World'],
                    price: '39,99'
                },
                {
                    id: 2,
                    title: 'Red Dead Redemption 2',
                    img: 'https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png',
                    desc: 'Red Dead Redemption 2 is an open-world, western-themed action-adventure game developed by Rockstar Games. The game is set in 1899, during the end of the Wild West era.',
                    categories: ['Story Rich', 'RPG', 'Western', 'Open World', 'Multiplayer'],
                    price: '59,99'
                },
                {
                    id: 3,
                    title: 'The Legend of Zelda: Breath of the Wild',
                    img: 'https://assets-prd.ignimgs.com/2022/06/14/zelda-breath-of-the-wild-1655249167687.jpg',
                    desc: 'The Legend of Zelda: Breath of the Wild is an action-adventure game set in an open world, developed and published by Nintendo for the Nintendo Switch and Wii U consoles.',
                    categories: ['RPG', 'RPG', 'Open World'],
                    price: '59,99'
                },
                {
                    id: 4,
                    title: 'Cyberpunk 2077',
                    img: 'https://image.api.playstation.com/vulcan/ap/rnd/202311/2812/d2a44736cace2e6cb1a8244455e8890b0afb17d663552e7d.png',
                    desc: 'Cyberpunk 2077 is a futuristic open-world action role-playing game developed by CD Projekt RED. The game is set in the Night City, California.',
                    categories: ['Open World', 'Story Rich', 'RPG', 'FPS', 'Shooter'],
                    price: '89,99'
                },
                {
                    id: 5,
                    title: 'Grand Theft Auto V',
                    img: 'https://image.api.playstation.com/cdn/EP1004/CUSA00411_00/eXsWlP0EkcVkLPHgU4pjflmg07252yU8.png',
                    desc: 'Grand Theft Auto V is an open-world action-adventure game developed by Rockstar North and published by Rockstar Games. The game was released in 2013.',
                    categories: ['Open World', 'Story Rich', 'Multiplayer', 'RPG', 'FPS', 'Racing'],
                    price: '44,99'
                },
                {
                    id: 6,
                    title: 'Minecraft',
                    img: 'https://image.api.playstation.com/vulcan/img/cfn/11307x4B5WLoVoIUtdewG4uJ_YuDRTwBxQy0qP8ylgazLLc01PBxbsFG1pGOWmqhZsxnNkrU3GXbdXIowBAstzlrhtQ4LCI4.png',
                    desc: 'Minecraft is an endless sandbox building game developed by Mojang Studios. Players can build and destroy constructions using various blocks in a three-dimensional world.',
                    categories: ['Survival', 'RPG', 'Open World', 'Multiplayer'],
                    price: '29,99'
                },
                {
                    id: 7,
                    title: 'Fortnite',
                    img: 'https://sm.ign.com/ign_es/game/f/fortnite/fortnite_xa3q.jpg',
                    desc: 'Fortnite is an online open-world multiplayer battle royale game developed by Epic Games. The game has gained immense popularity.',
                    categories: ['FPS', 'Survival', 'Shooter', 'Free to Play', 'Multiplayer'],
                    price: 'Free to play'
                },
                {
                    id: 8,
                    title: 'Call of Duty: Warzone',
                    img: 'https://images.pushsquare.com/df8ea1cce852c/call-of-duty-warzone-cover.cover_large.jpg    ',
                    desc: 'Call of Duty: Warzone is a free-to-play multiplayer battle royale game developed by Infinity Ward and published by Activision. It is a spin-off of the Call of Duty series.',
                    categories: ['FPS', 'Shooter', 'Free to Play', 'Multiplayer'],
                    price: 'Free to play'
                },
                {
                    id: 9,
                    title: 'Among Us',
                    img: 'https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec',
                    desc: 'Among Us is an online game for mobile and PC platforms developed and published by InnerSloth. Players adorn themselves as space characters performing tasks on a spaceship.',
                    categories: ['Free to Play', 'Survival', 'RPG', 'Multiplayer'],
                    price: 'Free to play'
                },
                {
                    id: 10,
                    title: 'Counter-Strike: Global Offensive',
                    img: 'https://assets-prd.ignimgs.com/2021/12/30/counter-strike-global-offensive-button-1640896165989.jpg',
                    desc: 'Counter-Strike: Global Offensive is a multiplayer first-person shooter video game developed and published by Valve Corporation. It is the fourth release in the Counter-Strike series.',
                    categories: ['FPS', 'Shooter', 'Free to Play', 'Multiplayer'],
                    price: 'Free to play'
                }
            ],
            currentItems: [],
            showFullItem: false,
            fullItem: {},
            cartOpen: false,
            showBuy: false
        };
        this.addToOrder = this.addToOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
        this.chooseCategory = this.chooseCategory.bind(this);
        this.onShowFull = this.onShowFull.bind(this);
        this.toggleCart = this.toggleCart.bind(this);
        this.handleBuyButtonClick = this.handleBuyButtonClick.bind(this);

    }

    handleBuyButtonClick() {
        this.setState({showBuy: true});

    }

    componentDidMount() {
        this.setState({currentItems: this.state.items});
    }

    calculateTotalPrice() {
        let summa = 0;
        this.state.orders.forEach(el => {
            if (el.price !== "Free to play") {
                summa += Number.parseFloat(el.price);
            }
        });
        return summa;
    }

    toggleCart() {
        if (!auth.currentUser) {
            window.location.href = "/profile";
        }else {
            this.setState(prevState => ({
                cartOpen: !prevState.cartOpen,
                showBuy: false
            }));
        }
    }

    render() {
        const {orders, cartOpen, showBuy} = this.state;
        return (
            <div>
                <RiShoppingCartFill className={'nav'}
                                    onClick={this.toggleCart}
                                    className={`shop-cart-button ${cartOpen ? 'active' : ''}`}
                />
                {cartOpen && (
                    <div className='shop-cart'>
                        {orders.length > 0 ? (
                            <div>
                                {showBuy ? null : (
                                    <div className="shop-main">
                                        {orders.map(el => (
                                            <Order key={el.id} item={el} onDelete={this.deleteOrder}/>
                                        ))}
                                        <p className='summa'>Price: {new Intl.NumberFormat().format(this.calculateTotalPrice())}$</p>
                                        <button className="buttonBuy" onClick={this.handleBuyButtonClick}>Buy</button>
                                    </div>
                                )}
                                {showBuy && <Buy/>}
                            </div>
                        ) : (
                            showNothing()
                        )}
                    </div>

                )}
                <Categories chooseCategory={this.chooseCategory}/>
                <Items onShowFull={this.onShowFull} items={this.state.currentItems} onAdd={this.addToOrder}/>
                {this.state.showFullItem &&
                    <ShowFullItem onAdd={this.addToOrder} onShowFull={this.onShowFull} item={this.state.fullItem}/>}
            </div>
        );
    }

    onShowFull(item) {
        this.setState({fullItem: item, showFullItem: !this.state.showFullItem});
    }

    chooseCategory(category) {
        if (category === 'All') {
            this.setState({currentItems: this.state.items});
            return;
        }

        if (!this.state.items) {
            console.error("Items array is undefined");
            return;
        }

        this.setState({
            currentItems: this.state.items.filter(el => el.categories.includes(category))
        });
    }

    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(el => el.id !== id)});
    }

    addToOrder(item) {
        let isInArray = false;
        this.state.orders.forEach(el => {
            if (el.id === item.id)
                isInArray = true;
        });
        if (!isInArray) {
            this.setState({
                orders: [...this.state.orders, item]
            });
        }
    }
}

export default Home;