import React, { Component } from 'react';

export default class FilterString extends Component {
    constructor(){
        super();
        this.state = {
            unfilteredArray: ['boxer', 'great dane', 'bulldog', 'mastiff', 'dachsund', 'labrador', 'pitbull', 'terrier'],
            userInput: '',
            filteredArray: []
        };
    }

    addInput(val){
        this.setState({userInput: val})
    }

    filterArray(userStr){
        let dogs = this.state.unfilteredArray;
        let filteredDogs = [];
      
        for(let i = 0; i < dogs.length; i++){
            if(dogs[i].includes(userStr)){
                filteredDogs.push(dogs[i])
            }
        }

        this.setState({filteredArray: filteredDogs})
    }
    
    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Dogs: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
                <input className='inputLine' onChange={(e) => this.addInput(e.target.value)} />
                <button className='confirmationButton' onClick={() => this.filterArray(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered Dogs: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}