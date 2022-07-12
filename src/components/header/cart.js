import { carrito } from "../body/botones"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from "react";

export const Cart = () => {
    const eliminarProducto = (e) => {
        console.log(e.target.parentElement.parentElement.id);
        const idClick= e.target.parentElement.parentElement.id
        carrito = carrito.filter(item => item.idCart != idClick)
    }
    useEffect(() => {
    }
        , [carrito])
    return (
        <div>
            {carrito.map((item) => {
                return (
                    <div key={item.idCart} id={item.idCart} class="row" style={styles.container}>
                        <div class="col s1">
                            <img src={item.item.product.image} style={styles.images}/>
                        </div>
                        <div class="col s9">
                            <p>{item.item.product.title}</p>
                            <p>{item.item.product.description}</p>
                        </div>
                        <div class="col s1">
                            <p>{item.quant.cantidad}</p>
                        </div>
                        <div class="col s1">
                        
                            <i class="material-icons" style={styles.icon} onClick={eliminarProducto}>delete_forever</i> 
                        </div>
                    </div>
                )
            })}
        </div>
    )
}


const styles = {
    images: {
        width: "100%",
    },
    container: {
        paddingRight: 10,
        paddingLeft: 10,
        marginLeft: '7%',
        marginRight: '7%',
        marginTop: 10,
    },
    icon: {
        fontSize: 40,
    }
}