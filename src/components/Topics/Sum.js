import React, { Component } from 'react';

export default class Sum extends Component {
    constructor(){
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    
    userNum1(val){
        this.setState({number1: parseInt(val, 10)})
    }

    userNum2(val){
        this.setState({number2: parseInt(val, 10)})
    }

    getSum(num1, num2){
        this.setState({sum: num1 + num2})
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine"  type='number' onChange={(e) => this.userNum1(e.target.value)} />
                <input className="inputLine" type='number' onChange={(e) => this.userNum2(e.target.value)} />
                <button className="confirmationButton" onClick={() => this.getSum(this.state.number1, this.state.number2)}>Add</button>
                <span className="resultsBox"> Sum: {this.state.sum}</span>
            </div>
        )
    }
}