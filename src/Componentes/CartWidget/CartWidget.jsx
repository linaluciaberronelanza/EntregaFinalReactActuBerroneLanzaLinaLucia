import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);

  return (
    <div className='shoppingCart'>
      <Link to="/cart">
        <img className="imgCarrito" src="/carro.png" alt="imagen carrito de compras en color negro" />
        {
          cantidadTotal > 0 && <strong className='cartTexto'> {cantidadTotal} </strong>
        }
      </Link>
    </div>
  )
}

export default CartWidget