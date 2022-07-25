import { Item } from './item.js';
import { db } from '../../firebase/firebase.js';
import { addDoc,doc,collection,serverTimestamp } from 'firebase/firestore';

export const ItemList = ({ products }) => {

/*     const agregarDB = () =>{
        const subirProductos = collection( db, 'productos')
        products.map((product) => addDoc(subirProductos,(product)))  
    } */

    return (
        <>
            {/* <button onClick={agregarDB}>Agregar a firebase</button> */}
            {products.map((product) => (<Item key={product.id} product={product} />))}
        </>
    )
}

