import React, {useState} from 'react';

const Categories = ({chooseCategory}) => {
    const categories = ['All', 'Story Rich', 'RPG', 'Open World', 'Western', 'FPS', 'Shooter', 'Multiplayer', 'Racing', 'Survival', 'Free to Play'];
    const [val, setVal] = useState();    return (
        <div className='categories'>
            <ul>
                {categories.map((category, index) => (
                    <div key={index} onClick={() => chooseCategory(category)}>{category}</div>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
