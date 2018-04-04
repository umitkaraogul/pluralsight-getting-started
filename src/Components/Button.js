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
/*
    state = {
        counter: 0
    };
*/
    //Use arrow function that are bound to the component instance
   /*
    handleClick = () => {

        
       // this.setState({
       //     counter: this.state.counter + 1
       // });
        

        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            };
        });
    };
*/

handleOnClick=()=>{
    this.props.onClickFunction(this.props.incrementValue);
}


    render() {
        return (
            /* 
            While these solutions work fine, they are not the recommended way to handle this situation.
            The reason being, when we use the bind method or the function wrapper method, 
            we're actually creating a new function fro every rendered button, and that can be avoided.
            Instead, we'll resurrect this handleClick function.
            The onClick handler will just call that, this way it's not creating a new function every time.
            */
            //<button onClick={()=>this.props.onClickFunction(this.props.incrementValue)}  >
             <button onClick={this.handleOnClick} >
            +{this.props.incrementValue}
         </button>
        );
    }
}

export default Button;