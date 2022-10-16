import './App.css';
import Guns from './componet/Guns/Guns';
import Navber from './componet/Navber/Navber';
import ReactModal from './componet/ReactModal/ReactModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-modal';
import { useState } from 'react';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
function App() {
  const [cart,setCart]=useState([])
  const [modalIsOpen, setIsOpen] =useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const addToCart=(gun)=>{
    const newCard=[...cart,gun];
    setCart(newCard)
} 

  return (
    <div className="App">
     

      <Navber cart={cart} openModal={openModal}></Navber>
      <Guns addToCart={addToCart}></Guns>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>x</button>
         {
                cart.map(gun=><ReactModal
                gun={gun}
                key={gun.id}
                ></ReactModal>)
            }
      </Modal>
    </div>
  );
}

export default App;
