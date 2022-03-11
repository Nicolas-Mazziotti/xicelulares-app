import './App.css';
//Views y Components
import Home from './Views/Home/Home'
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home />
    </div>
  );
}

export default App;
