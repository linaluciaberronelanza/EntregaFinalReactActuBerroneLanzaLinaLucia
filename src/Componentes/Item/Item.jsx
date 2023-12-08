import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, img, stock }) => {
  return (
    <div className='cardProducto'>
      <p className='cardTexto'> ID: {id}</p>
      <img src={img} alt={nombre} className='cardImg' />
      <h3 className='cardTitulo'> {nombre} </h3>
      <p className='cardPrecio'> ${precio}</p>
      <p className='cardStock'>STOCK: {stock} </p>
      <Link to={`/item/${id}`} className='cardButton'> Ver Detalles </Link>
    </div>
  )
}

export default Item