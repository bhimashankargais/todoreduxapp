import React from 'react';
import './TodoListItem.scss';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import {connect} from 'react-redux'
import {onToggle , removeFromTodo} from '../store/action/todoaction'
class TodoListItem extends React.Component {


    render() {
        return (
            <div className="TodoListItem">
                {this.props.displaydata.checked ? (<MdCheckBox onClick={() => this.props.onToggle(this.props.displaydata.id)} className="checked" />) : (<MdCheckBoxOutlineBlank onClick={() => this.props.onToggle(this.props.displaydata.id)} className="checked" />)}
                {this.props.displaydata.checked ? (<label className="text1">{this.props.displaydata.content}</label>) : (<label className="text">{this.props.displaydata.content}</label>)}
                <MdRemoveCircleOutline onClick={() => this.props.removeFromTodo(this.props.displaydata.id)} className="remove"></MdRemoveCircleOutline>
            </div>
        )
 

    }
}

const mapDispatchToProps = {onToggle,removeFromTodo}

// const mapDispatchToProps = dispatch => {
//     return {
//       // dispatching actions returned by action creators
    
//       onToggle: todoId => dispatch(onToggle(todoId)),
//       removeFromTodo: todoId => dispatch(removeFromTodo(todoId)),
    
//     }
//   }


export default connect(null,mapDispatchToProps)(TodoListItem);

