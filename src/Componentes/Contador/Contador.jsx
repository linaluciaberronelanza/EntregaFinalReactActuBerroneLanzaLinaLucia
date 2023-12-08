import { useState } from "react";
import './Contador.css'


const Contador = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);


    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const restarContador = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div className="contadorContainer">
                <button onClick={restarContador} className="contadorButton01"> - </button>
                <strong className="contadorTexto"> {contador} </strong>
                <button onClick={sumarContador} className="contadorButton01"> + </button>
            </div>
            <button onClick={() => funcionAgregar(contador)} className="contadorButton"> Agregar al Carrito </button>
        </>

    )
}

export default Contador