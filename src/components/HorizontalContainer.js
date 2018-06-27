import React, { Component } from 'react';
import './HorizontalContainer.css';
import recipejson from '../DataJson/recipes.json';
import dish from '../DataJson/dishtype.json';
//import Card from './Card'
class HorizontalContainer extends Component {
    constructor() {
        super();
        this.state = {

            recipes: recipejson,
            dishtype: dish,
        }

    }
    render() {
        return (

            <div>
                <h2> Recipe Types</h2>
                <div className='hor-slide-container'>
                    {this.state.recipes.map(name => (<div className='card' key={name}>{name}</div>))}
                </div>
                <h2> Popular Recipes</h2>
                <div className='hor-slide-container' >

                    {this.state.dishtype.map((person, i) => <Recipetemp key={i} dishtype={person} />)}

                </div>
            </div>


        );
    }
}

class Recipetemp extends Component {
    render() {
        return (

            <div className='card'>

                <img className='cardsmall' src={require("../assets/" + this.props.dishtype.imagename)} alt="dish horizontal" object-fit="none" />
                <div >
                    {this.props.recipes}
                    <h2>{this.props.dishtype.id}</h2>
                    <h3>Recipe Name:<br />{this.props.dishtype.Recipename}</h3>
                    <h3>{this.props.dishtype.RecipeType}</h3>

                    <h4>Recipe By: {this.props.dishtype.Username} </h4>
                </div>

            </div>
        );

    }
}
export default HorizontalContainer;
