import React, {Component} from 'react';
import Menu from './MenuComponent.js';
import { Navbar, NavbarBrand } from 'reactstrap';
import {DISHES} from '../shared/dishes.js';
import DishDetail from './DishDetailComponent';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish : null,
    };
  }
  onDishSelect(dishId) {
    this.setState({selectedDish: dishId});  
}


  render(){

    return(
       <div>
         <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Welcome to My Resturant</NavbarBrand>
            </div>
         </Navbar>
         <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
         <DishDetail dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]} />
      </div>
    );

  }
}
export default Main;
