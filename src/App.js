import React from "react";
import "./App.css";
import Button from "./Components/Button";
import GithubUser from "./Components/Github";

export class App extends React.Component {
  state = {
    counter: 0
  };

  incrementCounter = incrementValue => {
    this.setState(prevState => ({
      counter: prevState.counter + incrementValue
    }));
  };

  render() {
    if (document.location.pathname === "/") {
      return (
        <div>
          <Button incrementValue={1} onClickFunction={this.incrementCounter} />
          <Button incrementValue={2} onClickFunction={this.incrementCounter} />
          <Button incrementValue={3} onClickFunction={this.incrementCounter} />
          <Result counter={this.state.counter} />
        </div>
      );
    } else if (document.location.pathname === "/github") {
      return (
        <div>
          <GithubUser />
        </div>
      );
    } else {
      return (
        <div>
          <span>Test</span>
        </div>
      );
    }
  }
}

const Result = props => {
  return <div>{props.counter}</div>;
};

export default Result;
