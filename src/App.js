//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './componentes/Navbar';
import Login from './pages/Login'; 
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import Register from './pages/Register';

const Routing = () => {
  return(
    <Switch>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/posts"component={Posts}/>
      <Route exact path="/users"component={Users}/>
      <Route exact path="/login"component={Login}/>
      <Route exact path="/register"component={Register}/>
    </Switch>
  )
}

function App() {
  return (
    <>
      <Router>
      <Navbar/>
      <Routing/>
      </Router>
      
    </>
  );
}

export default App;
