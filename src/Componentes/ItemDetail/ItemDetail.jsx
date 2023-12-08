import { useState } from 'react';
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';
import './ItemDetail.css'



const ItemDetail = ({ id, nombre, stock, precio, img, desc }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);


    const { agregarAlCarrito } = useContext(CarritoContext);



    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);

        const item = { id, nombre, precio, desc };
        agregarAlCarrito(item, cantidad);
    }


    return (
        <div className='detailItem'>
            <p className='detailId'> ID: {id}</p>
            <h2 className='detailTitulo'> {nombre} </h2>
            <img src={img} alt={nombre} className='detailImg' />
            <p className='detailPrecio'> ${precio}</p>
            <p className='detailTexto'> {desc} </p>

            {
                agregarCantidad > 0 ? (<Link to="/cart" className='linkItem'>Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
            }



        </div>
    )
}

export default ItemDetail