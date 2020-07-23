import React from 'react';
import './App.css';


import MainText from '../MainText/MainText'
import OptionsContainer from '../../containers/OptionsContainer/OptionsContainer'

import CYO from '../../data/CYO' 

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      currentNode: CYO.nodes.START
      }
      
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  handleTextChange(choice){
    /*
    Update Current Text Display and Options
    */
    let nextNode = CYO.makeChoice(this.state.currentNode, choice);
    this.setState(
      {
        currentNode: nextNode
      }
    )
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          HELLO
        </header>
          <MainText 
            main={this.state.currentNode.text}
            id={this.state.currentNode.ID}
            />
          <OptionsContainer 
            options={this.state.currentNode.options} 
            handleClick={this.handleTextChange}
            />
      </div>
    );
  }
}



export default App;
