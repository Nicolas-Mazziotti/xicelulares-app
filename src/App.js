import './App.css';
//Routing y Navegacion
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//Views y Components
import Home from './Views/Home/Home'
import NavBar from './Components/NavBar/NavBar';
import Cart from './Views/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Cart/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/detail/:id' element= {<ItemDetailContainer/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
