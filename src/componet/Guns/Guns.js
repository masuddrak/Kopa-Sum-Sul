import React, { useEffect, useState } from 'react';
import Gun from '../Gun/Gun';

const Guns = () => {
    const [guns,setGuns]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setGuns(data))
    },[])
    return (
        <div>
            <h1 style={{"textAlign":'center',"marginTop":'50px'}}>All Guns <span style={{"color":'blue',}}>{guns.length}</span></h1>
            {guns.map(gun=><Gun
            key={gun.id}
            gun={gun}
            ></Gun>)}
        </div>
    );
};

export default Guns;