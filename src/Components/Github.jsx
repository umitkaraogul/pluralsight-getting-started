import React from "react";
import axios from "axios";

const Card = props => {
  return (
    <div style={{ margin: "1em" }}>
      <img width="75" src={props.avatar_url} />
      <div style={{ display: "inline-block", marginLeft: 10 }}>
        <div style={{ fontSize: "1.25em", fontWeight: "bold" }}>
          {props.name}
        </div>
        <div>{props.company}</div>
      </div>
    </div>
  );
};

const CardList = props => {
  return <div>{props.cards.map(card => <Card key={card.id} {...card} />)}</div>;
};

class Form extends React.Component {
  state = { userName: "" };

  handleSubmit = event => {
    event.preventDefault();
    console.log("Event: Form Submit", this.state.userName);

    axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
        this.props.onSubmit(resp.data);
        this.setState({ userName: "" });
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          // ref={input => (this.userNameInput = input)}
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="Github username"
          required
        />
        <button>Add card </button>
      </form>
    );
  }
}

class GithubUser extends React.Component {
  state = {
    cards: []
  };
  addNewCard = cardInfo => {
    // this.setState({
    //   cards: this.state.cards.concat(cardInfo)
    // });
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default GithubUser;
