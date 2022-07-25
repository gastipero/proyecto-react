import { useEffect, useContext, useState } from "react";
import { context } from "../../context/cartContext";
import { Link } from 'react-router-dom'


export const Cart = () => {
    const { productos, removeProduct, clear } = useContext(context)
    let total = 0
    productos.map((items)=>{
      total += (items.quant.cantidad * items.item.product.price)  
    })
    console.log(productos)
    const eliminarProducto = (e) => {
        console.log(e.target.parentElement.parentElement.id);
        const idClick = e.target.parentElement.parentElement.id
        removeProduct(idClick)
        /* productos = productos.filter(item => item.item.product.id != idClick) */
    }
    useEffect(() => {
    }
        , [productos])

    return (
        <div>
            {productos.length == 0 ? (<h2>No hay productos en tu carrito, <Link to='/'>HAZ CLICK AQUÍ PARA INICIAR A COMPRAR</Link></h2>) : (
                productos.map((item) => {
                    return (
                        <div key={item.idCart} id={item.item.product.id} class="row" style={styles.container}>
                            <div class="col s1">
                                <img src={item.item.product.image} style={styles.images} />
                            </div>
                            <div class="col s9">
                                <p>{item.item.product.title}</p>
                                <p>{item.item.product.description}</p>
                            </div>
                            <div class="col s1">
                                <p>{item.quant.cantidad}</p>
                                <p>${item.item.product.price * item.quant.cantidad}</p>
                            </div>
                            <div class="col s1">
                                <i class="material-icons" style={styles.icon} onClick={eliminarProducto}>delete_forever</i>
                            </div>
                        </div>
                    )
                })
            )}
            {productos.length == 0 ? <div></div> : (
                <div>
                    <div onClick={clear}>Vaciar Carrito</div>
                    <div>${total}</div>
                    <Link to='/endCart'><button>Finalizar Compra</button></Link>
                </div>
            )}
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