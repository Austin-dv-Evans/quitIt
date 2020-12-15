import './App.css';
import React from 'react'
import { Container, Jumbotron } from 'reactstrap'
import Counter from './Counter'
import bgimage from '../src/assets/quitSmoking.png'

function App() {
  return (
    <div className="App">
        <Jumbotron fluid  style={{ backgroundImage: `url(${bgimage})`, backgroundPosition: "center"}}>
          <Container fluid>
            <>
            <h1 className=" mb-5 quitHeading">Quit it!</h1>
            <p className="display-5 takeBack">Take back control of your life!</p>
            </>
          </Container>
        </Jumbotron>
        <Counter />
    </div>
  );
}

export default App;
