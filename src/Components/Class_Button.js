import React from 'react';

//Class Component
class Button extends React.Component {
    /*
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }
*/
    state = {
        counter: 0
    };

    //Use arrow function that are bound to the component instance
    handleClick = () => {

        /*
        this.setState({
            counter: this.state.counter + 1
        });
        */

        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            };
        });
    };

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.counter}
            </button>
        );
    }
}

export default Button;