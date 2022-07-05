
import { Item } from './item.js';

export const ItemList = ({ products }) => {
    return (
        <>
            {products.map((product) =><Item key={product.id} product={product} />)}
        </>
    )
}

