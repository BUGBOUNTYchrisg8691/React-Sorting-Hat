import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { descriptions } from "./components/descriptions"

import Questions from "./components/Questions"

// What house do you not want to be placed in?
// What house do you want to be place in?
// What Trait do you most associate yourself with?
// What's your favorite color combo?
// How smart do you think you are?
// Which of these is your favorite animal?

function App() {
  const [house, setHouse] = useState(null)

  const decideHouse = (answers) => {
    let house
    console.log(answers)
    const total = answers.reduce((count, next) => {
      return count + Number(next)
    }, 0) 
    console.log(total)
    const avg = total / 6
    console.log(avg)
    switch ([0, 10, 20, 30].reduce((a, b) => {
      return Math.abs(b - avg) < Math.abs(a - avg) ? b : a
    })) {
      case 0:
        house = "Gryffindor"
        break
      case 10:
        house = "Hufflepuff"
        break
      case 20:
        house = "Ravenclaw"
        break
      case 30:
        house = "Slytherin"
        break
    }
    setHouse(house)
  }

  return (
    <div className="App">
      <Questions decideHouse={ decideHouse } />
      { house && 
        <>
          <div>You been place in {house}</div>
          <div>{ descriptions["The Four Houses of Hogwarts"][house] }</div>
        </>
      }

      {/* <div>{JSON.stringify(descriptions)}</div> */}
    </div>
  );
}

export default App;
