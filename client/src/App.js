import { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Chat from './chat/index';
import Header from './header/index';
import Sidenav from './sidenav/index';
import Reservation from './reservation/index';

class App extends Component{

  render(){ 
    return (
      <div className="App">      
          <Header />
          <div className="d-flex justify-content-between">
            <Router>
              <Sidenav />  
              <Switch>
                <Route path='/' exact component={Chat}></Route>
                <Route path='/reservation'  component={Reservation}></Route>
               </Switch>
            </Router>
          </div>
      </div>
    );
  }
}

export default App;
