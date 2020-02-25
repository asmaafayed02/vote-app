import React, { Component } from "react";
import VoteCalculate from "./voteCalc";

class Votes extends Component {
  state = {
      //pass items of vote
    votes: [
      { id: 0, name: "Php lang", value: 1 },
      { id: 1, name: "Python ", value: 0 },
      { id: 2, name: "Go lang ", value: 0 },
      { id: 3, name: "Java lang", value: 0 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.votes.map(vote => (
          <VoteCalculate key={vote.id} value= {vote.value} name = {vote.name} />
        ))}
      </div>
    );
  }
}

export default Votes;
