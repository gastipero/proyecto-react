import NavBar from './components/header/navbar.js';
import { ItemListContainer } from './components/body/itemListContainer.js';
import './App.css';
import { items } from './components/body/items.js';
import { useState, useEffect } from 'react';
import BounceLoader from "react-spinners/BounceLoader"
import { ItemListDetail } from './components/body/itemListDetail'

function App() {
  const [products, setProducts] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(rej => console.log(rej))
  },
    [loading]
  )


  return (
    <div className="App">
      <NavBar></NavBar>
      {loading ? (
        <BounceLoader
          color="#111517"
          size='100'
          cssOverride={{
            left: '50%',
            bottom: '50%',
            position: 'absolute'

          }}
          loading
        />) : (console.log('ready'))}

      <div class='row' style={styles.container}>
        {/* <ItemListContainer itemName={items[0].nombre} itemStock={items[0].stock} itemPrice={items[0].precio} itemId={items[0].id} itemImg={items[0].imagen}></ItemListContainer>
        <ItemListContainer itemName={items[1].nombre} itemStock={items[1].stock} itemPrice={items[1].precio} itemId={items[1].id} itemImg={items[1].imagen}></ItemListContainer>
        <ItemListContainer itemName={items[2].nombre} itemStock={items[2].stock} itemPrice={items[2].precio} itemId={items[2].id} itemImg={items[2].imagen}></ItemListContainer> */}
        {products.map((product) => <ItemListContainer itemName={product.title} itemStock={product.rating.count} itemPrice={product.price} key={product.id} itemImg={product.image} />)}
      </div>
      <div class='row'>
        {products.map((product) => <ItemListDetail itemName={product.title} itemStock={product.rating.count} itemPrice={product.price} key={product.id} itemImg={product.image} itemDescription={product.description}/>)}
      </div>
    </div>
  );
}

export default App;

const styles = {
  container: {

  },
}
