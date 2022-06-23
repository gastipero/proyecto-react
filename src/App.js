import NavBar from './components/header/navbar.js';
import { ItemListContainer } from './components/body/itemListContainer.js';
import './App.css';
import { items } from './components/body/items.js';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div class='row' style={styles.container}>
        <ItemListContainer itemName={items.copas.nombre} itemStock={items.copas.stock} itemPrice={items.copas.precio} itemId={items.copas.id} itemImg={items.copas.imagen}></ItemListContainer>
        <ItemListContainer itemName={items.botellas.nombre} itemStock={items.botellas.stock} itemPrice={items.botellas.precio} itemId={items.botellas.id} itemImg={items.botellas.imagen}></ItemListContainer>
        <ItemListContainer itemName={items.caja.nombre} itemStock={items.caja.stock} itemPrice={items.caja.precio} itemId={items.caja.id}itemImg={items.caja.imagen}></ItemListContainer>
      </div>

    </div>
  );
}

export default App;

const styles={
  container:{    

    },
    
}
