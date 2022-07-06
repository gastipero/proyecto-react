import 'materialize-css/dist/css/materialize.min.css';
import { useState, useEffect } from 'react';
import BounceLoader from "react-spinners/BounceLoader";
import { ItemList } from './itemList'
import {useParams} from 'react-router-dom'


export const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const { categoryName } = useParams()
    const URL = categoryName ? `https://fakestoreapi.com/products/category/${categoryName}` : 'https://fakestoreapi.com/products/'
    const getProducts = async () => {
        try {
            setLoading(true)
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
        [categoryName]
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
                />) : error ? alert('ocurrio un error') : <ItemList products={products} />}


        </div>
    );
}



const styles = {
    container: {
        marginLeft: '7%',
        marginRight: '7%',
    },
}