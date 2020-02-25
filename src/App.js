import React from 'react';
import Votes from "./Components/votesCalc";
import './App.css'

function App() {
  return (
    //put allcomponant inside the app
    <React.Fragment>
      <h1>Vote Your Language</h1>
      <Votes />
    </React.Fragment>
  );
}

export default App;
