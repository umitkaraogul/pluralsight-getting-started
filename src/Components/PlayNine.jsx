import React from "react";
import _ from "lodash";

const Starts = props => {
  //const numberOfStars = 1 + Math.floor(Math.random() * 9);
  // let stars = [];
  // for (let i = 0; i < numberOfStars; i++) {
  //   stars.push(<i key={i} className="fa fa-star" />);
  // }

  return (
    <div className="col-5">
      {_.range(props.numberOfStars).map(i => <i key={i} className="fa fa-star" />)}
    </div>
  );
};

const Button = props => {
  return (
    <div className="col-2">
      <button class="btn" disabled={props.selectedNumbers.length===0}> = </button>
    </div>
  );
};

const Answer = props => {

    return (
    <div className="col-5">

        {props.selectedNumbers.map((number,i) =>
             <span key={i} onClick={()=> props.unSelectNumber(number)}>{number}</span>
        )}

    </div>
  );
};
const Numbers = (props) => {
  //Every Numbers component will use the exact same constant and never change that.
  //const arrayOfNumbers = _.range(1, 10);
    const numberClassName=(number)=>{
      if (props.selectedNumbers.indexOf(number)>=0){
          return "selected";
      }
    };

  return (
    <div className="card text-center">
      <div>
        {Numbers.list.map((number, i) =>
            <span key={i}  className={numberClassName(number)} onClick={()=>props.selectNumber(number)} >{number}</span>
        )}
      </div>
    </div>
  );
};

Numbers.list = _.range(1, 10);

class Game extends React.Component {
    state={
      selectedNumbers:[],
        randomNumberOfStars : 1 + Math.floor(Math.random() * 9)

    };

    selectNumber=(clickedNumber) => {

        /*
        this.setState({
                selectedNumbers:this.state.selectedNumbers.concat(clickedNumber)
        });
        */
        if(this.state.selectedNumbers.indexOf(clickedNumber)>=0){return;}
        this.setState(prevState=>({
           selectedNumbers:prevState.selectedNumbers.concat(clickedNumber)
        }));
    };

    unSelectNumber=(clickedNumber) => {

        let index=this.state.selectedNumbers.indexOf(clickedNumber);
        if(index>=0){
            this.setState(prevState=>({
               // selectedNumbers:prevState.selectedNumbers.splice(index,1)
                selectedNumbers:prevState.selectedNumbers.filter(number =>number !== clickedNumber)
            }));
        }


    };

  render() {
      const { selectedNumbers, randomNumberOfStars }=this.state;
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Starts numberOfStars={randomNumberOfStars} />
          <Button selectedNumbers={selectedNumbers} />
          <Answer  selectedNumbers={selectedNumbers} unSelectNumber={this.unSelectNumber}/>
        </div>
        <hr />
        <Numbers selectedNumbers={selectedNumbers} selectNumber={this.selectNumber} />
      </div>
    );
  }
}
export default Game;
