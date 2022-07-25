import { Link } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { addDoc, collection, serverTimestamp, doc } from "firebase/firestore";
import { useState, useContext } from "react";
import { context } from "../../context/cartContext";
import 'materialize-css/dist/css/materialize.css';


export const EndCart = () => {
    const [validarDatos, setValidarDatos] = useState(false)
    const { productos } = useContext(context)
    const nuevaVenta = (e) => {
        /* addDoc */
        console.log(e.target.parentElement.children[1].children[0].children[3].children[0].children[0].value)
        const name = e.target.parentElement.children[1].children[0].children[0].children[0].children[0].value
        const surname = e.target.parentElement.children[1].children[0].children[0].children[1].children[0].value
        const telephone = e.target.parentElement.children[1].children[0].children[1].children[0].children[1].value
        const mail = e.target.parentElement.children[1].children[0].children[1].children[1].children[0].value
        const address = e.target.parentElement.children[1].children[0].children[2].children[0].children[0].value
        const comments = e.target.parentElement.children[1].children[0].children[3].children[0].children[0].value
        const ventaProductos = collection(db, 'ventas')
        const cliente = {
            name,
            surname,
            mail,
            telephone,
            address,
            comments,
            productos,
        }
    }
    return (
        <>
            {validarDatos
                ? <div>Gracias por su compra </div>
                : (<>
                    <div class="row">
                        <form class="col s12">
                            <div class="row">
                                <div class="input-field col s6">
                                    <input id="first_name" type="text" class="validate"/>
                                    <label for="first_name">First Name</label>
                                </div>
                                <div class="input-field col s6">
                                    <input id="last_name" type="text" class="validate" />
                                    <label for="last_name">Last Name</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">phone</i>
                                    <input id="icon_telephone" type="tel" class="validate" />
                                    <label for="icon_telephone">Telephone</label>
                                </div>
                                <div class="input-field col s6">
                                    <input id="email" type="email" class="validate" />
                                    <label for="email">Email</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s6">
                                    <input id="adress" type="text" class="validate" />
                                    <label for="adress">Adress</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <textarea id="comments" class="materialize-textarea"></textarea>
                                    <label for="comments">Comments</label>
                                </div>
                            </div>
                        </form>
                    </div>

                    <button onClick={nuevaVenta}>Finalizar compra</button>
                </>)}
        </>
    )
}