import NavBar from './components/header/navbar.js';
import { ItemListContainer } from './components/body/itemListContainer.js';
import './App.css';
import { items } from './components/body/items.js';
import { useState, useEffect } from 'react';
import BounceLoader from "react-spinners/BounceLoader"
import { ItemListDetail } from './components/body/itemDetailContainer'
import { Browser, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer />
      {/* <div class='row'>
        {products.map((product) => <ItemListDetail itemName={product.title} itemStock={product.rating.count} itemPrice={product.price} key={product.id} itemImg={product.image} itemDescription={product.description} />)}
      </div> */}
    </div>
  );
}

export default App;

