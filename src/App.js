import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
//Routing y Navegacion
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//Views y Components
import Home from './Views/Home/Home'
import NavBar from './Components/NavBar/NavBar';
import Cart from './Views/Cart/Cart';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
//Context
import CartProvider from './Context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/detail/:id' element= {<ItemDetailContainer/>}/>
            <Route path='/cart' element= {<Cart/>}/>
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
