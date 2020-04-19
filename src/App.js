import React, {Component} from 'react';
import './App.css';
import Menu from './Components/MenuComponent.js';
import { Navbar, NavbarBrand } from 'reactstrap';
class App extends Component {

  render(){

    return(
       <div>
         <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Welcome to My Resturant</NavbarBrand>
            </div>
         </Navbar>
         <Menu />
      </div>
    );

  }
}
export default App;
