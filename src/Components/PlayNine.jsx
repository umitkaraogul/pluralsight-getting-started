import React from "react";
import _ from "lodash";

const Starts = props => {
  const numberOfStars = 1 + Math.floor(Math.random() * 9);
  // let stars = [];
  // for (let i = 0; i < numberOfStars; i++) {
  //   stars.push(<i key={i} className="fa fa-star" />);
  // }

  return (
    <div className="col-5">
      {_.range(numberOfStars).map(i => <i key={i} className="fa fa-star" />)}
    </div>
  );
};

const Button = props => {
  return (
    <div className="col-2">
      <button> = </button>
    </div>
  );
};

const Answer = props => {
  return (
    <div className="col-5">
      <span>5</span>
      <span>6</span>
    </div>
  );
};
const Numbers = () => {
  //Every Numbers component will use the exact same constant and never change that.
  //const arrayOfNumbers = _.range(1, 10);
  return (
    <div className="card text-center">
      <div>
        {Numbers.list.map((number, i) => <span key={i}>{number}</span>)}
      </div>
    </div>
  );
};

Numbers.list = _.range(1, 10);

class Game extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Starts count={3} />
          <Button />
          <Answer />
        </div>
        <hr />
        <Numbers />
      </div>
    );
  }
}
export default Game;
