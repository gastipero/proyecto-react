import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { Botonera } from './botones.js';



export const ItemDetail = ({ product }) => {
    const { categoryName } = useParams()
    return (<div class="row">
        <div class="card" style={styles.container}>
            <Link to={categoryName ? (`/category/${categoryName}`) : "/"}><FontAwesomeIcon icon={faXmark} style={styles.exitCross} /></Link>
            <div class="card-image col m6">
                <img src={product.image} style={styles.imagenes} />
            </div>
            <div class="card-content col m6" style={styles.side}>
                <div>
                    <h4>{product.title}</h4>
                    <h6>{product.description}</h6>
                </div>
                <div style={styles.priceAndStock}>
                    <h5>Price: ${product.price}</h5>
                    <h5>Stock: {product.rating.count} </h5>
                    <Botonera itemStocks={product.rating.count} itemName={product.title} product={product}/>
                </div>
            </div>
        </div>
    </div>
    )
}
const styles = {
    container: {
        marginLeft: '7%',
        marginRight: '7%',
    },
    imagenes: {
        height: '50vh',
        objectFit: 'contain',
        objectPosition: 'center',
        display: 'flex'
    },
    side: {
        height: '50vh',
        justifyContent: 'space-between',
        display: 'flex',
        flexFlow: 'column',
    },
    priceAndStock: {
    },
    exitCross: {
        top: 5,
        right: 15,
        fontSize: 30,
        position: 'absolute',
        zIndex: 1000,
        color: '#111517'
    }
}