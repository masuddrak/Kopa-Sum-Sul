import React, { useEffect, useState } from 'react';
import Gun from '../Gun/Gun';

const Guns = ({addToCart}) => {
    const [guns,setGuns]=useState([])
    
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setGuns(data))
    },[])
    
    return (
        <div className='row justify-content-md-center'>
            <h1 style={{"textAlign":'center',"margin":'50px 0px'}}>All Guns <span style={{"color":'blue',}}>{guns.length}</span></h1>
            {guns.map(gun=><Gun
            key={gun.id}
            gun={gun}
            addToCart={addToCart}
            ></Gun>)}
        </div>
    );
};

export default Guns;