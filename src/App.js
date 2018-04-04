import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';

export class App extends React.Component {
  state = {
    counter: 0
  };

  incrementCounter=(incrementValue)=>{
    this.setState((prevState)=>({
      counter:prevState.counter+incrementValue
    }));
  };

  render() {
    return (
      <div>
    <Button incrementValue={1} onClickFunction={this.incrementCounter}  />
    <Button incrementValue={2} onClickFunction={this.incrementCounter} />
    <Button incrementValue={3} onClickFunction={this.incrementCounter} />
    <Result counter={this.state.counter}/>
    </div>
    )
  }
}

const Result=(props) =>{
return (
  <div>{props.counter}</div>
);
};

export default Result;
