import 'materialize-css/dist/css/materialize.min.css';
import { useState, useEffect } from 'react';
import BounceLoader from "react-spinners/BounceLoader";
import {ItemList} from './itemList'


export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const URL = "https://fakestoreapi.com/products"
    const getProducts = async () => {
        try {
            const response = await fetch(URL)
            const data = await response.json()
            setProducts(data)
        }
        catch (err) { 
            setError(true);
            console.log(err); 
        }
        finally { setLoading(false) }
    }
    useEffect(() => {
        getProducts()
    },
        [loading]
    )

    return (
        <div class="row" style={styles.container}>
            {loading ? (
                <BounceLoader
                    color="#111517"
                    size='100px'
                    cssOverride={{
                        left: '50%',
                        bottom: '50%',
                        position: 'absolute'

                    }}
                    loading
                />) : error ? alert('ocurrio un error') : <ItemList products={products}/>}
            

        </div>
    );
}



const styles = {
    container: {
        marginLeft: '7%',
        marginRight: '7%',
    },
}