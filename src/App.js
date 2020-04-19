import React, {Component} from 'react';
import './App.css';
import Main from './Components/MainComponent.js';
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {
 
  render(){

    return(
       <div>
         <Main />
      </div>
    );

  }
}
export default App;
