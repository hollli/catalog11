import React, {Component} from 'react';

class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'All',
                    name: 'All'
                },
                {
                    key: 'FPS',
                    name: 'FPS'
                },
                {
                    key: 'Shooter',
                    name: 'Shooter'
                },
                {
                    key: 'Multiplayer',
                    name: 'Multiplayer'
                },
                {
                    key: 'Free to Play',
                    name: 'Free to Play'
                },
                {
                    key: 'Open World',
                    name: 'Open World'
                },
                {
                    key: 'Survival',
                    name: 'Survival'
                },
                {
                    key: 'Racing',
                    name: 'Racing'
                },
                {
                    key: 'RPG',
                    name: 'RPG'
                },
                {
                    key: 'Western',
                    name: 'Western'
                },
                {
                    key: 'Story Rich',
                    name: 'Story Rich'
                },

            ]
        }
    }

    render() {
        return (
            <div className='categories'>                {
                    this.state.categories.map(el => (
                        <div key={el.key} onClick={(()=>this.props.choseCategory(el.key))}>{el.name}</div>
                    ))
                }
            </div>
        );
    }
}

export default Categories;