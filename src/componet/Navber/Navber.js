import './Navber.css'
import { BsFillCartFill } from "react-icons/bs";
const Navber = ({ openModal, cart }) => {

    return (
        <div className='navber '>
            <div className='d-flex justify-content-between m-1'>
                <div>
                    <h1>Hello Kopa Sum</h1>
                </div>
                <div>
                    <BsFillCartFill className='fs-2 ' onClick={openModal}></BsFillCartFill>
                    <sup >{cart.length}</sup>
                </div>
            </div>
        </div>
    );
};

export default Navber;