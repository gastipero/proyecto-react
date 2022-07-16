import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { createContext } from "react";
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
import { items } from "./items";
import { context } from "../../context/cartContext";
import { Link } from 'react-router-dom'



export const Botonera = (propers) => {
    const [cantidad, setCantidad] = useState(0)
    const [endCart, setEndCart] = useState(false)
    const { itemStocks, itemName, product } = propers
    const { addProduct } = useContext(context)
    const sumarProducto = () => {
        (itemStocks > cantidad) ? setCantidad(cantidad + 1) : setCantidad(cantidad)
    }
    const restarProducto = () => {
        (0 < cantidad) ? setCantidad(cantidad - 1) : setCantidad(cantidad)
    }
    const agregarProducto = () => {
        if (cantidad !== 0) {
            Swal.fire(
                'Éxito!',
                'Tu producto fue agregado con éxito!',
                'success'
            )
            let added = {
                item: { product },
                quant: { cantidad },
            }
            addProduct(added)
            setCantidad(0)
            setEndCart(true)
        }
        else {
            Swal.fire(
                'Error!',
                'Debe agregar al menos un producto!',
                'error'
            )
        }
    }
    const [estado, setEstado] = useState(false)
    const cambioEstado = () => {
        itemStocks === 0 ? setEstado(true) : endCart ? setEstado(true) : setEstado(false);
    }

    useEffect(() => {
        cambioEstado()
    }, [estado, cantidad]
    )

    return (
        <div onLoadCapture={cambioEstado}>
            <div style={estado ? styles.containerDis : styles.container}>
                <FontAwesomeIcon icon={faMinus} onClick={restarProducto} style={styles.botons} />
                <span style={styles.quantity}>{cantidad} </span>
                <FontAwesomeIcon icon={faPlus} onClick={sumarProducto} style={styles.botons} />
            </div>
            <div>
                {endCart ? <Link to='/cart'><button style={styles.finalizarCompra}>Finalizar Compra</button></Link> : <button disabled={estado} onClick={agregarProducto} id='btn-agregar' style={styles.cartAdd} ><FontAwesomeIcon icon={faCartPlus} /></button>}
            </div>
        </div>
    )
}


const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: "center",
        marginLeft: '7%',
        marginRight: '7%',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#111517',
    },
    containerDis: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: "center",
        marginLeft: '7%',
        marginRight: '7%',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#111517',
        pointerEvents: 'none',
        opacity: 0.7,
    },
    botons: {
        margin: 10,
        fontSize: 30,
        color: 'white',
    },
    quantity: {
        fontSize: 30,
        color: 'white',
    },
    cartAdd: {
        fontSize: 40,
        margin: 10,
        backgroundColor: 'transparent',
        border: 'none',
    },
    finalizarCompra: {
        height: 48,
        margin: 10,
        padding: 1,
        fontSize: '100%',
    }
}