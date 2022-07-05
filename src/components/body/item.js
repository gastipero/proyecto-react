import { Botonera } from './botones.js';


export const Item = ({product}) => {
    return (
        <div class="col m4 l3 xl2" key={product.id}>
            <div class="card">
                <div class="card-image">
                    <img src={product.image} style={styles.imagenes} />
                </div>
                <div class="card-content" style={styles.card}>
                    <span class="card-title">{product.title}</span>
                    <p>Precio: ${product.price}</p>
                    <p>Stock: {product.rating.count}</p>
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