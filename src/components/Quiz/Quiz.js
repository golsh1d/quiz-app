import "./Quiz.css"
import React, { Component } from 'react'
import QuizAnswer from "./QuizAnswer"

export default class Quiz extends Component {
  
  constructor (props) {
    super (props)

    this.state = {
        questions : [
            {
                question : "What is the capital of Iran ?" ,
                answers : [
                    {id : 1 , answer : 'Tehran' , isCorrect : true} ,
                    {id : 2 , answer : 'Karaj' , isCorrect : false} ,
                    {id : 3 , answer : 'Isfahan' , isCorrect : false} ,
                    {id : 4 , answer : 'Hamadan' , isCorrect : false} ,
                ]
            } ,

            {
                question : "What is the highest peak in the world ?" ,
                answers : [
                    {id : 1 , answer : 'Taftan' , isCorrect : false} ,
                    {id : 2 , answer : 'Alvand' , isCorrect : false} ,
                    {id : 3 , answer : 'Damavand' , isCorrect : false} ,
                    {id : 4 , answer : 'Everest' , isCorrect : true} ,
                ]
            } ,
            
            {
                question : "Who is the CEO of Microsoft ?" ,
                answers : [
                    {id : 1 , answer : 'Bill Gates' , isCorrect : false} ,
                    {id : 2 , answer : 'Brad Smith' , isCorrect : false} ,
                    {id : 3 , answer : 'Satya Nadella' , isCorrect : true} ,
                    {id : 4 , answer : 'Kevin Systorms' , isCorrect : false} ,
                ]
            } ,

            {
                question : "Who is the CEO of Facebook ?" ,
                answers : [
                    {id : 1 , answer : 'Mark Zuckerberg' , isCorrect : true} ,
                    {id : 2 , answer : 'Elon Musk' , isCorrect : false} ,
                    {id : 3 , answer : 'Satya Nadella' , isCorrect : false} ,
                    {id : 4 , answer : 'Bill Gates' , isCorrect : false} ,
                ]
            } ,

            {
                question : "What is the closest planet to the sun ?" ,
                answers : [
                    {id : 1 , answer : 'Jupiter' , isCorrect : false} ,
                    {id : 2 , answer : 'Mercury' , isCorrect : true} ,
                    {id : 3 , answer : 'Earth' , isCorrect : false} ,
                    {id : 4 , answer : 'Mars' , isCorrect : false} ,
                ]
            } ,
        ] ,

        counter : 0 ,

        score : 0 ,

        boxDisplay : "none" ,
    }

    this.counterHandler = this.counterHandler.bind(this)
    this.scoreCounter = this.scoreCounter.bind(this)
  }  

  counterHandler() {
    if (this.state.counter < (this.state.questions.length - 1)) {
        this.setState(prevState => {
            return {counter : prevState.counter + 1}
        })
    } else {
        this.setState({
            boxDisplay : "flex"
        })
    }
  }

  scoreCounter(isCorrect) {
    if (isCorrect) {
        this.setState(prevState => {
            return {score : prevState.score + 1}
        })
    }
  }

  render() {
    return (
      <div className="Quiz-wrapper">

        <div className="Quiz-title">
            {this.state.questions[this.state.counter].question}
        </div>

        {
            this.state.questions[this.state.counter].answers.map(answer => (
                <QuizAnswer key={answer.id} {...answer} onCounter={this.counterHandler} onScore={this.scoreCounter}/>
            ))
        }
        
        <div className="Quiz-counter">
            {this.state.counter + 1} / {this.state.questions.length}
        </div>

        <div className="Quiz-modal" style={{display : this.state.boxDisplay}}>
            You scored {this.state.score} of {this.state.questions.length}
        </div>

      </div>
    )
  }
}