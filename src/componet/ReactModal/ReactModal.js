import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import React from 'react';

const ReactModal = ({gun}) => {
    return (
        <div className='d-flex'>
            <img width={100} src={gun.img} alt="" />
            <h2>{gun.name}</h2>
        </div>
    );
};

export default ReactModal;