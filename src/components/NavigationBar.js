import React, { Component } from 'react';
import './NavigationBar.css';
class NavigationBar extends Component {
    
    constructor(){
        super();
        this.state={
            display:"none",

            username:"",
        }
    }
    btnSignInClick() {
        //add database code here to verify usernsme password
    }

    btnSubmitClick() {
        //alert("submit clicked")
         alert(this.state.username+"  ")
    }

    handleOnChange(event) {
        this.setState({username:event.target.value});

        //this.setState({item:});
        
      }
    render() {
        return (
            <div  >
                <ul className='leftposition' >
                    <li className="list1"><a href="#home">Home</a></li>
                    <li className="list1"><a href="#mealtype">Meal Type</a></li>
                    <li className="list1"><a href="#dishtype">Dish Type</a></li>
                    <li className="list1"><a href="#contact">Contact</a></li>
                    <li ><a className="active" href="#signin" onClick={this.btnSignInClick.bind(this)}>Sign In</a></li>
                    <li ><a className="active" href="#signup" float="right" >Sign Up</a></li>

                    <li >

                        <input className="inputbox1" placeholder="username" value={this.state.inputValue} onChange={this.handleOnChange.bind(this)}  />
                        <input className="inputbox2" placeholder="password" value={this.state.inputValue} onChange={this.handleOnChange.bind(this)}  />
                        <button className="button1" onClick={this.btnSubmitClick.bind(this)}>Submit</button>
                    </li>
                </ul>


            </div>
        );
    }
}
export default NavigationBar;