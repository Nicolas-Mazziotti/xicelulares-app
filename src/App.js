import './App.css';
//Views y Components
import Home from './Views/Home/Home'
import NavBar from './Components/NavBar/NavBar';
import Cart from './Components/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Cart/>
      <Home />
    </div>
  );
}

export default App;
