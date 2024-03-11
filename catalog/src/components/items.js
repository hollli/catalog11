import React from 'react';
import Item from "./item"; // Поміняв "item" на "Item"

export const Items = (props) => {
    return (
        <main>
            {props.items && props.items.map(el => (
                <Item onShowFull={props.onShowFull} key={el.id} item={el} onAdd={props.onAdd} />
            ))}
        </main>
    );
};

export default Items;
