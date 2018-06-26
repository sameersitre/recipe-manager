import React, { Component } from 'react';
import './HorizontalContainer.css';
import recipejson from'../DataJson/recipes.json';
//import Card from './Card'
class HorizontalContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

            recipes: recipejson,
        }

    }
    render() {
        return (
            <div className='hor-slide-container'>
                {this.state.recipes.map(name => (<div className='card' key={name}><b>{name}</b></div>))}


            </div>
        );
    }
}
export default HorizontalContainer;
