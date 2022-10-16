import React from 'react';

const Gun = ({gun,addToCart}) => {
    const {img,name,bullet,action,capacity,price}=gun
    return (
        <div style={{"margin":"20px 0px"}} className='gun col-sm-6 col-md-4 col-lg-3'>
            <img style={{"width":"20%"}} src={img} alt="" />
            <h1 >Name:{name}</h1>
            <p>Bullet{bullet}</p>
            <p>Ation:{action}</p>
            <p>Capacity:{capacity}</p>
            <p style={{"fontWeight":"bold"}}>Price:${price}</p>
            <button onClick={()=>addToCart(gun)} style={{"backgroundColor":"bisque"} }>Add to Cart</button>
        </div>
    );
};

export default Gun;