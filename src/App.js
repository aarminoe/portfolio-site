
import './App.css';
import { Routes, Route} from "react-router-dom";
import AboutMe from './AboutMe';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='about' element={ <AboutMe/> }/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
