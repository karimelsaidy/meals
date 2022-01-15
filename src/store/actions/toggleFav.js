import React from 'react';

const toggleFav = (id) => {
    return (
       {type:"TOGGLE-FAV",payload:{id}}
    )
}

export default toggleFav;
