import React from 'react';
import { increment, decrement } from "./actions";
import { connect } from 'react-redux';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 0
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
        this.props.dispatch({
            type: 'INCREMENT',
            payload: e.target.value
        });
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <input type="text" onChange={ this.handleChange } value={this.state.value}/>
                <h2> Counter { this.props.count } </h2>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return{
        count: state.count
    }
}


export default connect (mapStateToProps, { increment, decrement })(Counter)

