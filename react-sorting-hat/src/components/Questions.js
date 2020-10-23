import React, { Component } from 'react'

// What house do you not want to be placed in?
// What house do you want to be place in?
// What Trait do you most associate yourself with?
// What's your favorite color combo?
// How smart do you think you are?
// Which of these is your favorite animal?

export default class Questions extends Component {
  constructor() { 
    super()
    this.state = {
      answers: {}
    }
  }
  
  onChange = e => {
    const { name, value } = e.target
    this.setState({ answers: {
      ...this.state.answers,
      [name]: value
    }})
  }

  handleDecideHouse = e => {
    e.preventDefault()
    console.log(this.state.answers)
    this.props.decideHouse(Object.values(this.state.answers))
  }

  render() {
    return (
      <form onSubmit={ this.handleDecideHouse }>
        What house do you not want to be placed in?
        <select
          onChange={ this.onChange }
          name="question1"
          value={ this.state.answers.question1 }
        >
          <option>...Choose Option...</option>
          <option value={10}>Slytherin</option>
          <option value={20}>Ravenclaw</option>
          <option value={30}>Hufflepuff</option>
          <option value={40}>Gryffindor</option>
        </select>
        What house do you want to be place in?
        <select
          onChange={ this.onChange }
          name="question2"
          value={ this.state.answers.question2 }
        >
          <option>...Choose Option...</option>
          <option value={10}>Gryffindor</option>
          <option value={20}>Hufflepuff</option>
          <option value={30}>Ravenclaw</option>
          <option value={40}>Slytherin</option>
        </select>
        What Trait do you most associate yourself with?
        <select
          onChange={ this.onChange }
          name="question3"
          value={ this.state.answers.question3 }
        >
          <option>...Choose Option...</option>
          <option value={10}>Bravery</option>
          <option value={20}>Loyalty</option>
          <option value={30}>Intelligence</option>
          <option value={40}>Ambition</option>
        </select>
        What's your favorite color combo?
        <select
          onChange={ this.onChange }
          name="question4"
          value={ this.state.answers.question4 }
        >
          <option>...Choose Option...</option>
          <option value={10}>Scarlet and Gold</option>
          <option value={20}>Yellow and Black</option>
          <option value={30}>Blue and Bronze</option>
          <option value={40}>Green and Silver</option>
        </select>
        In which field do you feel you are most intelligent?
        <select
          onChange={ this.onChange }
          name="question5"
          value={ this.state.answers.question5 }
        >
          <option>...Choose Option...</option>
          <option value={10}>Emotional Intelligence</option>
          <option value={20}>Common Sense</option>
          <option value={30}>Academic Intelligence</option>
          <option value={40}>Street Smarts</option>
        </select>
        Which of these is your favorite animal?
        <select
          onChange={ this.onChange }
          name="question6"
          value={ this.state.answers.question6 }
        >
          <option>...Choose Option...</option>
          <option value={10}>Lion</option>
          <option value={20}>Badger</option>
          <option value={30}>Eagle</option>
          <option value={40}>Snake</option>
        </select>
        <button>Place Sorting Hat on Head</button>
      </form>
    )
  }
}
