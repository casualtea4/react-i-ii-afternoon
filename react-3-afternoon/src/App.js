import React from 'react';
import data from './data';
import Card from './Components/Cards'
import './App.css';
import Home from './Components/Home'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      people: data,
      i:0
    }
    this.nextCard=this.nextCard.bind(this)
    this.previousCard=this.previousCard.bind(this)
  }

  nextCard(e){
    if(this.state.i<=23){
    this.setState({i:this.state.i+1})
    }else{
      this.setState({i:0})
    }
  }

  previousCard(e){
    if(this.state.i>0){
    this.setState({i:this.state.i-1})
    } else{
      this.setState({i:24})
    }
  }

  render(){
    return(
      <div className='App'>
        <Home className='Home'/>
        <h2 className= 'CardNumber'>
          {`${this.state.i+1}/${this.state.people.length}`}
        </h2>

        {<Card person={this.state.people[this.state.i]}/>}

        <button onClick={this.previousCard}>
          previous
        </button>
        <button>
          edit
        </button>
        <button onClick={this.nextCard}>
          next
        </button>
      </div>
    )
  }
}



export default App;
