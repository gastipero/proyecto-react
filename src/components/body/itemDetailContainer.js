import 'materialize-css/dist/css/materialize.min.css';
import { ItemDetail } from './itemDetail'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import BounceLoader from "react-spinners/BounceLoader";

export const ItemListDetail = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const { itemId} = useParams()
    const URL = `https://fakestoreapi.com/products/${itemId}`
    const getProducts = async () => {
        try {
            const response = await fetch(URL)
            const data = await response.json()
            setProduct(data)
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
        <>
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
                />) : <ItemDetail key={product.id} product={product} />}
        </>
    )
}



