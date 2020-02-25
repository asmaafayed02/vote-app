import React, { Component } from "react";

class VoteCalculate extends Component {
  state = {
    number: this.props.value //numbers of count vote
  };
  //event for click button
  handleClick = ()=> {
    this.setState({ number: this.state.number + 1 }); //increase value of numbers
  }
  render() {
  
    return (
      //parts of vote calculator
      <div className='vote'>
          <span className ='number'>{this.formatCount()}</span>
          <span className = 'language'>{this.props.name}</span>
          <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
  //function to return value of number when changed
  formatCount() {
    const { number } = this.state;
    return number === 0 ? 0 : number;
  }
 
}

export default VoteCalculate;
