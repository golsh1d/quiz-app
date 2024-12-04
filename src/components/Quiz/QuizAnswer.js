import './QuizAnswer.css'
import React, { Component } from 'react'

export default class QuizAnswer extends Component {

  clickHandler(isCorrect) {
    this.props.onScore(isCorrect)
    this.props.onCounter()
  }  

  render() {
    let {id , answer , isCorrect} = this.props
    return (
      <div className='QuizAnswer-wrapper' onClick={this.clickHandler.bind(this , isCorrect)}>{answer}</div>
    )
  }

}