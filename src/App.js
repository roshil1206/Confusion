import React, {Component} from 'react';
import './App.css';
import Menu from './Components/MenuComponent.js';
import { Navbar, NavbarBrand } from 'reactstrap';
import {DISHES} from './shared/dishes.js';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render(){

    return(
       <div>
         <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Welcome to My Resturant</NavbarBrand>
            </div>
         </Navbar>
         <Menu dishes={this.state.dishes} />
      </div>
    );

  }
}
export default App;
