import coponGin from './images/copongin.jpg';
import 'materialize-css/dist/css/materialize.min.css';
import { Botonera } from './botones.js'

export const ItemListContainer = (props) => {
    return (
            <div class="" style={styles.container}>
                <div class="col m4 l3 xl2">
                    <div class="card">
                        <div class="card-image">
                            <img src={props.itemImg} style={styles.imagenes} />
                        </div>
                        <div class="card-content" style={styles.card}>
                            <span class="card-title">{props.itemName}</span>
                            <p>Precio: ${props.itemPrice}</p>
                            <p>Stock: {props.itemStock}</p>
                        </div>
                        <Botonera itemStocks={props.itemStock}/>
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
        height:200,
        objectFit: 'contain',
        objectPosition: 'center',
    },
    card: {
        height: 200,
        padding: 10
    }
}