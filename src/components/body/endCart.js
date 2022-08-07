import { Link } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { addDoc, collection, serverTimestamp, doc } from "firebase/firestore";
import { useState, useContext, useEffect } from "react";
import { context } from "../../context/cartContext";
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import Swal from 'sweetalert2';


export const EndCart = () => {

    const [validarDatos, setValidarDatos] = useState(false)
    const [cliente, setCliente] = useState({})
    const { productos, clear } = useContext(context)
    const nuevaVenta = (e) => {
        /* addDoc */
        const name = document.querySelector('#name').value
        const telephone = document.querySelector('#icon_telephone').value
        const mail = document.querySelector('#email').value
        const address = document.querySelector('#address').value
        const comments = document.querySelector('#comments').value
        const titular = document.querySelector('#titular').value
        const cardNumber = document.querySelector('#card-number').value
        const expireDate = document.querySelector('#expire-date').value
        const secureCode = document.querySelector('#code').value
        if (name && telephone && mail && address && titular && cardNumber && expireDate && secureCode) {
            setCliente({
                id : Date.now(),
                name,
                mail,
                telephone,
                address,
                comments,
                productos,
                tarjeta: {
                    titular,
                    cardNumber,
                    expireDate,
                    secureCode,
                }
            })
            setValidarDatos(true)
            clear()
        }
        else {
            Swal.fire(
                'Error!',
                'Complete todos sus datos!',
                'error'
            )
        }
    }
    const subirVenta = () => {
        const ventaProductos = collection(db, 'ventas')
        addDoc(ventaProductos, cliente)
    }
    useEffect(() => {
        !validarDatos ? console.log('todavía no') : subirVenta()}
        , [validarDatos])

    const comprobarTarjeta = () => {
        const tarjeta = document.querySelector('#card-number')
        tarjeta.value.length == 16 ? tarjeta.className = "validate" : tarjeta.className = ""
    }
    return (
        <>
            {validarDatos
                ? <div>
                    <h2>Gracias por su compra {cliente.name}</h2>
                    <p>Se procesó correctamente el pago. El ID de su compra es {cliente.id}. Su producto será enviado a {cliente.address}</p>
                    <Link to='/'><h2>Volver al incio</h2></Link>
                </div>
                : (<>
                    <div class="row" style={styles.container}>
                        <form class="col s12">
                            <div class="row">
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">account_circle</i>
                                    <input id="name" type="text" class="validate" />
                                    <label for="name">Name</label>
                                </div>
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">home</i>
                                    <input id="address" type="text" class="validate" />
                                    <label for="address">Adress</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">phone</i>
                                    <input id="icon_telephone" type="tel" class="validate" />
                                    <label for="icon_telephone">Telephone</label>
                                </div>
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">email</i>
                                    <input id="email" type="email" class="validate" />
                                    <label for="email">Email</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <i class="material-icons prefix">comment</i>
                                    <textarea id="comments" class="materialize-textarea"></textarea>
                                    <label for="comments">Comments</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">account_circle</i>
                                    <input id="titular" type="text" class="validate" />
                                    <label for="titular">Titular de la tarjeta</label>
                                </div>
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">credit_card</i>
                                    <input id="card-number" type="number" data-length="16" onChangeCapture={comprobarTarjeta} />
                                    <label for="card-number">Numero de tarjeta</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s5 offset-s1">
                                    <input id="expire-date" type="month" class="validate" />
                                    <label for="expire-date">Fecha de vencimiento</label>
                                </div>
                                <div class="input-field col s4">

                                    <i class="material-icons prefix">security</i>
                                    <input id="code" type="number" data-length="3" class="validate" />
                                    <label for="code">Código de seguridad</label>
                                </div>
                            </div>
                        </form>
                        <button onClick={() => {
                            nuevaVenta()
                        }}>Finalizar compra</button>
                    </div>
                </>)}
        </>
    )
}

const styles = {
    container: {
        marginTop: '2%',
        marginLeft: '7%',
        marginRight: '7%',
        padding: '1%',
        border: 'solid',

    },
}