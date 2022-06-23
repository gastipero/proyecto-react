import coponGin from './images/copongin.jpg';
import 'materialize-css/dist/css/materialize.min.css';

export const ItemListContainer = (props) => {
    return (
            <div class="" style={styles.container}>
                <div class="col m4 l3 xl2">
                    <div class="card">
                        <div class="card-image">
                            <img src={props.itemImg} style={styles.imagenes} />
                        </div>
                        <div class="card-content">
                            <span class="card-title">{props.itemName}</span>
                            <p>Precio: ${props.itemPrice}</p>
                            <p>Stock: {props.itemStock}</p>
                        </div>
                    </div>
                </div>
            </div>
    );
}

const styles={
    container:{
        marginLeft:'7%',
        marginRight:'7%',
    },
    imagenes: {
        height:270,
        objectFit: 'cover',
        objectPosition: 'center',
    },
}

