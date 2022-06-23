import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

export const Botonera = (propers) => {
    const [cantidad, setCantidad] = useState(0)
    const { itemStocks } = propers
    const sumarProducto = () => {
        (itemStocks > cantidad) ? setCantidad(cantidad + 1) : setCantidad(cantidad)
    }
    const restarProducto = () => {
        (0 < cantidad) ? setCantidad(cantidad - 1) : setCantidad(cantidad)
    }
    const agregarProducto = () => {
        if (cantidad !== 0) {
            setCantidad(0)
            Swal.fire(
                'Éxito!',
                'Tu producto fue agregado con éxito!',
                'success'
            )
        }
        else {
            Swal.fire(
                'Error!',
                'Debe agregar al menos un producto!',
                'error'
            )
        }
    }
    return (
        <div>
            <div style={styles.container}>
                <FontAwesomeIcon icon={faMinus} onClick={restarProducto} style={styles.botons} />
                <span style={styles.quantity}>{cantidad} </span>
                <FontAwesomeIcon icon={faPlus} onClick={sumarProducto} style={styles.botons} />
            </div>
            <div>
                <FontAwesomeIcon icon={faCartPlus} style={styles.cartAdd} onClick={agregarProducto} />
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
        margin: 10
    },
}