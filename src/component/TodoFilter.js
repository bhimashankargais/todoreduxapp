import React from 'react';
import './TodoInsert.scss';
import {filterTodo}  from '../store/action/todoaction'
import { connect} from "react-redux"
class TodoFilter extends React.Component {
   
    buttonPress = (filtertype) => {
      this.props.filterTodo(filtertype);
    }
    render() {
        return (
            <div className="TodoInsert">
              
                 <button className="button" onClick={()=>this.buttonPress('ALL')} >All</button>
                 <button className="button" onClick={()=>this.buttonPress('Completed')} >Completed</button>
                 <button className="button" onClick={()=>this.buttonPress('Uncompleted')} >Uncompleted</button>
 
            </div>
        )


    }
}
export default connect(null,{filterTodo})(TodoFilter);
