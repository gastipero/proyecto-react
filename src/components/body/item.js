import { Botonera } from './botones.js';
import {Link} from 'react-router-dom'


export const Item = ({product}) => {
    return (
        <div class="col s12 m12 l4 xl3">
            <div class="card">
                <div class="card-image">
                    <img src={product.image} style={styles.imagenes} />
                </div>
                <div class="card-content" style={styles.card}>
                    <span class="card-title">{product.title}</span>
                    <p>Precio: ${product.price}</p>
                    <p>Stock: {product.rating.count}</p>
                    <Link to={`item/${product.id}`}>Ver mas detalles</Link>
                </div>
                <Botonera itemStocks={product.rating.count} />
            </div>
        </div>
    )
} 


const styles = {
    imagenes: {
        height: 200,
        objectFit: 'contain',
        objectPosition: 'center',
    },
    card: {
        height: 200,
        padding: 10
    }
}