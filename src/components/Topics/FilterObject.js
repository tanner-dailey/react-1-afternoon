import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
            unFilteredArray: [
                {
                    color: 'red',
                    number: 5,
                    shape: 'circle'
                },
                {
                    color: 'orange',
                    shape: 'square',
                    size: 'big'
                },
                {
                    color: 'black',
                    number: 2,
                }
            ],
            userInput: '',
            filteredArray: []
        }
    }
    
    addInput(val){
        this.setState({userInput: val})
    }

    filterArray(prop){
        let objects = this.state.unFilteredArray
        let filteredObjects = objects.filter(function(item){
            return item.hasOwnProperty(prop)
        })

        this.setState({filteredArray: filteredObjects})
    }

    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className='inputLine' onChange={(e) => this.addInput(e.target.value)} />
                <button className='confirmationButton' onClick={() => this.filterArray(this.state.userInput)}>Filter</button>
        <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}