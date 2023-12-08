import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css';

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <div className="cartCompleta">
                <h2>No hay productos en el carrito. Compra o vete! </h2>
                <Link to="/" className="cartButton">Ver Productos</Link>
            </div>
        )
    }

    return (
        <div className="cartCompleta">
            {
                carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)
            }
            <h3>Total: ${total} </h3>
            <h3>Cantidad Total: {cantidadTotal} </h3>
            <button onClick={() => vaciarCarrito()} className="cartButton"> Vaciar Carrito </button>
            <Link to="/checkout" className="cartButton">Finalizar Compra</Link>
        </div>
    )
}

export default Cart