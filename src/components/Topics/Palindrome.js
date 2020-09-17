import React, { Component } from 'react';

export default class Palindrome extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    addInput(val){
        this.setState({userInput: val})
    }

    check(str){
        let forwards = str;
        let backwards = str;
        backwards = backwards.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('');

        if(forwards === backwards){
            this.setState({palindrome: 'true'})
        } else{
            this.setState({palindrome: 'false'})
        }
    }
    
    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={(e) => this.addInput(e.target.value)} />
                <button className='confirmationButton' onClick={() => this.check(this.state.userInput)}>Check</button>
                <span className='resultsBox'>Palindrome: {JSON.stringify(this.state.palindrome, null, 10)}</span>
            </div>
        )
    }
}