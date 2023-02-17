import React from 'react';
import './App.css';

function App(props) {
  return (
    <div className="box">
      <h2>Kalvium Gallery</h2>
      <div className="container">
        <img
          key={1}
          src={props.img}
          alt="Elephant 1"
          className="image" 
        />
        <img
          key={2}
          src={props.img}
          alt="Elephant 2"
          className="image" 
        />
        <img
          key={3}
          src={props.img}
          alt="Elephant 3"
          className="image" 
        />
        <img
          key={4}
          src={props.img}
          alt="Elephant 4"
          className="image" 
        />
      </div>
    </div>
  );
}


export default App;
