import React from 'react';
import './TodoInsert.scss';
import {addtodo}  from '../store/action/todoaction'
import { connect} from "react-redux"
class TodoInsert extends React.Component {
    constructor() {
        super();
        this.state = { inputValue: '' }
    }
    onChange = e => this.setState({ inputValue: e.target.value })
    buttonPress = () => {
        if (this.state.inputValue !== '') {
            this.props.addtodo(this.state.inputValue)
            this.setState({ inputValue: '' })
        } else {
            alert('Please enter value')
        }
    }
    render() {
        return (
            <div className="TodoInsert">
                <input className="input" value={this.state.inputValue} onChange={this.onChange}></input>
                <button className="button" onClick={this.buttonPress} >+</button>

            </div>
        )


    }
}
export default  connect(null,{addtodo})(TodoInsert);
