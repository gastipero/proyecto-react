import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';


export const ItemDetail = ({ product }) => {
    const {categoryName} = useParams()
    return (<div class="col m12">
        <div class="card" style={styles.container}>
            <div class="card-image col m6">
                <Link to={categoryName ? (`/category/${categoryName}`) : "/"}><FontAwesomeIcon icon={faXmark} /></Link>
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
        height: '80vh',
        objectFit: 'contain',
        objectPosition: 'center',
    },
    side: {
        height: '80vh',
        justifyContent: 'space-between',
        display: 'flex',
        flexFlow: 'column',
    },
    priceAndStock: {
    }
}