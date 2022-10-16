import './Navber.css'
const Navber = ({openModal,cart}) => {
    
    return (
        <div className='navber d-flex justify-content-between'>
            <h1>Hello Kopa Sum</h1>
            <button onClick={openModal}>Cart<sup>{cart.length}</sup></button>
        </div>
    );
};

export default Navber;