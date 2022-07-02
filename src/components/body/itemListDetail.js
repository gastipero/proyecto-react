import 'materialize-css/dist/css/materialize.min.css';
import { useEffect, useState } from 'react';


export const ItemListDetail = (props) => {

    return (
        <div class="col m12">
            <div class="card" style={styles.container}>
                <div class="card-image col m6">
                    <img src={props.itemImg} style={styles.imagenes} />
                    <span class="card-title">{props.itemName}</span>
                </div>
                <div class="card-content col m6" style={styles.side}> 
                    <div>
                        <h4>{props.itemName}</h4>
                        <h6>{props.itemDescription}</h6>
                    </div>
                    <div style={styles.priceAndStock}>
                        <h5>Price:{props.itemPrice}</h5>
                        <h5>Stock:{props.itemStock}</h5>
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