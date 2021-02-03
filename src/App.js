import Home from './components/Landing/Home'
import Navbar from './components/Header/Navbar'
import './App.css';
import { BrowserRouter as Router, Route, Switch,} from "react-router-dom"
function App() {
  return (

    <div className="App">
      <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
