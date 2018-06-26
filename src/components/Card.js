import React, { Component } from 'react';
import './Card.css'
import HorizontalContainer from './HorizontalContainer';
class Card extends Component {
    constructor() {
        super();
        this.state = {
            recipes: [
                'recipename', 'Gulab jamun', 'fijeifj', 'goirejgi'
            ]
        }
    }
    render() {
        return (
            //{this.state.recipes.map(name => (<li id='container' key={name}><b>{name}</b></li>))}
            <div id='container' >
                {this.state.recipes.map(name => (<div class='card' key={name}>{this.state.recipename}</div>))}
            </div>

        );
    }
}
export default Card;