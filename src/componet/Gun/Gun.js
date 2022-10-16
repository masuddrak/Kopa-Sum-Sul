import React from 'react';

const Gun = ({gun}) => {
    const {img,name,bullet,action,capacity,price}=gun
    console.log(gun)
    return (
        <div className='gun'>
            <img style={{"width":"25%"}} src={img} alt="" />
            <h1>Name:{name}</h1>
            <p>Bullet{bullet}</p>
            <p>Ation:{action}</p>
            <p>Capacity:{capacity}</p>
            <p style={{"fontWeight":"bold"}}>Price:${price}</p>
        </div>
    );
};

export default Gun;