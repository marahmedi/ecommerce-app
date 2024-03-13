import './App.css';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Cart from './components/Cart';
import Nav from './components/Nav';
import ProductListing from './pages/ProductListing';


function App() {

  const isNavOpen = useSelector(state => state.isNavOpen)
  console.log(isNavOpen)
  const isCartNavOpen = useSelector(state => state.isCartNavOpen)

  return (
    <div className="App">
    <Header/>
    {isNavOpen && <Nav/>}
    {isCartNavOpen && <Cart/>}
    <ProductListing/>
    </div>
  );
}

export default App;
