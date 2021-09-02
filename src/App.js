import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import AddUsers from './components/users/AddUsers'
import Navbar from "./Layout/Navbar";
import NotFound  from "./components/pages/NotFound";
import EditUser from "./components/users/EditUser";
import ViewUser from "./components/users/ViewUser";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/adduser' component={AddUsers}/>
          <Route exact path='/edituser/:id' component={EditUser}/>
          <Route exact path='/viewuser/:id' component={ViewUser}/>
          <Route  component={NotFound}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
