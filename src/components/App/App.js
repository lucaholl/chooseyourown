import React from 'react';
import './App.css';


import MainText from '../MainText/MainText'
import OptionsContainer from '../../containers/OptionsContainer/OptionsContainer'

import CYO from '../../data/CYO' 
import Player from '../../data/Player'

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      textData: CYO.choices[0]
      }
      
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  handleTextChange(id){
    /*
    Update Current Text Display and Options
    */
    this.setState(
      {
        textData: CYO.choices[id]
      }
    )
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          HELLO
        </header>
          <MainText main={this.state.textData.main}/>
          <OptionsContainer 
            options={this.state.textData.options} 
            handleClick={this.handleTextChange}
            />
      </div>
    );
  }
}



export default App;
