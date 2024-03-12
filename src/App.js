import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Cart from './components/Cart';
import Nav from './components/Nav';
import ProductListing from './pages/ProductListing';

function App() {

  const [showCart, setShowCart] = useState(false)
  const [showNav, setShowNav] = useState(false)


  return (
    <div className="App">
    <Header setShowCart={setShowCart} setShowNav={setShowNav}/>
    {showNav && <Nav setShowNav={setShowNav}/>}
    {showCart && <Cart setShowCart={setShowCart}/>}
    <ProductListing/>
    </div>
  );
}

export default App;
