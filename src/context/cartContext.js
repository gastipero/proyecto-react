import { createContext, useState } from "react";

export const context = createContext()
const { Provider } = context


export const CartContext = ({ children }) => {
    const [productos, setProductos] = useState([])
    const [existeEnCart, setExtisteEnCart] = useState(false)
  
    const isInCart = (added) => {
        productos.find(producto => producto.item.product.id == added.item.product.id) ? (productos.find(producto => producto.item.product.id == added.item.product.id).quant.cantidad) = (productos.find(producto => producto.item.product.id == added.item.product.id).quant.cantidad) + (added.quant.cantidad) : setProductos([...productos, added])
    }
    const addProduct = (added) => {
        isInCart(added)
    }
    const removeProduct = (idClick) => {
        setProductos(productos.filter(item => item.item.product.id != idClick))
    }
    const clear = () => {
        setProductos([])
    }

    return (
        <Provider value={{ productos, addProduct, removeProduct, clear }} >
            {children}
        </Provider>
    )

}